export const primaryNav = [
  { label: 'The Report', href: '/the-report' },
  { label: 'Inspections', href: '/installation-inspections' },
  { label: 'How It Works', href: '/how-introductions-work' },
  { label: "How We're Paid", href: '/how-we-are-paid' },
] as const

export const footerNav = {
  products: [
    { label: 'The Report', href: '/the-report' },
    { label: 'The Calculator', href: '/calculator' },
    { label: 'Installation Inspections', href: '/installation-inspections' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: "How We're Paid", href: '/how-we-are-paid' },
    { label: 'How Introductions Work', href: '/how-introductions-work' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  learn: [
    { label: 'Knowledge', href: '/blog' },
    { label: 'Tools', href: '/tools' },
    { label: 'The Industry', href: '/the-industry' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/privacy#terms' },
  ],
} as const

export type PageKey =
  | 'home'
  | 'the-report'
  | 'installation-inspections'
  | 'how-introductions-work'
  | 'how-we-are-paid'
  | 'about-us'
  | 'the-industry'
  | 'contact-us'
  | 'tools'
  | 'blog'
  | 'privacy'
  | 'calculator'

interface RelatedItem {
  label: string
  href: string
  description: string
  tag: string
}

const registry: Record<PageKey, RelatedItem> = {
  home: {
    label: 'Solar, made clear',
    href: '/',
    description: 'Where every case file begins.',
    tag: 'Start',
  },
  'the-report': {
    label: 'The Report',
    href: '/the-report',
    description: 'How your bill becomes a personalised energy report.',
    tag: 'Product',
  },
  'installation-inspections': {
    label: 'Installation Inspections',
    href: '/installation-inspections',
    description: 'Why an installed system still needs independent verification.',
    tag: 'Product',
  },
  'how-introductions-work': {
    label: 'How Introductions Work',
    href: '/how-introductions-work',
    description: 'One installer, only if you ask for one.',
    tag: 'Process',
  },
  'how-we-are-paid': {
    label: "How We're Paid",
    href: '/how-we-are-paid',
    description: 'Who pays Watts Better, and what for.',
    tag: 'Transparency',
  },
  'about-us': {
    label: 'About Us',
    href: '/about-us',
    description: 'Seven years, thousands of appointments, one focus.',
    tag: 'Company',
  },
  'the-industry': {
    label: 'The Industry',
    href: '/the-industry',
    description: 'What the compliance data actually says about batteries.',
    tag: 'Learn',
  },
  'contact-us': {
    label: 'Contact Us',
    href: '/contact-us',
    description: 'Questions about your options? Start here.',
    tag: 'Company',
  },
  tools: {
    label: 'Tools',
    href: '/tools',
    description: 'Calculators and resources for your decision.',
    tag: 'Learn',
  },
  blog: {
    label: 'Knowledge',
    href: '/blog',
    description: 'Bills, tariffs, batteries and Queensland specifics.',
    tag: 'Learn',
  },
  privacy: {
    label: 'Privacy & Terms',
    href: '/privacy',
    description: 'How your information is collected, used and shared.',
    tag: 'Legal',
  },
  calculator: {
    label: 'The Calculator',
    href: '/calculator',
    description: 'Start your assessment with your energy use.',
    tag: 'Product',
  },
}

export function getRelated(keys: PageKey[]): RelatedItem[] {
  return keys.map((k) => registry[k])
}
