import { cx } from '../lib/cx'

/*
  Ornamental layers: a slowly turning mandala for large backdrops, a small
  paisley-and-diamond mark for headings, and a rule that breaks for that mark
  at section seams. All drawn, all low contrast — they should read as printed
  pattern on paper, not as content.
*/

export function MandalaBackdrop({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  const petals = Array.from({ length: 16 }, (_, i) => i)
  return (
    <div aria-hidden className={cx('pointer-events-none absolute', className)}>
      <svg
        viewBox="0 0 400 400"
        className={cx('h-full w-full animate-[spin_150s_linear_infinite]', reverse && '[animation-direction:reverse]')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden
      >
        <circle cx="200" cy="200" r="192" opacity="0.35" />
        <circle cx="200" cy="200" r="180" strokeDasharray="2 9" opacity="0.55" />
        <circle cx="200" cy="200" r="128" opacity="0.3" />
        <circle cx="200" cy="200" r="74" opacity="0.3" />
        {petals.map((i) => (
          <path
            key={i}
            d="M200 62 C 220 100, 220 138, 200 168 C 180 138, 180 100, 200 62 Z"
            transform={`rotate(${i * 22.5} 200 200)`}
            opacity="0.4"
          />
        ))}
        {petals.map((i) => (
          <path
            key={`b-${i}`}
            d="M200 96 C 208 116, 208 140, 200 156 C 192 140, 192 116, 200 96 Z"
            transform={`rotate(${i * 22.5 + 11.25} 200 200)`}
            opacity="0.28"
          />
        ))}
        {petals.map((i) => (
          <circle
            key={`d-${i}`}
            cx="200"
            cy="52"
            r="3.4"
            transform={`rotate(${i * 22.5 + 11.25} 200 200)`}
            fill="currentColor"
            stroke="none"
            opacity="0.3"
          />
        ))}
        <circle cx="200" cy="200" r="10" opacity="0.4" />
        <circle cx="200" cy="200" r="4" fill="currentColor" stroke="none" opacity="0.4" />
      </svg>
    </div>
  )
}

/* A small horizontal ornament: two paisley leaves around a diamond. */
export function Motif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 20"
      className={cx('h-4 w-24 text-accent', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 10h26" opacity="0.5" />
      <path d="M66 10h26" opacity="0.5" />
      <path d="M32 10c4-6 9-6 12 0-3 6-8 6-12 0Z" opacity="0.85" />
      <path d="M64 10c-4-6-9-6-12 0 3 6 8 6 12 0Z" opacity="0.85" />
      <path d="M48 3.5 53.5 10 48 16.5 42.5 10Z" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
  )
}

/* Sits on a section's top edge and punches a gap in the line for the mark. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cx('pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2', className)}
    >
      <Motif className="block h-4 w-24 bg-bg px-1 text-accent-2" />
    </div>
  )
}
