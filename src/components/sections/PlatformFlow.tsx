import { platformFlow } from '../../data/content'
import { Section } from '../ui/Section'

export function PlatformFlow() {
  return (
    <Section id={platformFlow.id} title={platformFlow.title} subtitle={platformFlow.subtitle}>
      <div className="grid gap-3 sm:grid-cols-3">
        {platformFlow.pillars.map((p) => (
          <div key={p.title} className="rounded-md border border-line p-4">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-1 text-sm text-muted">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Наша сторона
          </h3>
          <ol className="mt-4 space-y-2">
            {platformFlow.agencySteps.map((step, i) => (
              <li
                key={step.title}
                className="flex items-center gap-3 rounded-md border border-line px-3 py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-muted">{step.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Путь участника
          </h3>
          <ol className="mt-4 space-y-2">
            {platformFlow.participantSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex items-center gap-3 rounded-md border border-line px-3 py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-ink">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-muted">{step.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
