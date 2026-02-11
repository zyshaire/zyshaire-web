import { Link } from 'react-router-dom';
import { Container } from '../common/Container';

const serviceLinks = [
  'Web Development',
  'Flash MVP',
  // Temporarily hidden: enterprise tier removed from catalog.
  // 'Enterprise Solutions',
  'AI Integration',
  'AI Audit',
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-12">
      <Container>
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src="/zyshaire-logo.svg" alt="Zyshaire logo" className="h-7 w-7 rounded-md object-contain" />
              <p className="font-display text-lg font-bold">Zyshaire</p>
            </div>
            <p className="text-sm text-text-muted">
              Engineering SaaS and AI systems that deliver measurable business outcomes.
            </p>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-text-main">Services</p>
            <ul className="space-y-2 text-sm text-text-muted">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-text-main">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-primary" to="/about">
                  About
                </Link>
              </li>
              {/* Temporarily hidden: case studies section is disabled. */}
              {/* <li>
                <Link className="text-text-muted hover:text-primary" to="/case-studies">
                  Case Studies
                </Link>
              </li> */}
              <li>
                <Link className="text-text-muted hover:text-primary" to="/insights">
                  Insights
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-primary" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-text-main">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-primary" to="/legal/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-primary" to="/legal/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-primary" to="/legal/cookies">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-text-muted">© 2026 Zyshaire Inc. All rights reserved.</div>
    </footer>
  );
}
