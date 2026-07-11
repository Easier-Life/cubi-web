/**
 * Best-effort clipboard write. Resolves true only when the text actually
 * landed on the clipboard, false when the API is missing or the browser
 * blocked the write (e.g. iOS Safari outside a user gesture) — callers must
 * only claim "copied" in the UI on a true result.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
