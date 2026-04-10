import type { CaseStudyItem, FaqItem, NavItem, ServiceItem, StatItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'AI Audit', href: '/ai-audit' },
  { label: 'Projects', href: '/projects' },
  // { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const homepageStats: StatItem[] = [
  { value: '50+', label: 'Successful Deployments' },
  { value: '40%', label: 'Average Process Reduction' },
  { value: '$20M+', label: 'Client Revenue Impact' },
  { value: '100%', label: 'Delivery Success' },
];

export const services: ServiceItem[] = [
  {
    title: 'Web & App Development',
    description:
      'Scalable, secure products engineered for growth-stage and enterprise teams that need reliable digital foundations.',
    problems: [
      'Legacy systems slowing product delivery',
      'Poor user experience reducing retention',
      'Architecture that cannot handle scale',
    ],
    deliverables: [
      'Custom web applications',
      'Cross-platform mobile apps',
      'Secure API and platform integrations',
    ],
  },
  {
    title: 'Flash MVP',
    description:
      'For founders and entrepreneurs, we rapidly build an MVP in up to two weeks using AI-assisted engineering so you can validate ideas without hiring a full team.',
    problems: [
      'Long build cycles that delay idea validation',
      'High initial cost before product-market signal',
      'Need for a clickable and testable product quickly',
    ],
    deliverables: [
      'Functional MVP prototype in up to 2 weeks',
      'Core user flow implementation for validation',
      'Technical handoff plan for production hardening',
    ],
  },
  // Temporarily hidden: enterprise tier removed from catalog for now.
  // {
  //   title: 'Enterprise Solutions',
  //   description:
  //     'Business-critical systems that unify data, automate operations, and support compliance at enterprise scale.',
  //   problems: [
  //     'Data silos across teams',
  //     'Manual operational workflows',
  //     'Security and governance risks',
  //   ],
  //   deliverables: [
  //     'Custom ERP and internal platforms',
  //     'Migration and data architecture plans',
  //     'Role-based access and audit trails',
  //   ],
  // },
  {
    title: 'AI Workflow Integration',
    description:
      'Practical AI automation integrated into real operations to increase productivity without creating process chaos.',
    problems: [
      'High cost from repetitive tasks',
      'Slow support and internal execution',
      'Inconsistent operational output',
    ],
    deliverables: [
      'AI copilots and assistants',
      'Document extraction and processing flows',
      'Automation orchestration across tools',
    ],
  },
  {
    title: 'AI Audit & Strategy',
    description:
      'Identify high-impact AI opportunities, avoid low-value experiments, and create a measurable execution roadmap.',
    problems: [
      'Unclear ROI for AI initiatives',
      'Tool selection confusion',
      'Budget lost on low-impact automation',
    ],
    deliverables: [
      'AI opportunity matrix',
      'Risk and readiness assessment',
      '90-day implementation roadmap',
    ],
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    title: 'Zyshaire Restaurant',
    industry: 'Restaurant Tech',
    challenge:
      'Restaurant owners had no single place to manage menus, orders, and table bookings — operations were fragmented and the customer-facing experience was limited to phone calls.',
    solution:
      'Built a full-stack dual-sided platform: an owner admin panel to manage menus, live orders, and table reservations, and a customer-facing app to browse daily menus, place orders, and book tables online.',
    primaryResult: 'Unified admin & customer app',
    secondaryResult: 'End-to-end ops in one platform',
    demoUrl: 'https://www.youtube.com/watch?v=bZWKUfOd5fQ',
  },
  {
    title: 'Conversational AI Receptionist',
    industry: 'Conversational AI',
    challenge:
      'Dental clinics and service businesses lose staff hours fielding repetitive inbound calls for availability, scheduling, and appointment booking — with no option for 24/7 coverage.',
    solution:
      'Built a conversational AI that handles inbound calls autonomously — answering queries about doctor availability, sharing channeling and clinic information, and booking appointments by capturing patient details without human involvement.',
    primaryResult: '24/7 automated call handling',
    secondaryResult: 'Zero hold time for patients',
    demoUrl: 'https://www.youtube.com/watch?v=jLnO9f3NWKI',
  },
];

export const serviceFaqs: FaqItem[] = [
  {
    question: 'How quickly can we start?',
    answer:
      'Most projects begin within one to two weeks after discovery and scope alignment. We start with a focused onboarding phase so execution can move fast.',
  },
  {
    question: 'Do you work with non-technical teams?',
    answer:
      'Yes. We translate business goals into clear technical decisions and keep stakeholders aligned without unnecessary jargon.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We support post-launch optimization, monitoring, and roadmap iterations through project, retainer, or fractional engagement models.',
  },
  {
    question: 'What is Flash MVP?',
    answer:
      'Flash MVP is our rapid build track for founders where we deliver a high-utility MVP in up to two weeks to help validate product direction quickly.',
  },
];

export const auditFaqs: FaqItem[] = [
  {
    question: 'How long does the AI audit take?',
    answer: 'Typical audit duration is around two weeks, depending on team availability and process complexity.',
  },
  {
    question: 'Do we need to share sensitive data?',
    answer:
      'We work under NDA and usually only require sample datasets or schemas for assessment. Sensitive data handling is governed by agreed controls.',
  },
  {
    question: 'What if we are not ready for AI yet?',
    answer:
      'That is still a useful outcome. We provide a pre-AI readiness roadmap so your team can build the right foundations before investment.',
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: 'What project size do you usually take on?',
    answer: 'We support both focused MVP efforts and larger multi-quarter enterprise initiatives.',
  },
  {
    question: 'Can you sign an NDA before discussions?',
    answer: 'Yes. We can sign NDAs before deep technical or data discussions.',
  },
  {
    question: 'How fast do you respond?',
    answer: 'Our standard response time is within 24 business hours.',
  },
];

export const insightTopics = [
  'All',
  'AI Workflows',
  'Enterprise Engineering',
  'SaaS Optimization',
];
