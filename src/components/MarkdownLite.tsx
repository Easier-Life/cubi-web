import { Fragment, type ReactNode } from "react";

/**
 * Renders "markdown-lite": paragraphs separated by blank lines, and bullet
 * lines beginning with "- ". No other markdown. Used for legal documents.
 */
export function MarkdownLite({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);

  return (
    <div className="prose-cubi">
      {blocks.map((block, i) => (
        <Fragment key={i}>{renderBlock(block)}</Fragment>
      ))}
    </div>
  );
}

function renderBlock(block: string): ReactNode {
  const lines = block.split("\n");
  const out: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = () => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${out.length}`}>
          {bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };

  for (const line of lines) {
    if (/^\s*-\s/.test(line)) {
      bullets.push(line.replace(/^\s*-\s/, ""));
    } else {
      flushBullets();
      if (line.trim()) {
        out.push(<p key={`p-${out.length}`}>{line}</p>);
      }
    }
  }
  flushBullets();

  return out;
}
