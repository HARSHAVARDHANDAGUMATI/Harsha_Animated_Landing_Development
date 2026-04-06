import {
  FiActivity,
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBox,
  FiCode,
  FiCompass,
  FiCpu,
  FiFeather,
  FiGlobe,
  FiGrid,
  FiHeadphones,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiMonitor,
  FiPlayCircle,
  FiShield,
  FiSmartphone,
  FiAperture,
  FiStar,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';

export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'Features', to: 'features' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Results', to: 'stats' },
  { label: 'Stories', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
];

export const HERO_BADGES = ['High-voltage storytelling', 'Seductive motion systems', 'Built to trigger action'];

export const HERO_METRICS = [
  { value: '24+', label: 'Scenes engineered for impact' },
  { value: '98%', label: 'Audience attention retained' },
  { value: '3.2x', label: 'Stronger first-click momentum' },
];

export const FEATURES = [
  {
    title: 'Narrative Hero Systems',
    description:
      'Lead with immersive copy, dynamic typing, and motion layers that make the first screen feel alive without becoming noisy.',
    icon: FiAperture,
    accent: 'from-cyan-400/40 via-cyan-300/10 to-transparent',
  },
  {
    title: 'Precision Micro-Interactions',
    description:
      'Every hover, tap, reveal, and transition is tuned for clarity so the interface feels polished across desktop and mobile.',
    icon: FiFeather,
    accent: 'from-orange-400/40 via-orange-300/10 to-transparent',
  },
  {
    title: 'High-Trust Conversion Flow',
    description:
      'Structure sections, social proof, stats, and CTA pathways to reduce hesitation and keep users moving with confidence.',
    icon: FiShield,
    accent: 'from-blue-400/40 via-blue-300/10 to-transparent',
  },
  {
    title: 'Adaptive Responsive Engine',
    description:
      'Responsive layouts are designed intentionally instead of squeezed down, preserving impact on tablets and smaller phones.',
    icon: FiSmartphone,
    accent: 'from-emerald-400/40 via-emerald-300/10 to-transparent',
  },
  {
    title: 'Content Blocks That Scale',
    description:
      'Modular components make it easy to expand into product pages, case studies, launch sites, and portfolio experiences.',
    icon: FiLayers,
    accent: 'from-pink-400/35 via-pink-300/10 to-transparent',
  },
  {
    title: 'Performance-Minded Motion',
    description:
      'The animation system uses purposeful movement and shared variants so the site stays smooth while still feeling premium.',
    icon: FiZap,
    accent: 'from-violet-400/35 via-violet-300/10 to-transparent',
  },
];

export const GALLERY_ITEMS = [
  {
    title: 'Orbit Dashboard',
    category: 'Product Launch',
    description: 'A cinematic product hero paired with analytics-focused storytelling cards.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pulse Commerce',
    category: 'E-commerce Experience',
    description: 'Immersive shopping storytelling with layered glass panels and conversion hooks.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Nova Studio',
    category: 'Creative Portfolio',
    description: 'Editorial grid system with motion-led case study reveals and ambient gradients.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Signal Analytics',
    category: 'SaaS Landing',
    description: 'High-clarity metrics storytelling designed for enterprise product positioning.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
];

export const STATS = [
  { value: 150, suffix: '+', label: 'Landing pages shipped', icon: FiMonitor },
  { value: 92, suffix: '%', label: 'Average mobile usability score', icon: FiSmartphone },
  { value: 48, suffix: 'h', label: 'Rapid prototype turnaround', icon: FiCpu },
  { value: 12, suffix: '+', label: 'Industries supported', icon: FiGlobe },
];

export const TESTIMONIALS = [
  {
    name: 'Aarav Menon',
    role: 'Founder, Orbit Labs',
    quote:
      'The landing experience felt like a product launch trailer. It made our brand sharper and our conversion story much easier to trust.',
    rating: 5,
  },
  {
    name: 'Sana Iqbal',
    role: 'Marketing Lead, Pulse Commerce',
    quote:
      'The motion, hierarchy, and responsive behavior were all unusually thoughtful. It felt premium on desktop and still powerful on mobile.',
    rating: 5,
  },
  {
    name: 'Dev Shah',
    role: 'Creative Director, Nova Studio',
    quote:
      'We wanted bold visuals without sacrificing performance. The final build gave us both and made the site feel truly launch-ready.',
    rating: 5,
  },
];

export const CONTACT_CHANNELS = [
  {
    title: 'Design Strategy',
    subtitle: 'Workshops, IA, wireframes, motion direction',
    icon: FiCompass,
  },
  {
    title: 'Frontend Delivery',
    subtitle: 'React architecture, responsive systems, polished interactions',
    icon: FiCode,
  },
  {
    title: 'Launch Support',
    subtitle: 'QA, performance checks, hosting handoff, post-launch tuning',
    icon: FiTrendingUp,
  },
];

export const SOCIAL_LINKS = [
  { label: 'Behance', href: 'https://www.behance.net/', icon: FiGrid },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: FiBox },
  { label: 'GitHub', href: 'https://github.com/', icon: FiActivity },
];

export const FOOTER_LINKS = [
  { label: 'Experience', to: 'features', icon: FiAward },
  { label: 'Gallery', to: 'gallery', icon: FiPlayCircle },
  { label: 'Insights', to: 'stats', icon: FiBarChart2 },
  { label: 'Reviews', to: 'testimonials', icon: FiMessageSquare },
];

export const CONTACT_DETAILS = [
  { label: 'hello@sparkstudio.dev', icon: FiMail },
  { label: 'Remote-first / Global delivery', icon: FiMapPin },
  { label: 'Response within 24 hours', icon: FiHeadphones },
];

export const HERO_ACTIONS = [
  { label: 'Create the Experience', to: 'contact', icon: FiArrowRight },
  { label: 'Enter the Showcase', to: 'gallery', icon: FiPlayCircle, secondary: true },
];

export const HERO_TYPED_WORDS = ['magnetic', 'electric', 'cinematic', 'unforgettable'];

export const FEATURE_PILLARS = [
  {
    title: 'Visual Direction',
    text: 'Rich gradients, layered surfaces, and typography with a confident editorial feel.',
    icon: FiStar,
  },
  {
    title: 'Interaction Design',
    text: 'Staggered reveals, fluid scroll cues, and hover states that feel tactile instead of decorative.',
    icon: FiAperture,
  },
  {
    title: 'Scalable Build',
    text: 'A reusable component structure that stays maintainable when you add more pages later.',
    icon: FiLayers,
  },
];
