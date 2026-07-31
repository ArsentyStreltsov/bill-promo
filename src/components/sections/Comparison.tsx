import { comparison } from '../../data/content'
import { Section } from '../ui/Section'

export function Comparison() {
  return (
    <Section title={comparison.title}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-surface">
              <th className="p-3 font-medium">Параметр</th>
              <th className="p-3 font-medium">Разработка с нуля</th>
              <th className="p-3 font-medium">Наша платформа</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.param} className="border-b border-line">
                <td className="p-3 font-medium">{row.param}</td>
                <td className="p-3 text-muted">{row.fromScratch}</td>
                <td className="p-3 text-muted">{row.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
