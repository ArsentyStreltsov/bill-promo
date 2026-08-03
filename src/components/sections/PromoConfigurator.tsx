import { useMemo, useState } from 'react'
import { promoConfigurator } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

type FormState = {
  name: string
  company: string
  contact: string
}

const emptyForm: FormState = { name: '', company: '', contact: '' }

export function PromoConfigurator() {
  const configCount = promoConfigurator.steps.length
  const totalSteps = configCount + 1
  const [step, setStep] = useState(0)
  const [choices, setChoices] = useState<Record<string, string>>(() =>
    Object.fromEntries(promoConfigurator.steps.map((s) => [s.id, s.options[0]])),
  )
  const [form, setForm] = useState<FormState>(emptyForm)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const progress = Math.round(((step + 1) / totalSteps) * 100)
  const isConfigStep = step < configCount
  const configStep = promoConfigurator.steps[step]
  const isLast = step >= totalSteps - 1

  const scenario = useMemo(() => {
    return `Площадка: ${choices.platform}. Подтверждение: ${choices.proof}. Вовлечение: ${choices.engage}. Награда: ${choices.reward}.`
  }, [choices])

  function next() {
    setError('')
    if (isConfigStep) {
      setStep((s) => s + 1)
      return
    }
    if (!form.name.trim() || !form.company.trim() || !form.contact.trim()) {
      setError('Заполните все поля, чтобы отправить')
      return
    }
    setSuccess(true)
  }

  function back() {
    setError('')
    setStep((s) => Math.max(0, s - 1))
  }

  return (
    <Section
      id={promoConfigurator.id}
      title={promoConfigurator.title}
      subtitle={promoConfigurator.subtitle}
    >
      <div className="mx-auto max-w-xl rounded-md border border-line p-5">
        {success ? (
          <div className="space-y-3">
            <p className="text-sm">{promoConfigurator.success}</p>
            <p className="rounded border border-dashed border-line bg-surface p-3 text-sm text-muted">
              {scenario}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-2 flex items-center justify-between text-xs text-muted">
              <span>
                Шаг {step + 1} из {totalSteps}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="mb-6 h-2 overflow-hidden rounded bg-line">
              <div
                className="h-full rounded bg-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {isConfigStep ? (
              <div>
                <h3 className="font-medium">{configStep.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {configStep.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setChoices((prev) => ({ ...prev, [configStep.id]: option }))
                      }
                      className={`rounded border px-3 py-2 text-sm ${
                        choices[configStep.id] === option
                          ? 'border-accent bg-accent text-white'
                          : 'border-line bg-white text-muted hover:border-ink'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-medium">{promoConfigurator.contactStep.title}</h3>
                <div className="mt-4 space-y-3">
                  {promoConfigurator.contactStep.fields.map((field) => (
                    <label key={field.id} className="block text-sm" htmlFor={field.id}>
                      <span className="text-ink">{field.label} *</span>
                      <input
                        id={field.id}
                        type="text"
                        value={form[field.id as keyof FormState]}
                        placeholder={field.placeholder}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            [field.id]: e.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-md border border-line px-3 py-2.5 text-sm outline-none focus:border-ink"
                      />
                    </label>
                  ))}
                </div>
                {error ? <p className="mt-2 text-xs text-accent">{error}</p> : null}
              </div>
            )}

            <div className="mt-6 flex gap-2">
              <Button variant="secondary" onClick={back} disabled={step === 0} className="flex-1">
                Назад
              </Button>
              <Button onClick={next} className="flex-1">
                {isLast ? 'Отправить' : 'Далее'}
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted">{promoConfigurator.note}</p>
          </>
        )}
      </div>
    </Section>
  )
}
