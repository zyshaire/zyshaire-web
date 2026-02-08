import type { ServiceItem } from '../../types';

type ServiceCardProps = {
  item: ServiceItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <h3 className="font-display text-xl font-bold text-text-main">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
      <div className="mt-5 grid gap-4 text-sm">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-[0.08em] text-red-500">Problems Solved</p>
          <ul className="space-y-1 text-text-muted">
            {item.problems.map((problem) => (
              <li key={problem}>• {problem}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold uppercase tracking-[0.08em] text-green-600">Deliverables</p>
          <ul className="space-y-1 text-text-muted">
            {item.deliverables.map((deliverable) => (
              <li key={deliverable}>• {deliverable}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
