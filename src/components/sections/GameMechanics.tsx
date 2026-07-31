import { useState } from 'react'
import { gameMechanicsSection, mechanics } from '../../data/mechanics'
import { Section } from '../ui/Section'

export function GameMechanics() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <Section id={gameMechanicsSection.id} title={gameMechanicsSection.title}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mechanics.map((m) => {
          const open = active === m.id
          return (
            <button
              key={m.id}
              type="button"
              onMouseEnter={() => setActive(m.id)}
              onFocus={() => setActive(m.id)}
              onClick={() => setActive(open ? null : m.id)}
              className={`rounded-md border p-4 text-left transition-colors ${
                open ? 'border-accent bg-surface' : 'border-line bg-white hover:border-ink'
              }`}
            >
              <h3 className="font-medium">{m.title}</h3>
              {open ? (
                <div className="mt-2 space-y-1 text-sm text-muted">
                  <p>{m.description}</p>
                  <p>
                    <span className="text-ink">Задача:</span> {m.goal}
                  </p>
                  <p>
                    <span className="text-ink">Награда:</span> {m.reward}
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-sm text-muted">Наведите или нажмите для описания</p>
              )}
            </button>
          )
        })}
      </div>
      <p className="mt-6 text-sm text-muted">{gameMechanicsSection.note}</p>
    </Section>
  )
}
