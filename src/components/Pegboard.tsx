import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n';
import { about } from '../content';

// Tablero de hama beads interactivo: elige un color y pon cuentas
// tablero cuadrado
const COLS = 23;
const ROWS = 23;
const COLORS = ['butter', 'red', 'black', 'white', 'pink', 'purple', 'mint', 'coral'] as const;
type Cell = (typeof COLORS)[number] | null;

const LETTER_TO_COLOR: Record<string, Cell> = {
  y: 'butter',
  r: 'red',
  k: 'black',
  w: 'white',
  p: 'pink',
  g: 'purple',
  m: 'mint',
  c: 'coral',
};

// Onigiri con carita: arroz blanco con contorno, alga abajo, ojos grandes, cachetes y boquita en ω
const ONIGIRI = [
  '........kkkkk........',
  '.......kwwwwwk.......',
  '......kwwwwwwwk......',
  '......kwwwwwwwk......',
  '.....kwwwwwwwwwk.....',
  '.....kwwwwwwwwwk.....',
  '....kwwkkwwwkkwwk....',
  '....kwwkkwwwkkwwk....',
  '...kwwwkkwwwkkwwwk...',
  '...kwwwwwwwwwwwwwk...',
  '..kwwppwkwwwkwppwwk..',
  '..kwwwwwwkkkwwwwwwk..',
  '.kwwwwwwwwwwwwwwwwwk.',
  '.kwwwwwkkkkkkkwwwwwk.',
  'kwwwwwwkkkkkkkwwwwwwk',
  'kwwwwwwkkkkkkkwwwwwwk',
  'kwwwwwwkkkkkkkwwwwwwk',
  '.kwwwwwkkkkkkkwwwwwk.',
  '..kkkkkkkkkkkkkkkkk..',
]

// Arranca con el onigiri centrado en el tablero
function startBoard(): Cell[] {
  const cells: Cell[] = Array(COLS * ROWS).fill(null);
  const rows = ONIGIRI;
  const ox = Math.floor((COLS - rows[0].length) / 2);
  const oy = Math.floor((ROWS - rows.length) / 2);
  rows.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      const c = LETTER_TO_COLOR[ch];
      if (c) cells[(oy + y) * COLS + ox + x] = c;
    }),
  );
  return cells;
}

export function Pegboard() {
  const { t } = useLang();
  const [cells, setCells] = useState<Cell[]>(startBoard);
  const [color, setColor] = useState<Cell>('pink');
  const painting = useRef(false);

  useEffect(() => {
    const stop = () => (painting.current = false);
    window.addEventListener('pointerup', stop);
    return () => window.removeEventListener('pointerup', stop);
  }, []);

  const place = (i: number) =>
    setCells((prev) => {
      if (prev[i] === color) return prev;
      const next = prev.slice();
      next[i] = color;
      return next;
    });

  return (
    <div className="pegboard-card patch c-purple">
      <div className="pegboard-head">
        <h4>{t(about.board.title)}</h4>
        <p>{t(about.board.hint)}</p>
      </div>
      <div
        className="pegboard"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        onPointerLeave={() => (painting.current = false)}
      >
        {cells.map((c, i) => (
          <button
            key={i}
            type="button"
            className={`peg ${c ? `bead-${c}` : ''}`}
            tabIndex={-1}
            aria-hidden="true"
            onPointerDown={(e) => {
              (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
              painting.current = true;
              place(i);
            }}
            onPointerEnter={() => painting.current && place(i)}
          />
        ))}
      </div>
      <div className="pegboard-tools">
        <div className="swatches" role="radiogroup" aria-label="Color">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={color === c}
              aria-label={c}
              className={`swatch bead-${c}`}
              onClick={() => setColor(c)}
            />
          ))}
          <button
            type="button"
            role="radio"
            aria-checked={color === null}
            className="swatch swatch-eraser"
            aria-label={t(about.board.eraser)}
            title={t(about.board.eraser)}
            onClick={() => setColor(null)}
          >
            ✕
          </button>
        </div>
        <div className="board-actions">
          <button type="button" className="chip-btn" onClick={() => setCells(startBoard())}>
            {t(about.board.reset)}
          </button>
          <button type="button" className="chip-btn" onClick={() => setCells(Array(COLS * ROWS).fill(null))}>
            {t(about.board.clear)}
          </button>
        </div>
      </div>
    </div>
  );
}
