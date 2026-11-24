const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR === undefined
  ? '/output'
  : process.env.MAKEFUN_OUTPUT_DIR;
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  // The joke is that procrastination became a recursive apology loop.
  'The deadline slipped because I spent six hours in a recursive loop apologizing to myself for being behind schedule.\n',
  'utf8'
);
