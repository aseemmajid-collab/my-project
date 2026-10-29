// All copy lives here so the page can be re-themed for a product without
// touching layout. Sections read from this file; remove a section by deleting
// it from App.tsx.

export const brand = {
  name: 'Khair',
  tagline: 'Sarees, jewellery and evenings worth dressing for',
}

export const nav = {
  links: [
    { label: 'Collections', href: '#collections' },
    { label: 'Our craft', href: '#craft' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Stories', href: '#customers' },
  ],
  signIn: { label: 'Stores', href: '#stores' },
  cta: { label: 'Book a fitting', href: '#cta' },
}

export const hero = {
  badge: 'The Festive Edit has arrived',
  title: ['Heirloom weaves for', 'modern evenings'],
  highlight: 'modern',
  description:
    'Handloom sarees from Banaras and Kanchipuram, jewellery set by hand in Jaipur, and party wear cut for how you actually move. Made in small runs with the artisans who keep the craft alive.',
  primary: { label: 'Explore the collection', href: '#collections' },
  secondary: { label: 'Book a fitting', href: '#cta' },
  footnote: 'Complimentary fall & pico on every saree. Ships worldwide.',
  // Editorial collage cards under the hero copy.
  collage: [
    { label: 'Banarasi silk', place: 'Varanasi', hue: 352, weave: 'kadhua' },
    { label: 'Kundan set', place: 'Jaipur', hue: 38, weave: '22k plate' },
    { label: 'Emerald sharara', place: 'Our studio', hue: 158, weave: 'georgette' },
  ],
}

export const features = {
  eyebrow: 'The collections',
  title: 'Three wardrobes, one standard',
  description: 'Each piece is woven, set or cut in small runs — then finished by hand before it reaches you.',
  items: [
    {
      key: 'sarees',
      title: 'Handloom sarees',
      description: 'Banaras, Kanchipuram and Chanderi on pit looms, with real zari and a fall you can feel.',
      span: 2,
    },
    {
      key: 'jewellery',
      title: 'Jewellery',
      description: 'Kundan, polki and temple pieces, set and checked in Jaipur.',
      span: 1,
    },
    {
      key: 'party',
      title: 'Party wear & made to measure',
      description: 'Lehengas, shararas and pre-draped saris — cut, lined and fitted to your measurements.',
      span: 3,
    },
  ],
}

export const steps = {
  eyebrow: 'The making',
  title: 'From loom to living room',
  description:
    'Khair is one person and a small circle of weavers and tailors. The same hands pick up your email, check your measurements and pack your box.',
  items: [
    {
      title: 'We go to the loom',
      description: 'We buy from weaving families we know by name, at a price that keeps the loom running next season.',
    },
    {
      title: 'We finish by hand',
      description: 'Falling, piping, lining and polishing happen in our own studio — nothing is sent out and forgotten.',
    },
    {
      title: 'We fit it to you',
      description: 'Send measurements or visit a studio. Every order leaves pressed, boxed and ready to wear.',
    },
  ],
}

export const showcase = {
  eyebrow: 'Lookbook',
  title: 'One season, three moods',
  tabs: [
    {
      key: 'bridal',
      title: 'Bridal',
      description: 'Reds, maroons and gold zari for the main event, styled with temple jewellery.',
    },
    {
      key: 'festive',
      title: 'Festive',
      description: 'Lighter weaves and mirror work for puja, sangeet and a full calendar of gatherings.',
    },
    {
      key: 'evening',
      title: 'Evening',
      description: 'Deep tones, clean cuts and one good piece of jewellery. Nothing else needed.',
    },
  ],
}

export const metrics = [
  { value: 46, suffix: '+', label: 'Artisan families we work with' },
  { value: 4.9, decimals: 1, label: 'Average fit rating' },
  { value: 28, suffix: ' days', label: 'Made-to-measure lead time' },
]

export const testimonials = {
  eyebrow: 'Stories',
  title: 'Worn to weddings, pujas and very late nights',
  items: [
    {
      quote:
        'My mother’s Banarasi was re-draped and repaired without anyone noticing. They treated it like it was theirs to be careful with.',
      name: 'Ananya Rao',
      role: 'Bride, Bengaluru',
      hue: 352,
    },
    {
      quote:
        'I wore the sharara for twelve hours — ceremony, dancing, the whole thing — and never once wanted to change.',
      name: 'Riya Sharma',
      role: 'Delhi',
      hue: 158,
    },
    {
      quote:
        'Ordered from London, measured over a video call, and it arrived pressed and boxed with a handwritten note.',
      name: 'Sana Qureshi',
      role: 'London',
      hue: 268,
    },
    {
      quote:
        'The kundan set looks like something out of my grandmother’s trunk and it did not cost like it.',
      name: 'Divya Iyer',
      role: 'Chennai',
      hue: 320,
    },
  ],
}

export const faq = {
  title: 'Before you order',
  items: [
    {
      q: 'How do I find my size?',
      a: 'Every product page has a measurement guide, and made-to-measure orders start with a 10-minute video or in-studio fitting. Sarees need no sizing — only the blouse does.',
    },
    {
      q: 'Do you ship worldwide?',
      a: 'Yes. India orders arrive in 3–5 days, international in 6–9 days, tracked end to end. Duties are calculated at checkout so nothing surprises you at the door.',
    },
    {
      q: 'What is your exchange policy?',
      a: 'Ready-to-wear pieces can be exchanged within 14 days, unworn with tags. Made-to-measure pieces are final sale, but we will alter them until the fit is right.',
    },
    {
      q: 'Can you rework a family heirloom?',
      a: 'That is much of what we do — re-draping, re-lining, restoring zari and remaking an old saree into a lehenga. Send us photos and we will tell you what is possible.',
    },
  ],
}

export const cta = {
  title: 'Join the Khair list',
  description: 'First look at new weaves, restocks and studio appointments. One letter a month, nothing else.',
  placeholder: 'you@email.com',
  button: 'Subscribe',
  success: 'You are on the list. See you next month.',
}

export const footer = {
  blurb: 'Handloom sarees, jewellery and party wear, made in small runs — run end to end by one person, so your email is always answered by the same hands that packed your box.',
  columns: [
    { title: 'Shop', links: ['Sarees', 'Jewellery', 'Party wear', 'New arrivals', 'Gift cards'] },
    { title: 'Atelier', links: ['Our craft', 'Made to measure', 'Heirloom reworks', 'Book a fitting', 'Stores'] },
    { title: 'Help', links: ['Shipping', 'Exchanges', 'Measurement guide', 'Care guide', 'Contact'] },
    { title: 'Khair', links: ['About', 'Journal', 'Artisan clusters', 'Press', 'Careers'] },
  ],
  legal: `© ${new Date().getFullYear()} Khair. Made with weavers across India.`,
}
