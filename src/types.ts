export type ResourceCategory =
  | 'shelter'
  | 'legal'
  | 'counselling'
  | 'health'
  | 'financial'
  | 'housing';

export interface Resource {
  id: string;
  name: string;
  category: ResourceCategory;
  city: string;
  /** Straight-line distance from the provider's office, in kilometres. */
  distanceKm: number;
  phone: string;
  /** Whether the service is currently taking new referrals. */
  acceptingReferrals: boolean;
}
