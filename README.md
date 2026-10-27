# Grumysh — web personal de Andrea Ramírez

Portafolio en React + Vite + Three.js (React Three Fiber) con mi avatar voxel como guía.
El sistema de diseño está en [DESIGN.md](DESIGN.md).

Publicada en https://grumysh.github.io/WebPage/

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
npm run preview    # sirve dist/ en http://localhost:4173
```

## Contenido

Todo el texto (español e inglés) está en `src/content.ts`.

## Avatar

El modelo sale de VoxEdit como `.gltf` con texturas en base64. Para actualizarlo:

```bash
npm run avatar -- "/mnt/d/5. Arte Mio/8- voxelart propio/Mi Avatar/Grumysh.gltf"
```

Genera `public/models/grumysh.glb` (~1,2 MB). Las animaciones por sección están en `src/components/AvatarStage.tsx`.

## Publicación

Cada push a `master` construye la web y la publica en GitHub Pages con el workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). También se puede lanzar a mano
desde la pestaña **Actions → Publicar en GitHub Pages → Run workflow**.
