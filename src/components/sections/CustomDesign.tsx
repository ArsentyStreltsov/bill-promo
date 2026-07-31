import { useState } from 'react'
import { customDesign } from '../../data/content'
import { Section } from '../ui/Section'

export function CustomDesign() {
  const [styleId, setStyleId] = useState(customDesign.styles[0].id)
  const style = customDesign.styles.find((s) => s.id === styleId) ?? customDesign.styles[0]

  return (
    <Section title={customDesign.title} subtitle={customDesign.text}>
      <div className="flex flex-wrap gap-2">
        {customDesign.items.map((item) => (
          <span key={item} className="rounded border border-line px-2.5 py-1 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-3 text-sm font-medium">Переключатель визуальных стилей</div>
        <div className="mb-4 flex flex-wrap gap-2">
          {customDesign.styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStyleId(s.id)}
              className={`rounded border px-3 py-1.5 text-sm ${
                styleId === s.id
                  ? 'border-accent bg-accent text-white'
                  : 'border-line bg-white text-muted'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div
          className="mx-auto max-w-xs rounded-lg border border-line p-4"
          style={{ background: style.secondary }}
        >
          <div
            className="rounded-md px-3 py-2 text-sm font-medium text-white"
            style={{ background: style.primary }}
          >
            Пример экрана промо
          </div>
          <div className="mt-3 rounded-md border border-line bg-white p-3 text-sm">
            <div className="font-medium">Баланс: 150 баллов</div>
            <div className="mt-2 h-2 rounded bg-line">
              <div className="h-2 w-2/3 rounded" style={{ background: style.primary }} />
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-md px-3 py-2 text-sm text-white"
              style={{ background: style.primary }}
            >
              Получить приз
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
