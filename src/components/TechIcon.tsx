import { TECH_ICONS } from '../techIcons';

// Los logos casi negros no se ven sobre el fondo oscuro: esos se pintan en crema
function readable(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.06 ? 'var(--ink)' : `#${hex}`;
}

export function TechIcon({ icon, glyph }: { icon?: string; glyph?: string }) {
  const si = icon ? TECH_ICONS[icon] : undefined;
  if (!si) {
    // Sin logo disponible: parche con las iniciales
    return (
      <span className="tool-icon is-glyph" aria-hidden="true">
        {glyph}
      </span>
    );
  }
  const color = readable(si.hex);
  return (
    <span className="tool-icon" style={{ ['--brand' as string]: color }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="16" height="16" fill={color}>
        <path d={si.path} />
      </svg>
    </span>
  );
}

export function brandColor(icon?: string) {
  const si = icon ? TECH_ICONS[icon] : undefined;
  return si ? readable(si.hex) : undefined;
}
