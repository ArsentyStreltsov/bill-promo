import { services } from '../../data/content'
import { Section } from '../ui/Section'

export function Services() {
  return (
    <Section title={services.title} subtitle={services.note}>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.stages.map((stage, i) => (
          <li key={stage} className="rounded-md border border-line p-3 text-sm">
            <span className="font-semibold text-accent">{i + 1}.</span> {stage}
          </li>
        ))}
      </ol>
      <h3 className="mt-8 font-medium">{services.extrasTitle}</h3>
      <ul className="mt-3 columns-1 gap-x-8 space-y-1 text-sm text-muted sm:columns-2">
        {services.extras.map((item) => (
          <li key={item} className="break-inside-avoid">
            • {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}
