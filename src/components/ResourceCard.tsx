import type { Resource } from '../types';
import { CATEGORY_LABELS } from '../data/resources';
import { formatDistance } from '../lib/utils';
import Badge from './Badge';
import './ResourceCard.css';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-card__head">
        <h2 className="resource-card__name">{resource.name}</h2>
        <Badge>{CATEGORY_LABELS[resource.category]}</Badge>
      </div>

      <p className="resource-card__meta">
        {resource.city} &middot; {formatDistance(resource.distanceKm)}
      </p>

      <div className="resource-card__foot">
        <a className="resource-card__phone" href={`tel:${resource.phone}`}>
          {resource.phone}
        </a>
        {!resource.acceptingReferrals && <Badge tone="notice">Referrals paused</Badge>}
      </div>
    </article>
  );
}
