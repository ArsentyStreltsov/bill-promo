import { useState } from 'react'
import { platformFlow } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function PlatformFlow() {
  const [activeId, setActiveId] = useState(platformFlow.packages[1].id)

  return (
    <Section id={platformFlow.id} title={platformFlow.title} subtitle={platformFlow.subtitle}>
      <div className="grid gap-4 lg:grid-cols-3">
        {platformFlow.packages.map((pkg) => {
          const selected = pkg.id === activeId
          return (
            <div
              key={pkg.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveId(pkg.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveId(pkg.id)
                }
              }}
              className={`flex h-full cursor-pointer flex-col rounded-md border p-5 text-left transition-colors ${
                selected
                  ? 'border-accent bg-surface ring-1 ring-accent'
                  : 'border-line bg-white hover:border-ink'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {pkg.short}
                </span>
                <span className="flex gap-0.5" aria-hidden>
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-4 rounded-full ${
                        n <= pkg.level ? 'bg-accent' : 'bg-line'
                      }`}
                    />
                  ))}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold">{pkg.title}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.tagline}</p>
              <p className="mt-3 text-xs text-muted">{pkg.bestFor}</p>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Входит
                </div>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 font-semibold text-accent">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.excludes.length > 0 ? (
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Отдельно
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {pkg.excludes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-5 text-sm text-muted">
                  Всё в одном контуре: от сборки до призов и отчёта.
                </p>
              )}

              <div className="mt-auto pt-6">
                {selected ? (
                  <Button
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      document
                        .getElementById('configurator')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Рассчитать такой формат
                  </Button>
                ) : (
                  <p className="text-center text-xs text-muted">Нажмите, чтобы выбрать</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
