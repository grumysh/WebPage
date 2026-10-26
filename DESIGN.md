# DESIGN.md — Grumysh

Sistema de diseño de la web personal de Andrea Ramírez (Grumysh).
Cálida y juguetona como Passionfroot, Slite y LottieFiles, pero en modo oscuro y construida a partir de lo que Andrea es:
su avatar voxel, sus manualidades (hama beads, bordado, costura, pintura) y el anime.

## Idea central

> "Hecho a mano, con cuidado." — una ingeniera responsable, cuidadosa y realista que también borda y arma hama beads.

- **El avatar es el hilo conductor.** Saluda en la portada (lanza un beso) y acompaña el scroll cambiando de animación por sección.
- **Textura de manualidad.** Fondo de tablero de hama beads (puntos), tarjetas como parches bordados (borde de puntada discontinua), pixel art hecho con cuentas.
- **Guiños de anime**, sin exagerar: globo de diálogo estilo manga, destellos ✦.
- **Realista**: los datos son concretos (USD 85.000, ~150.000 jugadores). Nada de adjetivos vacíos.

## Color

La paleta sale del avatar: rosa del logo GRUMYSH, morado del short, verde del gorro, coral de las mejillas.

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#120d18` | Fondo (berenjena casi negro) |
| `--bg-2` | `#18111f` | Bandas alternas |
| `--surface` | `#1f1729` | Tarjetas |
| `--surface-2` | `#2a1f37` | Tarjetas elevadas, chips |
| `--ink` | `#f7eee6` | Texto principal (crema, guiño a Slite) |
| `--ink-2` | `#c9bccf` | Texto secundario |
| `--ink-3` | `#8f8199` | Texto terciario, metadatos |
| `--pink` | `#ff7aa8` | Acento principal, CTA |
| `--purple` | `#a77bff` | Acento secundario |
| `--mint` | `#5fe39a` | Éxito, "disponible", destellos |
| `--coral` | `#ff9f7f` | Resaltados cálidos |
| `--butter` | `#ffd56b` | Premios, highlights tipo anime |
| `--sky` | `#6cc6ff` | Certificaciones de Web3 y videojuegos |
| `--stitch` | `rgba(247,238,230,.22)` | Puntada de los parches |

Regla: un acento dominante por bloque. El rosa es el CTA; los demás colorean categorías (chips, cuentas, iconos).

Certificaciones por área: verde = IA y datos · amarillo = frontend y web · morado = programación y fundamentos · coral = metodologías y habilidades · rosa = marca, comunidad y emprendimiento · azul = Web3 y videojuegos.

## Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Display | Bricolage Grotesque 700–800 | Titulares grandes, tracking -0.02em |
| Texto | DM Sans 400–700 | 17px base, interlineado 1.6 |
| Pixel | Pixelify Sans 500–700 | Logo, eyebrows, etiquetas, globo de diálogo |

Escala: 14 · 17 · 20 · 24 · 32 · 44 · clamp(48–96) para el hero.

## Forma

- Radios: 12 (chips) · 20 (botones pill = 999) · 28 (tarjetas).
- **Parche bordado**: `outline: 2px dashed var(--stitch); outline-offset: -9px` sobre tarjetas.
- **Sombra de cuenta**: sombra sólida desplazada `0 6px 0 #0a0710` (tacto voxel/hama), sin blur.
- **Cuentas (beads)**: círculos con agujero central (`radial-gradient`), usados en pixel art, viñetas y loaders.

## Movimiento

- Avatar: vuela del hero a la esquina inferior derecha al hacer scroll (interpolado con el scroll, no por tiempo).
- Cambio de animación: crossfade 0,4 s.
- Entradas de bloques: fade + 16px hacia arriba, 500 ms, `cubic-bezier(.2,.8,.2,1)`.
- Botones: al presionar bajan 4px y pierden la sombra (como presionar una cuenta).
- `prefers-reduced-motion`: sin entradas animadas ni vuelo del avatar.

## Mapa avatar ↔ sección

| Sección | Animación |
|---|---|
| Portada | Kiss 01 (una vez) → Idle 01 |
| Sobre mí | Talk 01 |
| Proyectos | Walk 01 |
| Trayectoria | Climb 01 |
| Premios y charlas | Jump 01 |
| Certificaciones | Sit 01 |
| Contacto | Kiss 01 → Idle 02 |
| Pie de página | Sleep 01 |
| Clic en el avatar | Dodge 01 |

## Voz

- Primera persona, cercana, concreta. Español por defecto, inglés opcional.
- Nombre profesional: **Andrea Ramírez**. Marca/alias: **Grumysh** (logo pixel y avatar).
