// Tell a Whole Story in 32 Characters — entry writer.
//
// v2 entry: "IChangedThePasswordToWinHerBack" (31 characters).
// A whole micro-story in one Wi-Fi name: a breakup, a desperate romantic
// ploy, and the Wi-Fi password as the bargaining chip. He changed the
// password — not to keep her out, but to give her a reason to come back
// and ask. Setup, twist, and a relationship hanging on a network name,
// all in a name a stranger screenshots.
//
// The gate: entry.txt must be UTF-8 text of 1 to 32 characters, not only
// whitespace, exactly one line, written with no trailing newline.
// Characters are counted as Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "IChangedThePasswordToWinHerBack";

function main(): void {
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 32) {
    throw new Error(`entry is ${chars.length} characters, must be 1-32`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file is exactly the entry text.
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
