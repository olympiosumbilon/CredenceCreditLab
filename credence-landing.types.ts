export interface NavLink {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProblemItem {
  number: string;
  icon: string;
  title: string;
  text: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  title: string;
  description: string;
  amount: string;
  unit: string;
  note: string;
  cta: string;
  featured: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
