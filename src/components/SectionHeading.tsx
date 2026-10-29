import { Motif } from './Ornament'
import { cx } from '../lib/cx'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <div className={cx('mb-4', align === 'center' && 'flex justify-center')}>
        <Motif />
      </div>
      {eyebrow && <p className="mb-3 text-[12px] font-medium tracking-[0.18em] text-accent uppercase">{eyebrow}</p>}
      <h2 className="font-display text-balance text-[36px] font-medium leading-[1.05] tracking-[-0.015em] sm:text-[46px]">{title}</h2>
      {description && <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">{description}</p>}
    </Reveal>
  )
}
