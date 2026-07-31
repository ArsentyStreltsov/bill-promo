import { cases, casesSection } from '../../data/cases'
import { lessons } from '../../data/content'
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
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-muted">Задача</dt>
                <dd>{c.task}</dd>
              </div>
              <div>
                <dt className="text-muted">Площадка</dt>
                <dd>{c.platform}</dd>
              </div>
              <div>
                <dt className="text-muted">Механика</dt>
                <dd>{c.mechanic}</dd>
              </div>
              <div>
                <dt className="text-muted">Модули</dt>
                <dd>{c.modules.join(', ')}</dd>
              </div>
              <div>
                <dt className="text-muted">Сроки</dt>
                <dd>{c.timeline}</dd>
              </div>
              <div>
                <dt className="text-muted">Результат</dt>
                <dd>{c.result}</dd>
              </div>
            </dl>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-3">
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.participants}</div>
                <div className="text-muted">участники</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.receipts}</div>
                <div className="text-muted">чеки</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.sessions}</div>
                <div className="text-muted">сессии</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.prizes}</div>
                <div className="text-muted">призы</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.retention}</div>
                <div className="text-muted">возврат</div>
              </div>
              <div className="rounded border border-line p-2">
                <div className="font-semibold">{c.metrics.conversion}</div>
                <div className="text-muted">конверсия</div>
              </div>
            </div>
            <div className="mt-3 flex h-24 items-center justify-center rounded border border-dashed border-line bg-surface text-xs text-muted">
              пример интерфейса
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-md border border-line p-4">
        <h3 className="font-medium">{lessons.title}</h3>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {lessons.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm font-medium">{lessons.conclusion}</p>
      </div>
    </Section>
  )
}
