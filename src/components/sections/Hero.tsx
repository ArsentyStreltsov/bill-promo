import { useState } from 'react'
import { brand, hero } from '../../data/content'
import { Button } from '../ui/Button'

export function Hero() {
  const [screen, setScreen] = useState(0)

  return (
    <section id="top" className="border-b border-line px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{brand.name}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">{hero.subtitle}</p>
          <p className="mt-3 text-sm text-muted">{hero.note}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() =>
                document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {hero.primaryCta}
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {hero.secondaryCta}
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {hero.labels.map((label) => (
              <span
                key={label}
                className="rounded border border-line bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-line bg-surface p-4">
          <div className="mx-auto flex h-72 w-40 flex-col rounded-[1.5rem] border-2 border-ink bg-white p-3 shadow-sm md:h-80 md:w-44">
            <div className="mb-2 h-2 w-12 self-center rounded-full bg-line" />
            <div className="flex flex-1 flex-col items-center justify-center rounded-md border border-dashed border-line bg-surface p-3 text-center">
              <div className="text-xs uppercase tracking-wide text-muted">Экран</div>
              <div className="mt-2 text-sm font-medium">{hero.screens[screen]}</div>
              <div className="mt-3 text-xs text-muted">пример интерфейса</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {hero.screens.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setScreen(i)}
                className={`rounded border px-2 py-1 text-xs ${
                  screen === i
                    ? 'border-accent bg-accent text-white'
                    : 'border-line bg-white text-muted hover:border-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
