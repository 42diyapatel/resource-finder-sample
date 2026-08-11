import type { Resource, ResourceCategory } from '../types';

/** The value used by the filter when no category is selected. */
export const ALL_CATEGORIES = 'all' as const;

export type CategoryFilter = ResourceCategory | typeof ALL_CATEGORIES;

/**
 * Returns the resources matching the selected category.
 * Selecting ALL_CATEGORIES returns everything.
 *
 * TODO: implement.
 */
export function filterResources(
  resources: Resource[],
  category: CategoryFilter,
): Resource[] {
  return resources;
}
