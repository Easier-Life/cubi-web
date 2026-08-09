#!/usr/bin/env node
/**
 * Report Localized literals that still have no French or German variant.
 *
 * `Localized` makes fr/de optional so an untranslated string renders the
 * English one instead of failing the build (see src/lib/i18n.ts). That safety
 * net only works if someone can see what is still missing — this is that view.
 *
 *   npm run i18n:coverage          # summary + first 20 gaps
 *   npm run i18n:coverage -- --all # every gap
 *
 * It is a line scanner, not a TypeScript parser: it looks for the two shapes
 * the content files actually use, both single-line.
 *   A)  en: "text",                    (or "en": "text",)
 *   B)  key: { vi: "x", en: "y" },
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/content", "src/components", "src/app", "src/lib"];
const STANDALONE = /^(\s*)("?)en\2:\s*"((?:[^"\\]|\\.)*)"(,?)\s*$/;
const INLINE = /"?vi"?:\s*"(?:[^"\\]|\\.)*",\s*"?en"?:\s*"((?:[^"\\]|\\.)*)"/;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...walk(path));
    else if (/\.tsx?$/.test(path)) out.push(path);
  }
  return out;
}

const gaps = [];
let total = 0;

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      const inline = INLINE.exec(line);
      const standalone = STANDALONE.exec(line);
      if (!inline && !standalone) return;
      // The tagline alternatives are authoring notes, not rendered copy: they
      // carry a `note` sibling and are typed without fr/de.
      const following = lines.slice(i + 1, i + 8).join("\n");
      if (/^\s*"?note"?:/m.test(following)) return;
      total++;
      const has = (lang) => {
        const prop = new RegExp(`^\\s*"?${lang}"?:\\s*`, "m");
        if (inline) return new RegExp(`"?${lang}"?:\\s*"`).test(line);
        // A comment can sit between the properties, so look a little further.
        return prop.test(following);
      };
      const missing = ["fr", "de"].filter((l) => !has(l));
      if (missing.length > 0) {
        gaps.push({
          file,
          line: i + 1,
          missing: missing.join(", "),
          text: (inline?.[1] ?? standalone[3]).slice(0, 60),
        });
      }
    });
  }
}

const showAll = process.argv.includes("--all");
const shown = showAll ? gaps : gaps.slice(0, 20);
for (const g of shown) {
  console.log(`${g.file}:${g.line}  [missing ${g.missing}]  ${g.text}`);
}
if (!showAll && gaps.length > shown.length) {
  console.log(`… and ${gaps.length - shown.length} more (pass --all)`);
}
const done = total - gaps.length;
console.log(
  `\n${done}/${total} strings translated into French and German (${
    total === 0 ? 0 : Math.round((done / total) * 100)
  }%).`,
);
process.exit(gaps.length > 0 ? 1 : 0);
