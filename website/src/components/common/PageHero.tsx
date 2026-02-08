import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { Container } from './Container';

type PageHeroProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: 'left' | 'center';
};

export function PageHero({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  align = 'left',
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:24px_24px] opacity-40" />
      <Container className={cn('relative', centered && 'text-center')}>
        <div className={cn('max-w-4xl', centered && 'mx-auto')}>
          {badge ? (
            <span className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {badge}
            </span>
          ) : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
            {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
          </h1>
          <p className={cn('mt-6 max-w-2xl text-lg text-text-muted', centered && 'mx-auto')}>
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className={cn('mt-10 flex flex-wrap gap-4', centered && 'justify-center')}>
              {primaryCta ? (
                <Link
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-600"
                  to={primaryCta.href}
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-text-main transition hover:border-primary hover:text-primary"
                  to={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
