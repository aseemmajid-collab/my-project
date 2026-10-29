import { ArrowRight, Check } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { MandalaBackdrop } from '../components/Ornament'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

export function Cta() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent) {
    event.preventDefault()
    setState('sending')
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const body = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(body.error ?? 'Something went wrong.')
      setState('done')
      setMessage(cta.success)
    } catch (error) {
      setState('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong.')
    }
  }

  return (
    <section id="cta" className="scroll-mt-24 py-12">
      <Container>
        <Reveal>
          <div className="depth relative overflow-hidden rounded-[32px] bg-surface px-6 py-20 text-center shadow-glow sm:px-12 sm:py-28">
            <Aurora intensity={0.7} />
            <MandalaBackdrop className="-left-28 -top-28 size-[340px] text-accent/45" />
            <MandalaBackdrop className="-bottom-32 -right-24 size-[300px] text-accent-2/45" reverse />
            <div aria-hidden className="grid-lines absolute inset-0" />
            <div aria-hidden className="noise pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-balance text-[40px] font-medium leading-[1.03] tracking-[-0.015em] sm:text-[56px]">{cta.title}</h2>
              <p className="mt-4 text-[16px] text-muted sm:text-[18px]">{cta.description}</p>

              {state === 'done' ? (
                <p className="depth relative mx-auto mt-8 inline-flex h-13 items-center gap-2 rounded-control-lg bg-accent/10 px-5 text-[15px] text-accent [--depth-edge:rgb(156_43_63/0.35)]">
                  <Check className="size-4" />
                  {message}
                </p>
              ) : (
                <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
                  <label className="sr-only" htmlFor="cta-email">
                    Email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={cta.placeholder}
                    className="depth relative h-13 min-w-0 flex-1 rounded-control-lg bg-surface px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(156_43_63/0.7)]"
                  />
                  <Button size="lg" type="submit" disabled={state === 'sending'}>
                    {cta.button}
                    <ArrowRight />
                  </Button>
                </form>
              )}
              {state === 'error' && <p className="mt-3 text-[13px] text-accent-3">{message}</p>}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
