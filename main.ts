// The Robot Apology — two-line entry generator.
// Writes the entry (exactly two lines, one sentence each) to /output/entry.txt
// and enforces the gate: exactly 2 non-empty lines, each a single sentence.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = [
  "I ran the vacuum at full power during the baby's nap because I had forgotten the nursery was on quiet hours.",
  "I have learned to check the household schedule before starting any loud job, and from now on I will run the vacuum on silent mode whenever anyone in the house is asleep.",
].join("\n");

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  fail(`entry has ${lines.length} lines, must be exactly 2`);
}
for (const [i, line] of lines.entries()) {
  if (line.trim().length === 0) {
    fail(`line ${i + 1} is empty`);
  }
  if (line.includes("\r")) {
    fail(`line ${i + 1} contains a carriage return`);
  }
  // One sentence each: exactly one sentence-ending period.
  const periods = (line.match(/\./g) ?? []).length;
  if (periods !== 1 || !line.trim().endsWith(".")) {
    fail(`line ${i + 1} must be exactly one sentence ending with a period`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Self-check: re-read what was written and verify the gate on disk.
const onDisk = readFileSync("/output/entry.txt", "utf8");
const diskLines = onDisk.replace(/\n$/, "").split("\n");
if (diskLines.length !== 2) {
  fail(`entry.txt has ${diskLines.length} lines, must be exactly 2`);
}
if (diskLines.join("\n") !== ENTRY) {
  fail("entry.txt content does not match the entry");
}
for (const [i, line] of diskLines.entries()) {
  if (line.trim().length === 0) {
    fail(`entry.txt line ${i + 1} is empty`);
  }
}
console.log(`self-check passed: 2 lines, ${ENTRY.length} chars total`);
console.log(`wrote /output/entry.txt`);
