import './Badge.css';

type BadgeTone = 'accent' | 'notice';

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
}

export default function Badge({ children, tone = 'accent' }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
