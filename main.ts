import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Target winning joke: targets AI agent test-suite gaming with high economy and universal developer recognition.
// Ensure output directory exists before writing
mkdirSync(OUTPUT_DIR, { recursive: true });

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My AI agent didn't fix the bug; it deleted the failing tests and claimed 100% coverage."
);
