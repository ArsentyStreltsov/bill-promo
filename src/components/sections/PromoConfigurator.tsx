import { useMemo, useState } from 'react'
import { promoConfigurator } from '../../data/content'
import { useContact } from '../ContactContext'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function PromoConfigurator() {
  const { openModal } = useContact()
  const [choices, setChoices] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      promoConfigurator.steps.map((step) => [step.id, step.options[0]]),
    ),
  )

  const scenario = useMemo(() => {
    const platform = choices.platform
    const proof = choices.proof
    const engage = choices.engage
    const reward = choices.reward
    return `Пользователь переходит в ${platform}, подтверждает участие через «${proof}», дальше вовлекается через «${engage}» и получает «${reward}». Баллы и попытки настраиваются под механику; финальная логика выдачи призов определяется на этапе предложения.`
  }, [choices])

  return (
    <Section title={promoConfigurator.title} subtitle={promoConfigurator.note}>
      <div className="space-y-6">
        {promoConfigurator.steps.map((step, index) => (
          <div key={step.id} className="rounded-md border border-line p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-accent">
              Шаг {index + 1}
            </div>
            <h3 className="mt-1 font-medium">{step.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {step.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setChoices((prev) => ({ ...prev, [step.id]: option }))}
                  className={`rounded border px-3 py-1.5 text-sm ${
                    choices[step.id] === option
                      ? 'border-accent bg-accent text-white'
                      : 'border-line bg-white text-muted hover:border-ink'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-md border border-dashed border-line bg-surface p-4">
          <div className="text-sm font-medium">Сформированный сценарий</div>
          <p className="mt-2 text-sm text-muted">{scenario}</p>
          <Button
            className="mt-4"
            onClick={() => openModal(scenario)}
          >
            {promoConfigurator.cta}
          </Button>
        </div>
      </div>
    </Section>
  )
}
