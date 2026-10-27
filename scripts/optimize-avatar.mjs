// Convierte el .gltf exportado por VoxEdit (texturas en base64) a un .glb compacto.
// Uso: npm run avatar -- "/ruta/a/Grumysh.gltf" [public/models/salida.glb]
import { NodeIO } from '@gltf-transform/core';
import { dedup, prune, unpartition } from '@gltf-transform/functions';
import { statSync } from 'node:fs';

const input = process.argv[2];
const output = process.argv[3] ?? 'public/models/grumysh.glb';
if (!input) {
  console.error('Falta la ruta del .gltf');
  process.exit(1);
}

const io = new NodeIO();
const doc = await io.read(input);
await doc.transform(dedup(), prune(), unpartition());
await io.write(output, doc);

const kb = (p) => Math.round(statSync(p).size / 1024);
console.log(`${input} (${kb(input)} KB) -> ${output} (${kb(output)} KB)`);
console.log('Texturas:', doc.getRoot().listTextures().length, '| Animaciones:', doc.getRoot().listAnimations().map((a) => a.getName()).join(', '));
