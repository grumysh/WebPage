import { lazy, Suspense, useEffect, useRef, useState, type RefObject } from 'react';
import type { OneShot } from './Avatar';
import { useLang } from '../i18n';
import { ui } from '../content';

const Avatar = lazy(() => import('./Avatar'));

// Animación de cada sección y la que se lanza una vez al entrar
const LOOPS: Record<string, string> = {
  hero: 'Idle 01',
  about: 'Talk 01',
  projects: 'Walk 01',
  career: 'Climb 01',
  awards: 'Jump 01',
  badges: 'Sit 01',
  contact: 'Idle 02',
  footer: 'Sleep 01',
};
const ON_ENTER: Record<string, string> = { contact: 'Kiss 01' };

const GUTTER = 16;

type Props = { section: string; slotRef: RefObject<HTMLDivElement | null> };

export default function AvatarStage({ section, slotRef }: Props) {
  const { t } = useLang();
  const stageRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const [oneShot, setOneShot] = useState<OneShot>(null);
  const [talking, setTalking] = useState(true);
  const shotId = useRef(0);
  const fire = (name: string) => setOneShot({ name, id: ++shotId.current });

  // Saludo inicial: lanza un beso apenas carga
  useEffect(() => {
    if (ready) fire('Kiss 01');
  }, [ready]);

  useEffect(() => {
    const name = ON_ENTER[section];
    if (ready && name) fire(name);
  }, [section, ready]);

  useEffect(() => {
    setTalking(true);
    if (section === 'hero') return;
    const id = setTimeout(() => setTalking(false), 3500);
    return () => clearTimeout(id);
  }, [section]);

  // Vuela del hueco del hero a la esquina inferior derecha según el scroll
  useEffect(() => {
    const stage = stageRef.current;
    const bubble = bubbleRef.current;
    if (!stage || !bubble) return;
    let raf = 0;
    let lastW = 0;
    let lastH = 0;

    const update = () => {
      raf = 0;
      const slot = slotRef.current?.getBoundingClientRect();
      if (!slot) return;
      const w = slot.width;
      const h = slot.height;
      if (w !== lastW || h !== lastH) {
        stage.style.width = `${w}px`;
        stage.style.height = `${h}px`;
        lastW = w;
        lastH = h;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const dockW = vw < 720 ? 110 : 180;
      const k1 = dockW / w;
      const dockX = vw - GUTTER - w * k1;
      const dockY = vh - GUTTER - h * k1;
      const raw = Math.min(Math.max(window.scrollY / (vh * 0.75), 0), 1);
      const p = raw * raw * (3 - 2 * raw);
      const k = 1 + (k1 - 1) * p;
      const x = slot.left + (dockX - slot.left) * p;
      const y = slot.top + (dockY - slot.top) * p;
      stage.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${k})`;
      stage.dataset.docked = p > 0.98 ? 'true' : 'false';
      bubble.dataset.flying = p > 0.02 && p < 0.98 ? 'true' : 'false';
      bubble.style.transform = `translate3d(${x + w * k * 0.36}px, ${y + h * k * 0.06}px, 0)`;

      const cx = x + (w * k) / 2;
      const cy = y + (h * k) * 0.2;
      stage.dataset.cx = String(cx);
      stage.dataset.cy = String(cy);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e: PointerEvent) => {
      const cx = Number(stage.dataset.cx ?? 0);
      const cy = Number(stage.dataset.cy ?? 0);
      pointer.current.x = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth * 0.5)));
      pointer.current.y = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight * 0.5)));
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', onMove, { passive: true });
    const ro = new ResizeObserver(schedule);
    if (slotRef.current) ro.observe(slotRef.current);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', onMove);
      ro.disconnect();
    };
  }, [slotRef]);

  const bubbleText = ui.bubble[section] ?? ui.bubble.hero;

  return (
    <>
      <div ref={stageRef} className="avatar-stage" aria-hidden="true">
        <Suspense fallback={null}>
          <Avatar
            loop={LOOPS[section] ?? 'Idle 01'}
            oneShot={oneShot}
            pointer={pointer}
            onReady={() => setReady(true)}
            onPoke={() => fire('Dodge 01')}
          />
        </Suspense>
        {!ready && (
          <div className="avatar-loader">
            <span className="bead-spinner" />
            <span>{t(ui.loading)}</span>
          </div>
        )}
      </div>
      <div ref={bubbleRef} className={`speech-bubble ${ready && talking ? 'is-on' : ''}`} aria-hidden="true">
        <span key={section + t(bubbleText)}>{t(bubbleText)}</span>
      </div>
    </>
  );
}
