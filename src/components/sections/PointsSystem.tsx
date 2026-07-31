import { useMemo, useState } from 'react'
import { pointsSystem } from '../../data/content'
import { Section } from '../ui/Section'

export function PointsSystem() {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    receipt: true,
    sku: true,
    game: false,
    daily: false,
  })

  const total = useMemo(
    () =>
      pointsSystem.calculator.reduce(
        (sum, item) => sum + (selected[item.id] ? item.points : 0),
        0,
      ),
    [selected],
  )

  return (
    <Section title={pointsSystem.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <ul className="columns-1 gap-x-6 space-y-1 text-sm text-muted sm:columns-2">
          {pointsSystem.features.map((f) => (
            <li key={f} className="break-inside-avoid">
              • {f}
            </li>
          ))}
        </ul>

        <div className="rounded-md border border-line p-4">
          <div className="text-sm font-medium">Демо-калькулятор баллов</div>
          <div className="mt-4 space-y-2">
            {pointsSystem.calculator.map((item) => (
              <label
                key={item.id}
                className="flex cursor-pointer items-center justify-between gap-3 rounded border border-line px-3 py-2 text-sm"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!selected[item.id]}
                    onChange={() =>
                      setSelected((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                  />
                  {item.label}
                </span>
                <span className="font-medium">+{item.points}</span>
              </label>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded border border-accent bg-surface px-3 py-3">
            <span className="text-sm text-muted">Итоговый баланс</span>
            <span className="text-xl font-semibold text-accent">{total}</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
