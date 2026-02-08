import type { StatItem } from '../../types';
import { Container } from './Container';

type StatsStripProps = {
  items: StatItem[];
};

export function StatsStrip({ items }: StatsStripProps) {
  return (
    <section className="border-y border-slate-200 bg-surface-light py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
              <p className="font-display text-3xl font-bold text-text-main">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
