import { useState } from 'react'
import { receiptValidation } from '../../data/content'
import { Section } from '../ui/Section'

export function ReceiptValidation() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(receiptValidation.params.map((p, i) => [p, i < 5])),
  )

  return (
    <Section id={receiptValidation.id} title={receiptValidation.title}>
      <p className="text-muted">{receiptValidation.text}</p>
      <div className="mt-6 rounded-md border border-line bg-surface p-4">
        <div className="mb-3 text-sm font-medium">Параметры проверки (схема админ-панели)</div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {receiptValidation.params.map((param) => (
            <label
              key={param}
              className="flex cursor-pointer items-start gap-2 rounded border border-line bg-white px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                className="mt-0.5"
                checked={!!enabled[param]}
                onChange={() =>
                  setEnabled((prev) => ({ ...prev, [param]: !prev[param] }))
                }
              />
              <span>{param}</span>
            </label>
          ))}
        </div>
      </div>
      <p className="mt-4 rounded-md border border-dashed border-line bg-white p-3 text-sm text-muted">
        {receiptValidation.disclaimer}
      </p>
    </Section>
  )
}
