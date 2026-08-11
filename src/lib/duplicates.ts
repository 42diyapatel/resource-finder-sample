import type { Resource } from '../types';

/**
 * The partner directory is compiled from more than one intake source, so the
 * same service is sometimes entered twice under a slightly different name.
 *
 * Returns the groups of resources that appear to be the same service.
 * A resource with no match should not appear in the result.
 *
 * TODO: implement.
 */
export function findDuplicateResources(resources: Resource[]): Resource[][] {
  return [];
}
