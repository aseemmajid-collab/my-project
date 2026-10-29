import { motion } from 'motion/react'
import type { ReactElement } from 'react'

import { hero } from '../content'
import { cx } from '../lib/cx'

/*
  Textile art. Everything here is generated SVG — woven lattices, booti grids,
  zari borders and jewellery motifs — so the page reads as fabric without
  depending on photography.
*/

const ease = [0.22, 1, 0.36, 1] as const

/* A diamond lattice with a dot at each centre — the classic jaal. */
function JaalDefs({ id, color, opacity = 0.5 }: { id: string; color: string; opacity?: number }) {
  return (
    <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
      <path d="M17 2 32 17 17 32 2 17Z" fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      <circle cx="17" cy="17" r="2.2" fill={color} opacity={opacity} />
      <circle cx="0" cy="0" r="1.4" fill={color} opacity={opacity * 0.8} />
      <circle cx="34" cy="0" r="1.4" fill={color} opacity={opacity * 0.8} />
      <circle cx="0" cy="34" r="1.4" fill={color} opacity={opacity * 0.8} />
      <circle cx="34" cy="34" r="1.4" fill={color} opacity={opacity * 0.8} />
    </pattern>
  )
}

/* Small floral bootis on a grid — the scattered-flower weave. */
function BootiDefs({ id, color, opacity = 0.55 }: { id: string; color: string; opacity?: number }) {
  return (
    <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
      <g fill={color} opacity={opacity}>
        <circle cx="14" cy="9" r="2" />
        <path d="M14 12.5c2.4 1.6 2.4 4.6 0 6.4-2.4-1.8-2.4-4.8 0-6.4Z" />
        <circle cx="4" cy="22" r="1.2" />
        <circle cx="24" cy="22" r="1.2" />
      </g>
    </pattern>
  )
}

/* Diagonal rain stripes — leheriya. */
function LeheriyaDefs({ id, color, opacity = 0.35 }: { id: string; color: string; opacity?: number }) {
  return (
    <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <rect width="7" height="18" fill={color} opacity={opacity} />
    </pattern>
  )
}

type FabricProps = { className?: string; variant?: 'jaal' | 'booti' | 'leheriya'; base?: [number, number, number] }

/**
 * A swatch of cloth: layered gradients for sheen, a woven motif on top and a
 * zari border along the bottom edge. `base` is an HSL triple for the cloth.
 */
export function Fabric({ className, variant = 'jaal', base = [352, 42, 26], id }: FabricProps & { id: string }) {
  const [h, s, l] = base
  const motif = variant === 'jaal' ? 'jaal' : variant === 'booti' ? 'booti' : 'leheriya'
  return (
    <div aria-hidden className={cx('absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, hsl(${h} ${s}% ${l + 12}%) 0%, hsl(${h} ${s}% ${l}%) 45%, hsl(${h} ${s + 6}% ${l - 8}%) 100%)`,
        }}
      />
      {/* sheen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, transparent 20%, rgb(255 255 255 / 0.16) 38%, transparent 52%), radial-gradient(90% 60% at 20% 0%, rgb(255 255 255 / 0.14), transparent 60%)',
        }}
      />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 300">
        <defs>
          {motif === 'jaal' && <JaalDefs id={`m-${id}`} color="hsl(42 78% 72%)" opacity={0.4} />}
          {motif === 'booti' && <BootiDefs id={`m-${id}`} color="hsl(42 78% 76%)" opacity={0.5} />}
          {motif === 'leheriya' && <LeheriyaDefs id={`m-${id}`} color="hsl(42 80% 78%)" opacity={0.22} />}
          <linearGradient id={`b-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="hsl(40 72% 52%)" />
            <stop offset="0.5" stopColor="hsl(44 86% 66%)" />
            <stop offset="1" stopColor="hsl(36 68% 46%)" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#m-${id})`} />
        {/* zari border along the bottom */}
        <rect y="264" width="400" height="36" fill={`url(#b-${id})`} opacity="0.92" />
        <rect y="264" width="400" height="3" fill="hsl(44 90% 78%)" opacity="0.85" />
        <rect y="278" width="400" height="1.5" fill="hsl(44 90% 78%)" opacity="0.5" />
        <g fill="hsl(44 90% 82%)" opacity="0.55">
          <rect x="0" y="286" width="400" height="1" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,rgb(0_0_0/0.35),transparent_60%)]" />
    </div>
  )
}

const weaveTone: Record<string, [number, number, number]> = {
  kadhua: [352, 46, 26],
  '22k plate': [38, 52, 34],
  georgette: [158, 38, 22],
}

const motifByWeave: Record<string, 'jaal' | 'booti' | 'leheriya'> = {
  kadhua: 'jaal',
  '22k plate': 'booti',
  georgette: 'leheriya',
}

/* The hero collage: three tilted swatches of the season's cloth. */
export function HeroCollage() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
      {hero.collage.map((card, i) => (
        <motion.figure
          key={card.label}
          initial={{ opacity: 0, y: 34, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
          animate={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : i === 0 ? -2.2 : 2.2 }}
          transition={{ duration: 0.9, delay: 0.45 + i * 0.12, ease }}
          className={cx(
            'depth relative aspect-[3/4] overflow-hidden rounded-card bg-surface shadow-glow',
            i === 1 && 'sm:-translate-y-5',
          )}
        >
          <Fabric id={`hero-${i}`} variant={motifByWeave[card.weave]} base={weaveTone[card.weave]} />
          <figcaption className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 rounded-[14px] bg-bg/75 px-3.5 py-2.5 backdrop-blur-md">
            <div className="min-w-0">
              <p className="truncate font-display text-[17px] leading-tight">{card.label}</p>
              <p className="truncate text-[12px] text-muted">{card.place}</p>
            </div>
            <span className="shrink-0 rounded-[8px] bg-accent-2/15 px-2 py-1 text-[10px] tracking-[0.08em] text-accent-2 uppercase">
              {card.weave}
            </span>
          </figcaption>
          <span
            aria-hidden
            className="absolute right-3 top-3 rounded-[8px] bg-bg/70 px-2 py-1 text-[10px] tracking-[0.14em] text-muted uppercase backdrop-blur"
          >
            0{i + 1}
          </span>
        </motion.figure>
      ))}
    </div>
  )
}

/* ── Collection card visuals ─────────────────────────────────────────── */

export function SareeVisual() {
  return (
    <div className="absolute inset-0">
      <Fabric id="saree" variant="jaal" base={[352, 48, 24]} />
      <div className="absolute left-6 top-6 depth rounded-[12px] bg-bg/70 px-3 py-1.5 text-[11px] tracking-[0.1em] text-accent-2 uppercase backdrop-blur">
        Banaras · 400 zari ends
      </div>
      {/* a draped fold running across the card */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden>
        <path d="M-20 250 C 90 210, 150 285, 250 235 S 380 180, 430 215 L430 320 L-20 320Z" fill="rgb(0_0_0/0.22)" />
        <path d="M-20 262 C 90 222, 150 297, 250 247 S 380 192, 430 227" fill="none" stroke="hsl(44 88% 72%)" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </div>
  )
}

export function JewelleryVisual() {
  const gems = [
    { x: 100, y: 66, r: 7 }, { x: 140, y: 52, r: 8 }, { x: 184, y: 46, r: 9 },
    { x: 230, y: 52, r: 8 }, { x: 270, y: 66, r: 7 },
  ]
  return (
    <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_20%,#f7ecd9,#efe2cd_55%,#e6d5bd)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 320" aria-hidden>
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e8c076" />
            <stop offset="0.5" stopColor="#c9993f" />
            <stop offset="1" stopColor="#a8762a" />
          </linearGradient>
          <radialGradient id="gem" cx="0.35" cy="0.3">
            <stop offset="0" stopColor="#fff6e6" />
            <stop offset="1" stopColor="#b3424f" />
          </radialGradient>
          <radialGradient id="gemG" cx="0.35" cy="0.3">
            <stop offset="0" stopColor="#f2fff8" />
            <stop offset="1" stopColor="#2f7a5c" />
          </radialGradient>
        </defs>
        {/* necklace chain */}
        <path d="M60 60 C 90 150, 150 186, 180 186 C 210 186, 270 150, 300 60" fill="none" stroke="url(#gold)" strokeWidth="4" strokeLinecap="round" />
        <path d="M74 74 C 100 146, 152 174, 180 174 C 208 174, 260 146, 286 74" fill="none" stroke="url(#gold)" strokeWidth="2" opacity="0.75" />
        {gems.map((g, i) => (
          <g key={i} className="animate-shimmer" style={{ animationDelay: `${i * 0.5}s` }}>
            <circle cx={g.x} cy={g.y} r={g.r} fill="url(#gem)" />
            <circle cx={g.x} cy={g.y} r={g.r + 3.5} fill="none" stroke="url(#gold)" strokeWidth="2" />
          </g>
        ))}
        {/* pendant */}
        <g transform="translate(180 196)">
          <path d="M0 -12 L14 0 L0 26 L-14 0Z" fill="url(#gemG)" stroke="url(#gold)" strokeWidth="2.5" />
          <circle cx="0" cy="-16" r="5" fill="url(#gold)" />
          {[...Array(7)].map((_, i) => (
            <circle key={i} cx={-16 + i * 5.4} cy={32 + Math.abs(3 - i) * -1.5} r="2.6" fill="url(#gold)" />
          ))}
        </g>
        {/* scattered polki */}
        <circle cx="58" cy="228" r="4" fill="url(#gem)" opacity="0.9" />
        <circle cx="304" cy="212" r="5" fill="url(#gemG)" opacity="0.9" />
        <circle cx="322" cy="266" r="3" fill="url(#gem)" opacity="0.8" />
        <circle cx="40" cy="286" r="3.5" fill="url(#gemG)" opacity="0.8" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_-10%,rgb(255_255_255/0.65),transparent_55%)] mix-blend-soft-light" />
    </div>
  )
}

export function PartyVisual() {
  const sequinTile = `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52'><g><circle cx='13' cy='13' r='4.5' fill='%23e8c076' opacity='0.92'/><circle cx='13' cy='13' r='7.5' fill='none' stroke='%23ffdca0' stroke-opacity='0.3'/><circle cx='39' cy='34' r='3.5' fill='%23cf7f95' opacity='0.85'/><circle cx='39' cy='34' r='6' fill='none' stroke='%23ffd7e0' stroke-opacity='0.25'/><circle cx='40' cy='9' r='2' fill='%23ffe6b8' opacity='0.6'/><circle cx='8' cy='40' r='2' fill='%23ffe6b8' opacity='0.6'/></g></svg>`
  return (
    <div className="absolute inset-0 bg-[linear-gradient(155deg,#2b1030_0%,#3d1440_45%,#1e0b26_100%)]">
      <div
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,${sequinTile}")`, backgroundSize: '52px 52px' }}
      />
      <div className="animate-shimmer absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-5%,rgb(255_214_150/0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_110%,rgb(0_0_0/0.4),transparent_60%)]" />
      <div className="absolute bottom-5 left-6 depth rounded-[12px] bg-black/35 px-3 py-1.5 text-[11px] tracking-[0.1em] text-[#ffd9a8] uppercase backdrop-blur">
        Hand-set sequins
      </div>
    </div>
  )
}

export function BespokeVisual() {
  const swatches: { label: string; c: string }[] = [
    { label: 'Wine silk', c: 'linear-gradient(140deg,#7d2437,#4a1220)' },
    { label: 'Ivory chanderi', c: 'linear-gradient(140deg,#f6efe2,#e2d6c2)' },
    { label: 'Emerald', c: 'linear-gradient(140deg,#1f5b47,#0e3428)' },
    { label: 'Ink', c: 'linear-gradient(140deg,#2a3348,#141a29)' },
    { label: 'Saffron', c: 'linear-gradient(140deg,#e0a13b,#b9761f)' },
    { label: 'Plum', c: 'linear-gradient(140deg,#5a2a63,#33163a)' },
  ]
  return (
    <div className="absolute inset-0 bg-surface-2 p-6">
      <div className="grid grid-cols-3 gap-3">
        {swatches.map((s) => (
          <div key={s.label} className="depth relative aspect-square overflow-hidden rounded-[14px]" style={{ background: s.c }}>
            <span className="absolute inset-x-0 bottom-0 bg-black/35 px-2 py-1 text-[10px] text-white/85 backdrop-blur-sm">{s.label}</span>
          </div>
        ))}
      </div>
      {/* tape measure */}
      <div className="depth relative mt-4 flex h-14 items-center gap-3 overflow-hidden rounded-[14px] bg-bg px-4">
        <span className="text-[11px] tracking-[0.1em] text-accent-2 uppercase">Bust 36</span>
        <div className="relative h-6 flex-1 rounded-[6px] bg-accent-2/20">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden>
            {[...Array(21)].map((_, i) => (
              <line
                key={i}
                x1={i * 15}
                x2={i * 15}
                y1={i % 5 === 0 ? 4 : 12}
                y2="20"
                stroke="hsl(38 62% 42%)"
                strokeWidth="1.4"
              />
            ))}
          </svg>
        </div>
        <span className="text-[11px] tracking-[0.1em] text-accent-2 uppercase">28 days</span>
      </div>
    </div>
  )
}

export const collectionVisuals: Record<string, () => ReactElement> = {
  sarees: SareeVisual,
  jewellery: JewelleryVisual,
  party: PartyVisual,
  bespoke: BespokeVisual,
}
