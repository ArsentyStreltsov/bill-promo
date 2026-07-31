import { platforms } from '../../data/content'
import { Section } from '../ui/Section'

export function Platforms() {
  return (
    <Section title={platforms.title} subtitle={platforms.note}>
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.cards.map((card) => (
          <div key={card.title} className="rounded-md border border-line p-4">
            <h3 className="font-medium">{card.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {card.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
