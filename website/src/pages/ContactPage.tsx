import { Container } from '../components/common/Container';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { contactFaqs } from '../data/site-data';

export function ContactPage() {
  return (
    <>
      <PageHero
        badge="Accepting New Projects"
        title="Let's Scale Your"
        highlight="Systems"
        description="Tell us what you are building and we will help you map the right SaaS and AI execution path."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <aside className="space-y-4 lg:col-span-5">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-xl font-bold text-text-main">Book a Discovery Call</h3>
                <p className="mt-2 text-sm text-text-muted">Schedule a 15-minute discussion with our lead engineering team.</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-xl font-bold text-text-main">Direct Email</h3>
                <p className="mt-2 text-sm text-text-muted">hello@zyshaire.com</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-xl font-bold text-text-main">Office HQ</h3>
                <p className="mt-2 text-sm text-text-muted">123 Innovation Drive, Tech City, CA</p>
              </article>
            </aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-text-main">Project Inquiry Form</h2>
              <p className="mt-2 text-sm text-text-muted">Share your goals, timeline, and constraints. We respond within 24 business hours.</p>

              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Full Name" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Work Email" type="email" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Company" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Role" />

                <div className="col-span-full">
                  <p className="mb-2 text-sm font-semibold text-text-main">Service Interest</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {['SaaS Development', 'Flash MVP', 'AI Systems', 'Consulting'].map((service) => (
                      <label key={service} className="rounded-lg border border-slate-300 p-3 text-center text-sm text-text-main">
                        <input className="mr-2" name="service" type="radio" />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <select className="rounded-lg border border-slate-300 px-3 py-2">
                  <option>Estimated Budget</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
                <select className="rounded-lg border border-slate-300 px-3 py-2">
                  <option>Timeline</option>
                  <option>ASAP</option>
                  <option>Within 1 month</option>
                  <option>1-3 months</option>
                  <option>Planning phase</option>
                </select>

                <textarea
                  className="col-span-full rounded-lg border border-slate-300 px-3 py-2"
                  placeholder="Project brief"
                  rows={5}
                />

                <button className="col-span-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600" type="button">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" centered />
          <FaqAccordion items={contactFaqs} />
        </Container>
      </section>
    </>
  );
}
