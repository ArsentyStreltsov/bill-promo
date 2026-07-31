import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-line px-4 py-12 md:px-8 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-3xl text-muted">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
