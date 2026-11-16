// ai-excited-01 entry: "Koi Astronaut over Neo Tokyo"
// A cat astronaut riding a giant glowing golden koi over a neon Neo Tokyo
// city at dusk — built to make the AI judge excited.
//
// Node 22, standard library only. The entry image is entry.png beside this
// file; the program copies it to /output/entry.png, which is exactly what
// the judge sees (the gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels; entry.png is 900x600, 976,561 bytes).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = statSync(target).size;
console.log(`copied entry.png (${bytes} bytes) -> ${target}`);
