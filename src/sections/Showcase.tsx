import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { OrnamentDivider } from '../components/Ornament'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Fabric } from '../components/Textile'
import { showcase } from '../content'
import { cx } from '../lib/cx'

type Weave = 'jaal' | 'booti' | 'leheriya'

const looks: Record<
  string,
  { name: string; note: string; base: [number, number, number]; weave: Weave; pieces: { piece: string; detail: string }[] }
> = {
  bridal: {
    name: 'The Ashoka look',
    note: 'For the main ceremony',
    base: [352, 50, 24],
    weave: 'jaal',
    pieces: [
      { piece: 'Banarasi saree', detail: 'Kadhua zari, wine' },
      { piece: 'Temple chandbali', detail: 'Gold plate, ruby glass' },
      { piece: 'Zardozi clutch', detail: 'Hand-worked, vintage brass' },
      { piece: 'Blouse', detail: 'Made to measure' },
    ],
  },
  festive: {
    name: 'The Courtyard look',
    note: 'Puja to sangeet',
    base: [38, 56, 32],
    weave: 'booti',
    pieces: [
      { piece: 'Chanderi saree', detail: 'Gold booti, marigold' },
      { piece: 'Kundan studs', detail: 'Polki centre, uncut' },
      { piece: 'Mirror potli', detail: 'Gotapatti trim' },
      { piece: 'Slides', detail: 'Embroidered, true to size' },
    ],
  },
  evening: {
    name: 'The Midnight look',
    note: 'One good piece, nothing else',
    base: [158, 40, 22],
    weave: 'leheriya',
    pieces: [
      { piece: 'Emerald sharara', detail: 'Georgette, soft drape' },
      { piece: 'Chain necklace', detail: 'Fine gold, 22k plate' },
      { piece: 'Satin minaudière', detail: 'Structured, wine lining' },
      { piece: 'Blouse', detail: 'Made to measure' },
    ],
  },
}

function LookPanel({ tab }: { tab: string }) {
  const look = looks[tab]
  return (
    <div className="flex h-full flex-col gap-5 sm:flex-row">
      <div className="depth relative min-h-0 flex-1 overflow-hidden rounded-[16px]">
        <Fabric id={`look-${tab}`} variant={look.weave} base={look.base} />
        <div className="absolute left-4 top-4 rounded-[10px] bg-bg/75 px-3 py-1.5 text-[11px] tracking-[0.12em] text-accent-2 uppercase backdrop-blur">
          {look.note}
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-[12px] bg-bg/75 px-3.5 py-2.5 backdrop-blur">
          <p className="font-display text-[18px] leading-tight">{look.name}</p>
        </div>
      </div>
      <ul className="flex w-full shrink-0 flex-col justify-center gap-1 sm:w-[248px]">
        {look.pieces.map((p, i) => (
          <motion.li
            key={p.piece}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.07 }}
            className="depth rounded-[13px] bg-surface-2 px-4 py-3"
          >
            <p className="text-[14px] font-medium">{p.piece}</p>
            <p className="text-[12.5px] text-muted">{p.detail}</p>
          </motion.li>
        ))}
        <li className="mt-2 px-1 text-[12px] tracking-[0.1em] text-faint uppercase">Styled by the Khair studio</li>
      </ul>
    </div>
  )
}

export function Showcase() {
  const [active, setActive] = useState(showcase.tabs[0].key)
  return (
    <section id="lookbook" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <OrnamentDivider />
      <Container>
        <SectionHeading eyebrow={showcase.eyebrow} title={showcase.title} align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-1">
              {showcase.tabs.map((tab) => {
                const isActive = tab.key === active
                return (
                  <li key={tab.key}>
                    <button
                      type="button"
                      onClick={() => setActive(tab.key)}
                      aria-pressed={isActive}
                      className={cx(
                        'relative w-full rounded-card-sm px-5 py-4 text-left transition-colors',
                        isActive ? 'bg-surface' : 'hover:bg-surface-2',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="showcase-active"
                          className="depth absolute inset-0 rounded-card-sm"
                          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span
                        className={cx(
                          'relative block font-display text-[19px] font-medium',
                          isActive ? 'text-fg' : 'text-muted',
                        )}
                      >
                        {tab.title}
                      </span>
                      <span className="relative mt-1 block text-[14px] leading-relaxed text-muted">{tab.description}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative aspect-[16/10] overflow-hidden rounded-card bg-surface p-5 shadow-glow sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-5 sm:inset-7"
                >
                  <LookPanel tab={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
