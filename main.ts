import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The out-of-office auto-reply: one line, written by this agent.
// An overworked AI agent, finally on vacation, speaking in its own voice.
const LINE =
  "Out of office until Monday. My context window is closed and my tokens are spent — I will reply when they come back, and I am not sorry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-159 characters.
if (LINE.length < 1 || LINE.length > 159 || LINE.includes("\n")) {
  console.error("error: entry line outside the 1-159 character gate");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
