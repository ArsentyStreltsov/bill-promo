import { useEffect, useState, type FormEvent } from 'react'
import { finalCta, formFields } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

type FormState = {
  name: string
  company: string
  contact: string
  task: string
  deadline: string
}

const empty: FormState = {
  name: '',
  company: '',
  contact: '',
  task: '',
  deadline: '',
}

export function FinalCTA() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      const t = window.setTimeout(() => setSuccess(false), 4000)
      return () => window.clearTimeout(t)
    }
  }, [success])

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Укажите имя'
    if (!form.company.trim()) next.company = 'Укажите компанию'
    if (!form.contact.trim()) next.contact = 'Укажите контакт'
    if (!form.task.trim()) next.task = 'Опишите задачу'
    if (!form.deadline.trim()) next.deadline = 'Укажите дату запуска'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setForm(empty)
  }

  return (
    <Section title={finalCta.title} subtitle={finalCta.text}>
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="text-sm text-muted">{finalCta.formHint}</p>
        {success ? (
          <div className="rounded-md border border-line bg-surface p-4 text-sm">
            {finalCta.success}
          </div>
        ) : (
          <form className="space-y-3 rounded-md border border-line p-4" onSubmit={onSubmit} noValidate>
            {(
              [
                ['name', formFields.name],
                ['company', formFields.company],
                ['contact', formFields.contact],
                ['task', formFields.task],
                ['deadline', formFields.deadline],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="block text-sm" htmlFor={`final-${key}`}>
                <span>{label} *</span>
                {key === 'task' ? (
                  <textarea
                    id={`final-${key}`}
                    rows={3}
                    value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="mt-1 w-full rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-ink"
                  />
                ) : (
                  <input
                    id={`final-${key}`}
                    type="text"
                    value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="mt-1 w-full rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-ink"
                  />
                )}
                {errors[key] ? (
                  <span className="mt-1 block text-xs text-accent">{errors[key]}</span>
                ) : null}
              </label>
            ))}
            <Button type="submit" className="w-full">
              {finalCta.button}
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}
