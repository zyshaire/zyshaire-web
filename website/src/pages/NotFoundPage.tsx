import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';

export function NotFoundPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-600">
              Error 404
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-text-main sm:text-6xl">
              Page Not Found
            </h1>
            <p className="mt-4 max-w-xl text-text-muted">
              The page you requested is not available. Try one of the main routes below to continue browsing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600" to="/">
                Go Home
              </Link>
              <Link className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-text-main hover:border-primary hover:text-primary" to="/contact">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <p className="font-display text-8xl font-bold text-primary">404</p>
            <div className="mt-6 grid gap-3">
              <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary" to="/services">
                Core Services
              </Link>
              <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary" to="/ai-audit">
                AI Audit
              </Link>
              <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary" to="/insights">
                Insights
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
