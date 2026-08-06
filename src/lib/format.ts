// Date / year formatting helpers (browser-safe)

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}): string {
  return new Date(iso).toLocaleDateString('en-US', opts);
}

export function formatYear(iso: string | number): string {
  if (typeof iso === 'number') return String(iso);
  return new Date(iso).getFullYear().toString();
}

/**
 * Estimate reading time from a string of text.
 * Plain implementation — no external deps, browser-safe.
 * Avg reading speed: 200 words/minute.
 */
export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
