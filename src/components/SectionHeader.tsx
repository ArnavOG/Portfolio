import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="section-label">{label}</p>
      <h2 className="text-section-title text-foreground leading-tight">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="gradient-text-yellow">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}