import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { X } from 'lucide-react'
import { finalCta, formFields } from '../data/content'
import { useContact } from './ContactContext'
import { Button } from './ui/Button'

type FormState = {
  name: string
  company: string
  contact: string
  task: string
  deadline: string
  comment: string
}

const empty: FormState = {
  name: '',
  company: '',
  contact: '',
  task: '',
  deadline: '',
  comment: '',
}

export function ContactModal() {
  const { open, closeModal, presetNote } = useContact()
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!open) return
    setSuccess(false)
    setErrors({})
    setForm({ ...empty, task: presetNote || '', comment: '' })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeModal, presetNote])

  if (!open) return null

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Укажите имя'
    if (!form.company.trim()) next.company = 'Укажите компанию'
    if (!form.contact.trim()) next.contact = 'Укажите контакт'
    if (!form.task.trim()) next.task = 'Опишите задачу'
    if (!form.deadline.trim()) next.deadline = 'Укажите желаемый срок'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
  }

  function field(
    key: keyof FormState,
    label: string,
    opts?: { textarea?: boolean; required?: boolean },
  ) {
    const required = opts?.required !== false
    const common = {
      id: key,
      value: form[key],
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value })),
      className:
        'mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink',
    }
    return (
      <label className="block text-sm" htmlFor={key}>
        <span className="text-ink">
          {label}
          {required ? ' *' : ''}
        </span>
        {opts?.textarea ? (
          <textarea {...common} rows={3} />
        ) : (
          <input {...common} type="text" />
        )}
        {errors[key] ? <span className="mt-1 block text-xs text-accent">{errors[key]}</span> : null}
      </label>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onClick={closeModal}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-lg border border-line bg-white p-5 sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 id="contact-title" className="text-lg font-semibold">
              {finalCta.button}
            </h3>
            <p className="mt-1 text-sm text-muted">{finalCta.formHint}</p>
          </div>
          <button
            type="button"
            aria-label="Закрыть"
            onClick={closeModal}
            className="rounded-md border border-line p-1.5 hover:bg-surface"
          >
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="rounded-md border border-line bg-surface p-4 text-sm">{finalCta.success}</div>
        ) : (
          <form className="space-y-3" onSubmit={onSubmit} noValidate>
            {field('name', formFields.name)}
            {field('company', formFields.company)}
            {field('contact', formFields.contact)}
            {field('task', formFields.task, { textarea: true })}
            {field('deadline', formFields.deadline)}
            {field('comment', formFields.comment, { textarea: true, required: false })}
            <Button type="submit" className="mt-2 w-full">
              {formFields.submit}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
