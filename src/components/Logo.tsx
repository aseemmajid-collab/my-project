import { cx } from '../lib/cx'
import { brand } from '../content'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx(
        'depth relative grid size-8 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-surface-2 to-raised',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="url(#logo-g)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9c2b3f" />
          <stop offset="1" stopColor="#a8762a" />
          </linearGradient>
        </defs>
        <path d="M12 4c2.8 3.4 4.2 6.2 4.2 8.6a4.2 4.2 0 1 1-8.4 0C7.8 10.2 9.2 7.4 12 4Z" />
        <path d="M12 12.6V20" />
        <circle cx="12" cy="21.2" r="1.1" fill="url(#logo-g)" stroke="none" />
      </svg>
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cx('font-display inline-flex items-center gap-2.5 text-[21px] font-semibold tracking-[-0.01em] text-fg', className)}>
      <LogoMark />
      {brand.name}
    </a>
  )
}
