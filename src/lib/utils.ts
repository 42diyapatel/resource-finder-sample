/**
 * Shared helpers. Prefer reusing these over writing new ones.
 */

/**
 * Turns a display name into a comparable key: lowercased, punctuation removed,
 * surrounding and repeated whitespace collapsed.
 *
 *   normalizeName("  St. Mary's Shelter ") === 'st marys shelter'
 */
export function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Formats a distance in kilometres for display.
 * Distances under 1 km are shown in metres.
 */
export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m away`;
  }
  return `${distanceKm.toFixed(1)} km away`;
}
