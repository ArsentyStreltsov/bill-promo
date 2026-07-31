import { useState } from 'react'
import { faqItems, faqSection } from '../../data/faq'
import { Section } from '../ui/Section'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <Section id={faqSection.id} title={faqSection.title}>
      <div className="divide-y divide-line rounded-md border border-line">
        {faqItems.map((item, index) => {
          const open = openId === index
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium"
                onClick={() => setOpenId(open ? null : index)}
                aria-expanded={open}
              >
                {item.q}
                <ChevronDown
                  size={16}
                  className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>
              {open ? (
                <p className="border-t border-line bg-surface px-4 py-3 text-sm text-muted">
                  {item.a}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
