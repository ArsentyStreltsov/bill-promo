import { userJourney } from '../../data/content'
import { Section } from '../ui/Section'

export function UserJourney() {
  return (
    <Section title={userJourney.title}>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {userJourney.stages.map((stage, index) => (
          <div
            key={stage.title}
            className="min-w-[240px] flex-1 rounded-md border border-line bg-white p-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-accent">
              Этап {index + 1}
            </div>
            <h3 className="mt-2 font-medium">{stage.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {stage.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {'extraTitle' in stage && stage.extraTitle ? (
              <>
                <p className="mt-3 text-xs font-medium text-ink">{stage.extraTitle}</p>
                <ul className="mt-1 space-y-1 text-sm text-muted">
                  {stage.extraItems?.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {'note' in stage && stage.note ? (
              <p className="mt-3 text-xs text-muted">{stage.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}
