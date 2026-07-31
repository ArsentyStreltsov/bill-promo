import { rewards, rewardsSection } from '../../data/rewards'
import { Section } from '../ui/Section'

export function Rewards() {
  return (
    <Section title={rewardsSection.title} subtitle={rewardsSection.note}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rewards.map((card) => (
          <div key={card.title} className="rounded-md border border-line p-4">
            <h3 className="font-medium">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
