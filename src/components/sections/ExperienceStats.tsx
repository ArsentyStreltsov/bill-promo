import { experienceStats } from '../../data/stats'
import { Section } from '../ui/Section'

export function ExperienceStats() {
  return (
    <Section title={experienceStats.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {experienceStats.items.map((item) => (
          <div key={item.label} className="rounded-md border border-line p-4 text-center">
            <div className="text-2xl font-semibold text-accent md:text-3xl">{item.value}</div>
            <div className="mt-2 text-sm text-muted">{item.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
