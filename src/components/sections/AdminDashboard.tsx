import { adminDashboard } from '../../data/content'
import { Section } from '../ui/Section'

export function AdminDashboard() {
  return (
    <Section title={adminDashboard.title}>
      <div className="rounded-md border border-line bg-surface p-4">
        <div className="mb-4 text-sm font-medium">Макет административной панели</div>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded border border-line bg-white p-3 md:col-span-1">
            <div className="text-xs uppercase text-muted">Меню</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Участники</li>
              <li>Чеки</li>
              <li>Призы</li>
              <li>Аналитика</li>
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-3">
            {['Участники', 'Чеки сегодня', 'Призы', 'Спорные'].map((label) => (
              <div key={label} className="rounded border border-line bg-white p-3">
                <div className="text-xs text-muted">{label}</div>
                <div className="mt-1 text-xl font-semibold">XX</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="mt-6 columns-1 gap-x-8 space-y-1 text-sm text-muted sm:columns-2">
        {adminDashboard.features.map((f) => (
          <li key={f} className="break-inside-avoid">
            • {f}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-md border border-dashed border-line p-3 text-sm text-muted">
        {adminDashboard.disclaimer}
      </p>
    </Section>
  )
}
