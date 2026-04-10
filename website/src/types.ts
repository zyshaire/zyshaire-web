export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  problems: string[];
  deliverables: string[];
};

export type CaseStudyItem = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  primaryResult: string;
  secondaryResult: string;
  demoUrl?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
