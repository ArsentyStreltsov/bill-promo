import { cases, casesSection } from '../../data/cases'
import { Section } from '../ui/Section'

export function Cases() {
  return (
    <Section id={casesSection.id} title={casesSection.title}>
      <p className="mb-6 rounded-md border border-dashed border-line bg-surface p-3 text-sm text-muted">
        {casesSection.disclaimer}
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        {cases.map((c) => (
          <article key={c.brand} className="rounded-md border border-line p-4">
            <h3 className="font-medium">{c.brand}</h3>
            <p className="mt-2 text-sm text-muted">{c.task}</p>
            <p className="mt-2 text-sm">
              <span className="text-muted">Площадка:</span> {c.platform}
            </p>
            <p className="text-sm">
              <span className="text-muted">Механика:</span> {c.mechanic}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.participants}</div>
                <div className="text-muted">участники</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.receipts}</div>
                <div className="text-muted">чеки</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.prizes}</div>
                <div className="text-muted">призы</div>
              </div>
            </div>
            <div className="mt-3 flex h-24 items-center justify-center rounded border border-dashed border-line bg-surface text-xs text-muted">
              пример интерфейса · клик для просмотра позже
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
