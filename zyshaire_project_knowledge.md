# Zyshaire Project Knowledge

This document captures the project knowledge established in this chat, organized step by step.

## Step 1: Company Context and Business Positioning
- Company: `zyshaire`
- Type: Tech startup
- Core offering: SaaS applications and business software solutions
- Primary audience:
  - Direct clients: Business decision-makers
  - End users: General public
- Core positioning direction established:
  - Build SaaS and AI-enabled systems with measurable business outcomes
  - Avoid AI hype and focus on practical ROI

## Step 2: Services Defined
The services provided by Zyshaire were defined as:
1. Build online presence for clients through websites and apps.
2. Build enterprise-level custom software solutions for business needs.
3. Integrate AI workflows into business operations to improve productivity.
4. Conduct AI audits to identify high-impact, measurable AI opportunities and avoid low-value AI adoption.

## Step 3: Website Goals and Strategy
The website is intended to be Zyshaire's main public presence and first impression for prospective clients.

### Primary goals
1. Build trust and credibility quickly.
2. Showcase capabilities and delivery quality.
3. Generate qualified leads.

### Conversion goals (CTAs)
1. `Book Discovery Call`
2. `Request AI Audit`
3. `Start Project Inquiry`

### Messaging direction
- Tone: Confident, practical, outcome-focused.
- Content style: Business-first, specific, measurable, low buzzword usage.

## Step 4: Website Plan (High-Level)
A complete website planning structure was established:

1. Define goals and KPIs.
2. Finalize positioning and messaging.
3. Build sitemap and page hierarchy.
4. Create wireframe + content blueprint.
5. Add trust and conversion systems.
6. Define design direction and UI system.
7. Define tech stack and implementation roadmap.
8. Prepare SEO/content strategy and post-launch optimization.

## Step 5: Sitemap Agreed
Pages planned for the website:
1. Home
2. Services
3. AI Audit
4. Case Studies
5. About
6. Insights
7. Contact
8. Privacy Policy
9. Terms of Service
10. Cookie Policy
11. 404 page

## Step 6: Full Wireframe and Content Blueprint (Defined)
A full section-by-section blueprint was created for each page. Key highlights:

### Home
- Hero with value proposition
- Metrics/proof strip
- Services snapshot (4 pillars)
- Problem vs solution narrative
- Process timeline
- Featured case studies
- Why Zyshaire section
- Testimonials
- Final CTA

### Services
- Service overview hero
- Detailed sections for each service
- Problems solved + deliverables
- Engagement models
- FAQ
- Final CTA

### AI Audit
- Dedicated audit landing hero
- Deliverables and method
- Sample findings
- Audience fit
- Pricing/package placeholders
- FAQ
- Conversion form

### Case Studies
- Results-focused hero
- Filterable case grid
- Outcome-driven card template
- Social proof strip
- Final CTA

### About
- Mission and principles
- Delivery model
- Team section
- CTA

### Insights
- Featured article hero
- Topic/category system
- Article grid
- Resource lead magnet
- Newsletter CTA

### Contact
- Contact options
- Qualification form
- Response SLA
- FAQ

### Legal + 404
- Reusable legal template for privacy/terms/cookies
- Branded 404 with recovery navigation and key links

## Step 7: AI Design Generation Prompt (Created)
A complete single prompt was created for use in a website design AI tool. It included:
- Business context and services
- Brand positioning and tone
- Design direction and visual constraints
- Accessibility requirements
- Full sitemap
- Page-by-page section requirements
- Component system requirements
- Copy rules and expected output quality

## Step 8: Design Assets Generated and Reviewed
You confirmed designs were generated, and the local folder was reviewed.

### Folder reviewed
- `ui-designs/`

### Pages found and reviewed
- `ui-designs/zyshaire_homepage/code.html`
- `ui-designs/zyshaire_services_page/code.html`
- `ui-designs/zyshaire_ai_audit_landing_page/code.html`
- `ui-designs/zyshaire_case_studies_page/code.html`
- `ui-designs/zyshaire_about_page/code.html`
- `ui-designs/zyshaire_insights_page/code.html`
- `ui-designs/zyshaire_contact_page/code.html`
- `ui-designs/zyshaire_legal_template/code.html`
- `ui-designs/zyshaire_404_page/code.html`

### Visual/implementation patterns identified
- Tailwind CSS-based static HTML designs
- Consistent primary color: `#137fec`
- Typography centered on `Space Grotesk` + sans-serif body fonts
- Repeated reusable section patterns:
  - Sticky headers
  - CTA-first heroes
  - Service/case cards
  - Metrics strips
  - FAQ accordions
  - Conversion forms
  - Structured footers

### Important workspace note discovered
- `ui-designs/stitch` is not present in current workspace (even though it appeared in IDE tab context).

## Step 9: Frontend Build Direction Chosen
You requested to start implementation using:
- React
- Vite
- TypeScript
- Tailwind CSS
- Reusable component architecture
- Clean and organized codebase

## Step 10: Scaffold Attempt Status
- Automated scaffold via `npm create vite@latest` failed due to network/DNS restriction (`EAI_AGAIN` to npm registry).
- A manual scaffold was temporarily created by assistant.
- You requested to avoid manual setup and to run Vite setup yourself.
- Current agreement: You will create scaffold, then implementation continues.

## Step 11: Current Expected Implementation Approach
Once your Vite project is created, implementation should proceed with:

1. Create shared design system tokens in Tailwind config.
2. Set up route-based pages for all major screens.
3. Build reusable components first (header, footer, hero, cards, CTA, FAQ, form blocks).
4. Implement each page using section composition.
5. Replace placeholder text/images with final content assets as needed.
6. Add responsive behavior and accessibility pass.
7. QA visual parity against `ui-designs/*/code.html` and `screen.png`.

## Step 12: Reusable Component Targets
Recommended reusable component set derived from generated designs:
1. `Header`
2. `Footer`
3. `HeroSection`
4. `MetricsStrip`
5. `ServiceCard`
6. `CaseStudyCard`
7. `ProcessTimeline`
8. `FaqAccordion`
9. `CtaBanner`
10. `FormField` + form sections
11. `SectionContainer`

## Step 13: Content and Conversion Rules to Preserve
1. Keep messaging outcome-focused and concrete.
2. Keep strong CTA visibility across all pages.
3. Preserve trust indicators (metrics, case outcomes, testimonials, process clarity).
4. Keep AI messaging practical and ROI-oriented.
5. Avoid generic startup fluff language.

## Step 14: Immediate Next Action
- You scaffold the Vite React TypeScript app.
- After scaffold is ready, implementation can begin directly using the reviewed designs in `ui-designs/` as the source reference.

