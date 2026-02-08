import { Link } from 'react-router-dom';
import { Container } from './Container';

type CtaBannerProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CtaBanner({ title, description, primaryCta, secondaryCta }: CtaBannerProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-text-main p-8 text-white shadow-glow sm:p-12">
          <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-30" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-display text-3xl font-bold sm:text-4xl">{title}</h3>
            <p className="mt-4 text-base text-slate-200 sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={primaryCta.href} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link
                  to={secondaryCta.href}
                  className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
