import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL = './models/grumysh.glb';
const MODEL_HEIGHT = 2;
const COMPANION_URL = './models/stitch.glb';
const COMPANION_HEIGHT = 1.05;

export type OneShot = { name: string; id: number } | null;
export type PointerRef = MutableRefObject<{ x: number; y: number }>;
// 0 = avatar en la portada, 1 = acoplado en la esquina
export type FlightRef = MutableRefObject<number>;

// Normaliza un modelo de VoxEdit: altura fija, pies en y=0 y centrado
function fitScene(scene: THREE.Object3D, height: number) {
  const box = new THREE.Box3().setFromObject(scene);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = height / size.y;
  return { s, x: -center.x * s, y: -box.min.y * s, z: -center.z * s };
}

function useNoCulling(scene: THREE.Object3D) {
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).frustumCulled = false;
    });
  }, [scene]);
}

type ModelProps = {
  loop: string;
  oneShot: OneShot;
  pointer: PointerRef;
  onReady: () => void;
};

function Model({ loop, oneShot, pointer, onReady }: ModelProps) {
  const { scene, animations } = useGLTF(MODEL_URL);
  const mixer = useMemo(() => new THREE.AnimationMixer(scene), [scene]);
  const current = useRef<THREE.AnimationAction | null>(null);
  const loopRef = useRef(loop);
  const playingOnce = useRef(false);
  // Head-Global lleva la cabeza junto con ojos, cejas y boca
  const head = useMemo(() => scene.getObjectByName('Head-Global') ?? null, [scene]);
  const headBase = useMemo(() => head?.quaternion.clone() ?? new THREE.Quaternion(), [head]);
  const look = useRef(new THREE.Vector2());
  const tmpQuat = useMemo(() => new THREE.Quaternion(), []);
  const tmpEuler = useMemo(() => new THREE.Euler(), []);

  const fit = useMemo(() => fitScene(scene, MODEL_HEIGHT), [scene]);
  useNoCulling(scene);

  const play = (name: string, once: boolean) => {
    const clip = THREE.AnimationClip.findByName(animations, name);
    if (!clip) return;
    const next = mixer.clipAction(clip);
    const prev = current.current;
    if (prev === next && !once && next.isRunning()) return;
    next.reset();
    next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    next.clampWhenFinished = once;
    next.enabled = true;
    next.setEffectiveWeight(1);
    next.play();
    if (prev && prev !== next) next.crossFadeFrom(prev, 0.35, false);
    current.current = next;
    playingOnce.current = once;
  };

  // Al terminar una animación de un solo uso, volvemos al loop de la sección
  useEffect(() => {
    const onFinished = () => {
      if (!playingOnce.current) return;
      playingOnce.current = false;
      play(loopRef.current, false);
    };
    mixer.addEventListener('finished', onFinished);
    return () => mixer.removeEventListener('finished', onFinished);
  }, [mixer]);

  useEffect(() => {
    loopRef.current = loop;
    if (!playingOnce.current) play(loop, false);
  }, [loop]);

  useEffect(() => {
    if (oneShot) play(oneShot.name, true);
  }, [oneShot?.id]);

  useEffect(() => {
    onReady();
    return () => {
      mixer.stopAllAction();
      current.current = null;
      playingOnce.current = false;
    };
  }, [mixer]);

  useFrame((_, delta) => {
    // El mixer solo reescribe la rotación cuando la animación cambia, así que
    // quitamos el giro del frame anterior; si no, se acumula y la cabeza da vueltas
    if (head) head.quaternion.copy(headBase);
    mixer.update(Math.min(delta, 0.1));
    // La cabeza sigue al cursor, sumado encima de la animación
    if (head) {
      headBase.copy(head.quaternion);
      look.current.lerp(pointer.current, 0.08);
      tmpEuler.set(-look.current.y * 0.25, -look.current.x * 0.4, 0);
      head.quaternion.premultiply(tmpQuat.setFromEuler(tmpEuler));
    }
  });

  return (
    <group position={[fit.x, fit.y, fit.z]} scale={fit.s}>
      <primitive object={scene} />
    </group>
  );
}

// Stitch acompaña a Grumysh solo en la portada: se encoge y desaparece al empezar el scroll
function Companion({ flight, label }: { flight: FlightRef; label: string }) {
  const { scene, animations } = useGLTF(COMPANION_URL);
  const mixer = useMemo(() => new THREE.AnimationMixer(scene), [scene]);
  const fit = useMemo(() => fitScene(scene, COMPANION_HEIGHT), [scene]);
  const holder = useRef<THREE.Group>(null);
  const shown = useRef(0);
  // Al pasar el mouse (o tocarlo en el celular) aparece su presentación
  const [hover, setHover] = useState(false);
  useNoCulling(scene);

  useEffect(() => {
    const clip = THREE.AnimationClip.findByName(animations, 'Idle 01');
    if (clip) mixer.clipAction(clip).play();
    return () => {
      mixer.stopAllAction();
    };
  }, [mixer, animations]);

  useFrame((_, delta) => {
    const target = flight.current < 0.15 ? 1 : 0;
    shown.current += (target - shown.current) * Math.min(1, delta * 8);
    const g = holder.current;
    if (!g) return;
    g.visible = shown.current > 0.01;
    if (!g.visible && hover) setHover(false);
    g.scale.setScalar(shown.current);
    if (g.visible) mixer.update(Math.min(delta, 0.1));
  });

  return (
    <group ref={holder}>
      <group
        position={[fit.x, fit.y, fit.z]}
        scale={fit.s}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
          // el clic es para Stitch, no para que Grumysh esquive
          e.stopPropagation();
          setHover((v) => !v);
        }}
      >
        <primitive object={scene} />
      </group>
      {hover && (
        <Html position={[0, COMPANION_HEIGHT + 0.08, 0]} zIndexRange={[40, 0]} style={{ pointerEvents: 'none' }}>
          <span className="pet-tag">{label}</span>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload(MODEL_URL);
useGLTF.preload(COMPANION_URL);

type AvatarProps = {
  loop: string;
  oneShot: OneShot;
  pointer: PointerRef;
  flight: FlightRef;
  petLabel: string;
  onReady: () => void;
  onPoke: () => void;
};

export default function Avatar({ loop, oneShot, pointer, flight, petLabel, onReady, onPoke }: AvatarProps) {
  return (
    <Canvas
      className="avatar-canvas"
      dpr={[1, 2]}
      // offsetSize: medir sin el scale() del contenedor, si no el canvas se encoge dos veces
      resize={{ offsetSize: true }}
      camera={{ position: [0, 1.15, 6.4], fov: 28 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.NeutralToneMapping }}
      onCreated={({ camera, gl }) => {
        camera.lookAt(0, 1, 0);
        gl.toneMappingExposure = 1.12;
      }}
      onClick={onPoke}
    >
      <hemisphereLight args={["#fff6fa", "#3a2c4a", 2.2]} />
      <directionalLight position={[-3, 5, 5]} intensity={3.2} color="#fff4ea" />
      <directionalLight position={[3, 2, 6]} intensity={0.7} color="#ffffff" />
      <directionalLight position={[-4, 3, -3]} intensity={1.6} color="#a77bff" />
      <directionalLight position={[4, 1, -2]} intensity={1.0} color="#ff7aa8" />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI - 0.12, 0]}>
          <Model loop={loop} oneShot={oneShot} pointer={pointer} onReady={onReady} />
        </group>
        {/* de frente es Math.PI; girado en tres cuartos hacia Grumysh */}
        <group position={[-0.72, 0, 0]} rotation={[0, Math.PI + 0.5, 0]}>
          <Companion flight={flight} label={petLabel} />
        </group>
        <ContactShadows position={[0, 0.001, 0]} opacity={0.55} scale={4} blur={2.4} far={1.6} color="#000000" />
      </Suspense>
    </Canvas>
  );
}
