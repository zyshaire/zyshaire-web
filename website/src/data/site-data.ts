import type { CaseStudyItem, FaqItem, NavItem, ServiceItem, StatItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'AI Audit', href: '/ai-audit' },
  // Temporarily hidden: case studies will be re-enabled later.
  // { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
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
    title: 'LogiStream AI Routing',
    industry: 'Logistics',
    challenge: 'Regional shipment delays caused by disconnected systems and manual planning.',
    solution: 'Implemented predictive routing based on real-time demand, traffic, and weather.',
    primaryResult: '45% faster delivery cycles',
    secondaryResult: '$2M annual savings',
  },
  {
    title: 'FinServe Automations',
    industry: 'Fintech',
    challenge: 'Finance teams spent 200+ hours each month on repetitive reconciliation tasks.',
    solution: 'Built secure automation workflows to handle repetitive data-heavy operations.',
    primaryResult: '200+ hours saved monthly',
    secondaryResult: 'Near-zero reconciliation errors',
  },
  {
    title: 'MediCare Data Lake',
    industry: 'Healthcare',
    challenge: 'Patient data spread across multiple legacy systems reduced care efficiency.',
    solution: 'Designed and deployed a compliant unified data architecture with secure access.',
    primaryResult: '30% faster diagnosis operations',
    secondaryResult: '100% HIPAA-aligned controls',
  },
  {
    title: 'TalentMatch AI',
    industry: 'HR Tech',
    challenge: 'Recruiting teams spent most of their time manually screening resumes.',
    solution: 'Introduced AI candidate scoring to prioritize high-fit applicants quickly.',
    primaryResult: '3x faster hiring cycles',
    secondaryResult: '60% lower recruitment costs',
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
  // Temporarily hidden: case studies section is disabled.
  // 'Case Studies',
];
