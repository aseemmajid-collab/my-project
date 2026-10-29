import { Container } from '../components/Container'
import { Monogram } from '../components/DashboardMock'
import { OrnamentDivider } from '../components/Ornament'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../content'

export function Testimonials() {
  return (
    <section id="customers" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <OrnamentDivider />
      <Container>
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <figure className="depth relative flex h-full flex-col justify-between rounded-card bg-surface p-6 shadow-glow">
                <blockquote className="font-display text-pretty text-[17px] leading-[1.5] text-fg/90 italic">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Monogram
                    initials={t.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                    hue={t.hue}
                    className="size-9 text-[12px]"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-medium">{t.name}</p>
                    <p className="truncate text-[13px] text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
