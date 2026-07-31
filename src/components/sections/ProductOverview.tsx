import { productOverview } from '../../data/content'
import { Section } from '../ui/Section'

export function ProductOverview() {
  return (
    <Section id={productOverview.id} title={productOverview.title}>
      <div className="space-y-3 text-muted">
        {productOverview.text.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {productOverview.cards.map((card) => (
          <div key={card.title} className="rounded-md border border-line p-4">
            <h3 className="font-medium text-ink">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
