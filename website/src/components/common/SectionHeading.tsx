import { cn } from '../../lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10', centered && 'mx-auto text-center')}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-main sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-base text-text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
