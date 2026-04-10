import { ValidationError, useForm } from '@formspree/react';
import { Container } from '../components/common/Container';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { contactFaqs } from '../data/site-data';
import { getFormspreeFormId, isFormspreeConfigured } from '../lib/formspree';

export function ContactPage() {
  const [state, handleSubmit] = useForm(getFormspreeFormId('contact'));
  const isConfigured = isFormspreeConfigured('contact');

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
                <h3 className="font-display text-xl font-bold text-text-main">Address</h3>
                <p className="mt-2 text-sm text-text-muted">Lawrence, Kansas</p>
              </article>
            </aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-text-main">Project Inquiry Form</h2>
              <p className="mt-2 text-sm text-text-muted">Share your goals, timeline, and constraints. We respond within 24 business hours.</p>

              {!isConfigured ? (
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  Formspree is not configured yet. Add `VITE_FORMSPREE_FORM_ID` (or `VITE_FORMSPREE_CONTACT_FORM_ID`) in your `.env` file.
                </div>
              ) : null}

              {state.succeeded ? (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Thanks. Your project inquiry was submitted successfully. We will get back to you within 24 business hours.
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4 md:grid-cols-2"
                  onSubmit={isConfigured ? handleSubmit : (event) => event.preventDefault()}
                >
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="fullName" placeholder="Full Name" required />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="email" placeholder="Work Email" required type="email" />
                  <ValidationError className="md:col-span-2 text-sm text-red-600" errors={state.errors} field="email" prefix="Email" />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="company" placeholder="Company" required />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="role" placeholder="Role" required />

                  <div className="col-span-full">
                    <p className="mb-2 text-sm font-semibold text-text-main">Service Interest</p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {['SaaS Development', 'Flash MVP', 'AI Systems', 'Consulting'].map((service, index) => (
                        <label key={service} className="rounded-lg border border-slate-300 p-3 text-center text-sm text-text-main">
                          <input className="mr-2" defaultChecked={index === 0} name="serviceInterest" type="radio" value={service} />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  <select className="rounded-lg border border-slate-300 px-3 py-2" name="budget" required>
                    <option value="">Estimated Budget</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                  <select className="rounded-lg border border-slate-300 px-3 py-2" name="timeline" required>
                    <option value="">Timeline</option>
                    <option>ASAP</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>Planning phase</option>
                  </select>

                  <textarea
                    className="col-span-full rounded-lg border border-slate-300 px-3 py-2"
                    name="projectBrief"
                    placeholder="Project brief"
                    required
                    rows={5}
                  />
                  <ValidationError className="col-span-full text-sm text-red-600" errors={state.errors} field="projectBrief" prefix="Project brief" />
                  <input name="formType" type="hidden" value="Project Inquiry" />

                  <button
                    className="col-span-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={state.submitting || !isConfigured}
                    type="submit"
                  >
                    {state.submitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
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
