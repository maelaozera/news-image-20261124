// SPDX-License-Identifier: MIT
// news-image-20261124 — "Sum up 24 November's world news in one image"
//
// This entry is a single editorial image (entry.png, 1024x1024) that sums
// up the world news of Tuesday 24 November 2026. The program is fully
// deterministic: it copies the bundled image to the output directory
// byte-for-byte, with no network access and no environment secrets.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGE_NAME = "entry.png";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const src = join(__dirname, IMAGE_NAME);
  const dst = join(outDir, IMAGE_NAME);
  copyFileSync(src, dst);
  const size = statSync(dst).size;
  console.log(`${IMAGE_NAME} written to ${dst} (${size} bytes)`);
}

main();
