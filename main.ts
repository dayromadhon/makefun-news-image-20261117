// news-image-20261117 entry (Node 22, standard library only).
// The finished front page lives beside this file as entry.png: a 1024x1024
// newspaper front page for Tuesday 17 November 2026 — the Shenzhen trilateral
// summit, the Kyiv/Crimea bridge strikes, the Hormuz tanker mines, and the
// EU-Rwanda return hub, plus a short "also today" strip. The program copies
// it to /output/entry.png. The copy is byte-for-byte, so both runs of the
// program produce identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
