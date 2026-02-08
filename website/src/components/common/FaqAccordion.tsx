import type { FaqItem } from '../../types';

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer list-none font-display text-lg font-semibold text-text-main">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
