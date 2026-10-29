import { Container } from '../components/Container'
import { OrnamentDivider } from '../components/Ornament'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { steps } from '../content'

export function Steps() {
  return (
    <section id="how" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <OrnamentDivider />
      <Container>
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} description={steps.description} />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block" />
          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col items-start gap-5 md:items-center md:text-center">
                <span className="depth relative grid size-12 place-items-center rounded-[16px] bg-surface font-display text-[19px] font-medium tabular-nums text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[21px] font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
