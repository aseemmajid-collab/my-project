import { cx } from '../lib/cx'

// Small avatar disc used in testimonials and anywhere a person is credited.
export function Monogram({ initials, hue, className }: { initials: string; hue: number; className?: string }) {
  return (
    <span
      className={cx('round grid size-6 shrink-0 place-items-center text-[10px] font-semibold text-white', className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 55% 52%), hsl(${hue + 40} 55% 38%))`,
      }}
    >
      {initials}
    </span>
  )
}
