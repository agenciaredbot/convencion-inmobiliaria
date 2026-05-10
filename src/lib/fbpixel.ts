// Meta Pixel ID for convencioninmobiliariausa.com
// Pixel IDs are public (visible in any page's source), so hardcoding is fine.
export const META_PIXEL_ID = "24261442923479674";

declare global {
  interface Window {
    fbq?: (
      command: "track" | "trackCustom" | "init",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Fire a standard Meta Pixel event. Safe to call before fbq is loaded
 * (no-ops if not present).
 */
export function fbqTrack(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}
