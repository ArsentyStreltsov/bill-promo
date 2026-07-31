import { launchSteps } from '../../data/content'
import { Section } from '../ui/Section'

export function LaunchSteps() {
  return (
    <Section id={launchSteps.id} title={launchSteps.title}>
      <ol className="space-y-3">
        {launchSteps.steps.map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-md border border-line p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent">
              {i + 1}
            </div>
            <div>
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
