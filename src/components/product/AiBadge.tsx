import React from 'react';

interface AiBadgeProps {
  score: number;
  verdict: string;
}

const AiBadge: React.FC<AiBadgeProps> = ({ score, verdict }) => {
  let bgColor: string;
  let label: string;

  if (score >= 7) {
    bgColor = 'var(--color-success)';
    label = '🟢 Koop nu';
  } else if (score >= 4) {
    bgColor = 'var(--color-warning)';
    label = '🟡 Overweeg';
  } else {
    bgColor = 'var(--color-error)';
    label = '🔴 Wacht';
  }

  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
        style={{ backgroundColor: bgColor }}>
        {score.toFixed(1)} — {label}
      </span>
      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{verdict}</span>
    </div>
  );
};

export default AiBadge;
