import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { analytics } from '../../data/content'
import { Section } from '../ui/Section'

export function Analytics() {
  return (
    <Section title={analytics.title}>
      <p className="mb-4 inline-block rounded border border-line bg-surface px-2 py-1 text-xs text-muted">
        {analytics.demoNote}
      </p>
      <div className="h-64 w-full rounded-md border border-line bg-white p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analytics.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d8dde3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="participants" name="Участники" stroke="#e85d3b" />
            <Line type="monotone" dataKey="receipts" name="Чеки" stroke="#1a1d23" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-6 columns-1 gap-x-8 space-y-1 text-sm text-muted sm:columns-2 lg:columns-3">
        {analytics.metrics.map((m) => (
          <li key={m} className="break-inside-avoid">
            • {m}
          </li>
        ))}
      </ul>
    </Section>
  )
}
