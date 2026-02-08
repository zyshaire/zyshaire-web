import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/common/Container';

const docs = {
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: 'February 8, 2026',
    sections: [
      ['Introduction', 'We are committed to protecting customer and visitor data while delivering SaaS and AI services.'],
      ['Data Collection and Usage', 'We collect business contact data, platform usage data, and technical metadata needed for service operation and improvement.'],
      ['AI Processing Disclaimer', 'AI outputs may require validation. We do not train public models with client confidential data without explicit written approval.'],
      ['Security Measures', 'Data in transit and at rest is protected with industry-standard controls. Access follows least-privilege principles.'],
      ['Your Rights', 'You may request access, correction, deletion, or processing limitations based on applicable regulations.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    effectiveDate: 'February 8, 2026',
    sections: [
      ['Service Scope', 'Zyshaire provides software engineering, AI integration, and advisory services based on signed agreements.'],
      ['Intellectual Property', 'Custom deliverables are transferred according to contract terms. Pre-existing frameworks remain Zyshaire property unless otherwise agreed.'],
      ['Payment and Billing', 'Invoices and payment schedules are defined per engagement contract.'],
      ['Limitations of Liability', 'Service liability is governed by client agreement terms and applicable law.'],
      ['Termination', 'Either party may terminate under conditions defined in executed agreements.'],
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    effectiveDate: 'February 8, 2026',
    sections: [
      ['What We Use', 'We use essential cookies for functionality and analytics cookies for performance insights.'],
      ['Control Options', 'Users can adjust browser settings and cookie preferences where available.'],
      ['Third-Party Services', 'Some analytics and embedded services may set cookies subject to provider policies.'],
      ['Data Retention', 'Cookie-derived data is retained only as long as operationally required.'],
      ['Policy Updates', 'This policy may be revised to reflect legal, technical, or operational updates.'],
    ],
  },
} as const;

export function LegalPage() {
  const { docType } = useParams();

  const doc = useMemo(() => {
    const key = docType === 'terms' || docType === 'cookies' ? docType : 'privacy';
    return docs[key];
  }, [docType]);

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <aside className="space-y-3 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">Legal Center</p>
            <nav className="grid gap-2">
              <Link className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:border-primary hover:text-primary" to="/legal/privacy">
                Privacy Policy
              </Link>
              <Link className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:border-primary hover:text-primary" to="/legal/terms">
                Terms of Service
              </Link>
              <Link className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:border-primary hover:text-primary" to="/legal/cookies">
                Cookie Policy
              </Link>
            </nav>
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 lg:col-span-9">
            <h1 className="font-display text-4xl font-bold text-text-main">{doc.title}</h1>
            <p className="mt-3 text-sm text-text-muted">Effective Date: {doc.effectiveDate}</p>

            <div className="mt-8 space-y-6">
              {doc.sections.map(([heading, paragraph]) => (
                <section key={heading}>
                  <h2 className="font-display text-2xl font-semibold text-text-main">{heading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{paragraph}</p>
                </section>
              ))}
            </div>

            <p className="mt-10 text-sm text-text-muted">
              Contact us at <a className="font-semibold text-primary" href="mailto:legal@zyshaire.com">legal@zyshaire.com</a> for legal requests.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
