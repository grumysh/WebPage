// Genera src/techIcons.ts solo con el trazo y el color de cada logo que usamos,
// para no cargar en la web los metadatos ni el SVG duplicado de simple-icons.
// Uso: npm run icons (después de agregar una tecnología con logo en content.ts)
import * as si from 'simple-icons';
import { readFileSync, writeFileSync } from 'node:fs';

const content = readFileSync('src/content.ts', 'utf8');
const slugs = [...new Set([...content.matchAll(/icon: '([a-z0-9]+)'/g)].map((m) => m[1]))].sort();

const lines = slugs.map((slug) => {
  const icon = si[`si${slug[0].toUpperCase()}${slug.slice(1)}`];
  if (!icon) throw new Error(`simple-icons no tiene el logo "${slug}"`);
  return `  ${slug}: { hex: '${icon.hex}', path: '${icon.path}' },`;
});

writeFileSync(
  'src/techIcons.ts',
  `// Archivo generado por scripts/build-tech-icons.mjs; no editar a mano.\n` +
    `// Logos de Simple Icons (CC0): https://simpleicons.org\n` +
    `export const TECH_ICONS: Record<string, { hex: string; path: string }> = {\n${lines.join('\n')}\n};\n`,
);
console.log(`${slugs.length} logos -> src/techIcons.ts`);
