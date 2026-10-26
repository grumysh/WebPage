// Pixel art hecho con cuentas de hama: cada letra del patrón es una cuenta de color.
const palette: Record<string, string> = {
  p: 'var(--pink)',
  g: 'var(--purple)',
  m: 'var(--mint)',
  c: 'var(--coral)',
  y: 'var(--butter)',
  w: 'var(--ink)',
  d: 'var(--bg)',
};

export const patterns: Record<string, string[]> = {
  beads: ['.pp...pp.', 'pppp.pppp', 'ppppppppp', 'ppppppppp', '.ppppppp.', '..ppppp..', '...ppp...', '....p....'],
  embroidery: ['...ppp...', '..ppppp..', '.ppyyypp.', '.ppyyypp.', '..ppppp..', '...ppp...', '....m....', '..mmm....', '....m....'],
  paint: ['.......yy', '......yyy', '.....yyy.', '....yyy..', '...wwy...', '..ccw....', '.ccc.....', 'cccc.....', 'cc.......'],
  run: ['..cc......', '..cwc.....', '..cccc....', '.cccpccc..', 'cccccppcc.', 'cccccccccc', 'wwwwwwwwww'],
  anime: ['....w....', '...www...', '..wwwww..', '..wwwww..', '.wwwwwww.', '.wwwwwww.', 'wwwdddwww', 'wwwdddwww', '.wwdddww.'],
  trophy: ['yyyyyyyyy', 'y.yyyyy.y', 'y.yyyyy.y', '.yyywyyy.', '..yyyyy..', '...yyy...', '....y....', '...ccc...', '..ccccc..'],
  sparkle: ['....p....', '....p....', '...ppp...', 'ppppwpppp', '...ppp...', '....p....', '....p....'],
  voxel: ['...mmm...', '.mmmmmmm.', 'mmmmmmmmm', 'ggggmcccc', 'gggggcccc', 'gggggcccc', 'gggggcccc', '.ggggccc.', '...gcc...'],
};

export function BeadArt({ pattern, size = 72, label }: { pattern: string; size?: number; label?: string }) {
  const rows = patterns[pattern] ?? [];
  const cols = Math.max(...rows.map((r) => r.length));
  return (
    <svg
      className="bead-art"
      width={size}
      height={(size * rows.length) / cols}
      viewBox={`0 0 ${cols} ${rows.length}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          palette[ch] ? (
            <g key={`${x}-${y}`}>
              <circle cx={x + 0.5} cy={y + 0.5} r={0.44} fill={palette[ch]} />
              <circle cx={x + 0.5} cy={y + 0.5} r={0.14} fill="var(--bg)" opacity={0.85} />
            </g>
          ) : null,
        ),
      )}
    </svg>
  );
}
