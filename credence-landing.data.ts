import type {
  BenefitItem,
  FaqItem,
  FooterColumn,
  NavLink,
  PricingTier,
  ProblemItem,
  ServiceItem,
  SuccessStoryItem,
  StatItem,
  TrustItem,
  HowItWorksStep,
} from "./credence-landing.types";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  // { href: "/#pricing", label: "Pricing" },
  { href: "/#apply", label: "Apply" },
];

export const heroStats: StatItem[] = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Clients Scaled" },
  { value: "$0", label: "Retainer Needed" },
];

export const marqueeItems: string[] = [
  "Dispute Management",
  "FCRA Compliant Letters",
  "Marketing Automation",
  "CSR Support",
  "Funding Strategy",
  "Pay Per File",
  "CRM + VA Setup",
  "Brand Development",
];

export const painPoints: ProblemItem[] = [
  {
    number: "01 / 04",
    icon: "AI",
    title: "Buried in daily operations",
    text: "You're juggling disputes, clients, marketing, and admin simultaneously every single day.",
  },
  {
    number: "02 / 04",
    icon: "$",
    title: "Hiring too early is expensive",
    text: "Hiring a full team is expensive, slow, and risky when you're still scaling revenue.",
  },
  {
    number: "03 / 04",
    icon: "!",
    title: "Growth creates more chaos",
    text: "Scaling feels impossible without burning out or dropping the ball on existing clients.",
  },
  {
    number: "04 / 04",
    icon: "%",
    title: "Poor delivery hurts referrals",
    text: "Inconsistent dispute quality leads to poor results, chargebacks, and lost referrals.",
  },
];

export const featuredServiceStats: StatItem[] = [
  { value: "5 to 50+", label: "Clients without new hires" },
  { value: "24/7", label: "Operational coverage" },
];

export const coreServiceFeatures: string[] = [
  "FCRA/FDCPA litigation-grade dispute letters",
  "Dedicated dispute management team",
  "Client onboarding and status updates handled",
  "Full pipeline transparency via CRM",
];

export const services: ServiceItem[] = [
  {
    number: "02",
    title: "Marketing & Funnel System",
    description:
      "Done-for-you marketing automation that fills your pipeline with qualified leads without you writing a single ad.",
    features: [
      "Lead generation funnels built and managed",
      "Email and SMS follow-up automation",
      "Social media content strategy",
      "Appointment booking system",
    ],
  },
  {
    number: "03",
    title: "Funding Strategy Program",
    description:
      "Help your clients access capital while you earn an additional revenue stream, all handled by our funding specialists.",
    features: [
      "Business credit building roadmap",
      "Funding readiness coaching",
      "Lender matchmaking and application support",
      "White-label option available",
    ],
  },
  {
    number: "04",
    title: "VA + CRM Support",
    description:
      "Virtual assistants and CRM setup that eliminate administrative chaos and keep your client experience seamless.",
    features: [
      "Trained VA team (CSR-ready)",
      "CRM configuration and automation",
      "Client communication templates",
      "Reporting dashboards",
    ],
  },
];

export const benefits: BenefitItem[] = [
  {
    icon: "UP",
    title: "Scale from 5 to 50+ clients without new staff",
    description:
      "Our team handles the operational load so you never hit a capacity ceiling again.",
  },
  {
    icon: "LAW",
    title: "Deliver stronger, litigation-grade dispute results",
    description:
      "FCRA/FDCPA-backed letters crafted by experienced specialists, not templates.",
  },
  {
    icon: "TIME",
    title: "Save 20+ hours per week on operations",
    description: "Reclaim your week. Stop being the bottleneck in your own business.",
  },
  {
    icon: "FOCUS",
    title: "Focus 100% on client acquisition and revenue",
    description: "Your job is to sell. Our job is to deliver. That's how growth compounds.",
  },
  {
    icon: "SYNC",
    title: "A team that scales as your business grows",
    description:
      "No rehiring, no retraining. We flex capacity up as you bring on more clients.",
  },
  {
    icon: "COST",
    title: "Only pay for what you actually use",
    description: "No retainers. No salary overhead. The pay-per-file model keeps costs lean.",
  },
];

export const successStories: SuccessStoryItem[] = [
  {
    eyebrow: "Client Story 01",
    title: "Security team lead on replacing old antivirus",
    quote:
      "Public YouTube testimonial used as a realistic placeholder. The client explains why their team changed systems and what the transition looked like from the operator side.",
    result: "Useful stand-in for a structured B2B success-story video.",
    accent: "gold",
    videoId: "OiegXv7M_F8",
    videoUrl: "https://www.youtube.com/watch?v=OiegXv7M_F8",
    sourceLabel: "SentinelOne sample",
    role: "Global cosmetics company",
  },
  {
    eyebrow: "Client Story 02",
    title: "Director of IT sharing a platform switch story",
    quote:
      "Another public YouTube testimonial placeholder. This one feels closer to a direct decision-maker case study, with a clear before-and-after narrative.",
    result: "Great for showing buyer confidence and operational proof.",
    accent: "green",
    videoId: "6NU4LkIOYwk",
    videoUrl: "https://www.youtube.com/watch?v=6NU4LkIOYwk",
    sourceLabel: "SentinelOne sample",
    role: "Whitgift School IT leadership",
  },
  {
    eyebrow: "Client Story 03",
    title: "Short-form video testimonial layout sample",
    quote:
      "This public testimonial is being used purely as a realistic embedded-video placeholder so the section feels authentic while you gather your own success stories.",
    result: "Helpful for testing a lighter, simpler testimonial card.",
    accent: "gold",
    videoId: "y7ldn_Gyv1w",
    videoUrl: "https://www.youtube.com/watch?v=y7ldn_Gyv1w",
    sourceLabel: "Medical School sample",
    role: "General testimonial format",
  },
  {
    eyebrow: "Client Story 04",
    title: "Direct-to-camera testimonial example",
    quote:
      "Included as a fourth public YouTube stand-in so the layout can demonstrate how multiple stories will stack once you have more real client videos available.",
    result: "Shows the section still works when more stories are added.",
    accent: "green",
    videoId: "bHphoDt0YIw",
    videoUrl: "https://www.youtube.com/watch?v=bHphoDt0YIw",
    sourceLabel: "Stem Cell TV sample",
    role: "Patient-style testimonial format",
  },
];

export const trustItems: TrustItem[] = [
  {
    icon: "7+",
    title: "7+ Years Industry Experience",
    description: "Proven systems built from real credit repair operations",
  },
  {
    icon: "LAW",
    title: "Legal-Backed Dispute Strategy",
    description: "FCRA/FDCPA compliant - protects you and your clients",
  },
  {
    icon: "PPF",
    title: "Pay-Per-File Model",
    description: "No retainers. Zero risk. You only pay when we deliver",
  },
  {
    icon: "ALLY",
    title: "Partner, Not a Vendor",
    description: "We're invested in your growth - your wins are our wins",
  },
];

export const authorityStats: StatItem[] = [
  {
    value: "$10-25",
    label: "Per file pricing - no surprise invoices",
  },
  {
    value: "100%",
    label: "White-label capable - your brand stays front",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: "Disputes Only",
    description:
      "Pure dispute processing for established businesses with their own marketing and ops.",
    amount: "$10-15",
    unit: "/ file",
    note: "Volume discounts available",
    cta: "Get Started",
    featured: false,
    features: [
      "FCRA/FDCPA dispute letters",
      "Credit bureau submissions",
      "Round management and tracking",
      "Result reporting",
      "Standard turnaround",
    ],
  },
  {
    title: "Full Back-Office",
    description:
      "Complete operational coverage - disputes, CSR, CRM, and marketing all handled.",
    amount: "$20-25",
    unit: "/ file",
    note: "+ Marketing retainer based on scope",
    cta: "Book Strategy Call",
    featured: true,
    features: [
      "Everything in Disputes Only",
      "Litigation-grade premium letters",
      "CSR and client communication",
      "CRM setup and automation",
      "Marketing funnel management",
      "VA team (dedicated hours)",
      "Priority turnaround",
    ],
  },
  {
    title: "Funding Add-On",
    description:
      "Add a funding program to your service suite and create a new revenue stream.",
    amount: "Custom",
    unit: "/ program",
    note: "Revenue share model available",
    cta: "Get Started",
    featured: false,
    features: [
      "Business credit roadmap",
      "Funding readiness coaching",
      "Lender matchmaking",
      "White-label branding",
      "Client education materials",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What if I'm just starting out?",
    answer:
      "We scale with you from day one. Whether you have 3 clients or 30, our systems are built to grow alongside your revenue with no minimum volume required to get started.",
  },
  {
    question: "What if I already have a team?",
    answer:
      "We plug into your existing operation exactly where you need us with no disruption and no overlap. Many partners use us to handle overflow, specialized tasks, or entire departments they haven't built yet.",
  },
  {
    question: "Is this expensive to get started?",
    answer:
      "You only pay for what you use with our pay-per-file model. There's no retainer commitment until you're ready to add full operational support, making this a low-risk way to scale.",
  },
  {
    question: "How do I know dispute quality will be high?",
    answer:
      "Every dispute letter is FCRA/FDCPA compliant and crafted by specialists with 7+ years of experience. We don't use generic templates, and our results reflect that.",
  },
];

export const trustBadges: string[] = [
  "No commitment required - just clarity",
  "We come prepared with a custom growth plan",
  "Your information is 100% confidential",
  "Limited spots - we only work with serious operators",
];

export const footerLinks: FooterColumn[] = [
  {
    title: "Services",
    links: ["Dispute Management", "Marketing & Funnels", "Funding Program", "VA + CRM Support"],
  },
  {
    title: "Company",
    links: ["About", "Results", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "FCRA Compliance"],
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    icon: "DOC",
    title: "Book a Strategy Call",
    description: "Pick a 15-minute slot to discuss your current bottlenecks and scaling goals.",
  },
  {
    number: 2,
    icon: "SEARCH",
    title: "Review & Blueprint",
    description: "We review your operations and build a customized plan to handle your back-office tasks.",
  },
  {
    number: 3,
    icon: "CHECK",
    title: "Seamless Integration",
    description: "We plug into your existing systems and take over disputes, CRM, and admin seamlessly.",
  },
  {
    number: 4,
    icon: "ROCKET",
    title: "Scale & Grow",
    description: "Your team handles the operations while you focus 100% on acquiring new clients and revenue.",
  },
];
