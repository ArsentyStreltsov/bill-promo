import { antiFraud } from '../../data/content'
import { Section } from '../ui/Section'

export function AntiFraud() {
  return (
    <Section title={antiFraud.title}>
      <div className="grid gap-3 sm:grid-cols-2">
        {antiFraud.features.map((f) => (
          <div key={f} className="rounded-md border border-line px-3 py-2 text-sm">
            {f}
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-md border border-dashed border-line p-3 text-sm text-muted">
        {antiFraud.disclaimer}
      </p>
    </Section>
  )
}
