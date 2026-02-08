import type { CaseStudyItem } from '../../types';

type CaseStudyCardProps = {
  item: CaseStudyItem;
};

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary">
        {item.industry}
      </div>
      <h3 className="font-display text-xl font-bold text-text-main">{item.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-text-muted">
        <p>
          <span className="font-semibold text-text-main">Challenge:</span> {item.challenge}
        </p>
        <p>
          <span className="font-semibold text-text-main">Solution:</span> {item.solution}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-slate-100 p-4">
        <p className="text-sm font-semibold text-primary">{item.primaryResult}</p>
        <p className="text-right text-sm font-semibold text-text-main">{item.secondaryResult}</p>
      </div>
    </article>
  );
}
