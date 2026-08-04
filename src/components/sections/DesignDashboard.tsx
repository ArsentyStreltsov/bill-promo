import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { designDashboard } from '../../data/content'
import { Section } from '../ui/Section'

const PIE_COLORS = ['#1a1d23', '#5c6570', '#d8dde3', '#9ca3af']

type WidgetId = (typeof designDashboard.widgetCatalog)[number]['id']

type Theme = {
  accent: string
  bg: string
  surface: string
  radius: number
}

function QuizPreview({ theme }: { theme: Theme }) {
  const [picked, setPicked] = useState<number | null>(null)
  const options = ['Акционный SKU', 'Любой товар', 'Только чек без SKU']

  return (
    <div
      className="flex flex-col border p-4"
      style={{ background: theme.bg, borderColor: '#d8dde3', borderRadius: theme.radius }}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="text-sm font-medium" style={{ color: theme.accent }}>
          Превью игры · Викторина
        </div>
        <span className="border border-line bg-white px-2 py-0.5 text-xs text-muted" style={{ borderRadius: theme.radius }}>
          тот же стиль
        </span>
      </div>

      <div className="mx-auto w-full max-w-[220px]">
        <div
          className="border-2 bg-white p-3"
          style={{ borderColor: theme.accent, borderRadius: Math.max(theme.radius, 12) }}
        >
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-line" />
          <div
            className="px-3 py-2 text-center text-xs font-semibold text-white"
            style={{ background: theme.accent, borderRadius: theme.radius }}
          >
            Викторина дня
          </div>
          <p className="mt-3 text-sm font-medium text-ink">Что нужно загрузить для участия?</p>
          <div className="mt-3 space-y-2">
            {options.map((opt, i) => {
              const active = picked === i
              const correct = i === 0
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPicked(i)}
                  className="block w-full border px-3 py-2 text-left text-xs"
                  style={{
                    borderRadius: theme.radius,
                    borderColor: active ? theme.accent : '#d8dde3',
                    background: active ? theme.bg : '#fff',
                    color: active && correct ? theme.accent : '#1a1d23',
                  }}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {picked !== null ? (
            <p className="mt-3 text-center text-xs" style={{ color: theme.accent }}>
              {picked === 0 ? '+20 баллов' : 'Попробуйте ещё'}
            </p>
          ) : (
            <p className="mt-3 text-center text-xs text-muted">Выберите ответ</p>
          )}
        </div>
      </div>
    </div>
  )
}

export function DesignDashboard() {
  const [mode, setMode] = useState<'template' | 'custom'>('template')
  const [templateId, setTemplateId] = useState(designDashboard.templates[0].id)
  const [accent, setAccent] = useState('#e85d3b')
  const [widgets, setWidgets] = useState<WidgetId[]>(['kpi', 'line', 'bars', 'pie'])
  const [catalogOpen, setCatalogOpen] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)
  const [chartsVisible, setChartsVisible] = useState(false)

  const template =
    designDashboard.templates.find((t) => t.id === templateId) ?? designDashboard.templates[0]

  const theme = useMemo<Theme>(() => {
    if (mode === 'template') {
      return {
        accent: template.accent,
        bg: template.bg,
        surface: template.surface,
        radius: 10,
      }
    }
    return {
      accent,
      bg: '#f7f8fa',
      surface: '#ffffff',
      radius: 0,
    }
  }, [mode, template, accent])

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setChartsVisible(true)
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function addWidget(id: WidgetId) {
    setWidgets((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setCatalogOpen(false)
  }

  function removeWidget(id: WidgetId) {
    setWidgets((prev) => prev.filter((w) => w !== id))
  }

  const cardStyle = {
    background: theme.surface,
    borderColor: '#d8dde3',
    borderRadius: theme.radius,
  }

  return (
    <Section
      id={designDashboard.id}
      title={designDashboard.title}
      subtitle={designDashboard.subtitle}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode('template')}
          className={`border px-3 py-1.5 text-sm ${
            mode === 'template'
              ? 'border-accent bg-accent text-white'
              : 'border-line bg-white text-muted'
          }`}
          style={{ borderRadius: mode === 'custom' ? 0 : 6 }}
        >
          Готовые шаблоны
        </button>
        <button
          type="button"
          onClick={() => setMode('custom')}
          className={`border px-3 py-1.5 text-sm ${
            mode === 'custom'
              ? 'border-accent bg-accent text-white'
              : 'border-line bg-white text-muted'
          }`}
          style={{ borderRadius: mode === 'custom' ? 0 : 6 }}
        >
          Кастомный кабинет
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside
          className="border border-line bg-white p-4"
          style={{ borderRadius: theme.radius }}
        >
          {mode === 'template' ? (
            <div className="space-y-3">
              <div className="text-sm font-medium">Выберите шаблон</div>
              {designDashboard.templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTemplateId(t.id)}
                  className={`flex w-full items-center gap-3 border p-3 text-left ${
                    templateId === t.id ? 'border-accent' : 'border-line hover:border-ink'
                  }`}
                  style={{ borderRadius: theme.radius }}
                >
                  <span
                    className="h-8 w-8"
                    style={{ background: t.accent, borderRadius: theme.radius }}
                    aria-hidden
                  />
                  <span className="text-sm font-medium">{t.label}</span>
                </button>
              ))}
              <p className="text-xs text-muted">
                Быстрый старт на готовой визуальной основе. Потом можно доработать под гайды.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium" htmlFor="accent-color">
                  Акцентный цвет
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    id="accent-color"
                    type="color"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="h-9 w-12 cursor-pointer border border-line bg-white"
                    style={{ borderRadius: 0 }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={360}
                    value={hexToHue(accent)}
                    onChange={(e) => setAccent(hueToHex(Number(e.target.value)))}
                    className="w-full"
                    aria-label="Оттенок акцента"
                  />
                </div>
              </div>

              <div>
                <div className="text-sm font-medium">Блоки кабинета</div>
                <ul className="mt-2 space-y-2">
                  {widgets.map((id) => {
                    const meta = designDashboard.widgetCatalog.find((w) => w.id === id)
                    return (
                      <li
                        key={id}
                        className="flex items-center justify-between gap-2 border border-line px-2 py-1.5 text-sm"
                        style={{ borderRadius: 0 }}
                      >
                        <span>{meta?.label ?? id}</span>
                        <button
                          type="button"
                          onClick={() => removeWidget(id)}
                          className="text-xs text-muted hover:text-accent"
                        >
                          убрать
                        </button>
                      </li>
                    )
                  })}
                </ul>

                <div className="relative mt-3">
                  <button
                    type="button"
                    onClick={() => setCatalogOpen((v) => !v)}
                    className="w-full border border-dashed border-line px-3 py-2 text-sm hover:border-ink"
                    style={{ borderRadius: 0 }}
                  >
                    + Добавить блок
                  </button>
                  {catalogOpen ? (
                    <div className="absolute left-0 right-0 z-10 mt-1 border border-line bg-white p-1 shadow-sm">
                      {designDashboard.widgetCatalog.map((w) => (
                        <button
                          key={w.id}
                          type="button"
                          disabled={widgets.includes(w.id)}
                          onClick={() => addWidget(w.id)}
                          className="block w-full px-2 py-1.5 text-left text-sm hover:bg-surface disabled:opacity-40"
                        >
                          {w.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </aside>

        <div className="space-y-4">
          <div
            ref={previewRef}
            className="grid gap-4 xl:grid-cols-[1.35fr_0.85fr]"
          >
            <div
              className="border border-line p-4"
              style={{ background: theme.bg, borderRadius: theme.radius }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-medium" style={{ color: theme.accent }}>
                  Превью кабинета
                </div>
                <span
                  className="border border-line bg-white px-2 py-0.5 text-xs text-muted"
                  style={{ borderRadius: theme.radius }}
                >
                  {designDashboard.demoNote}
                </span>
              </div>

              {widgets.includes('kpi') ? (
                <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
                  {designDashboard.kpis.map((kpi) => (
                    <div key={kpi.label} className="border p-3 text-center" style={cardStyle}>
                      <div className="text-xl font-semibold" style={{ color: theme.accent }}>
                        {kpi.value}
                      </div>
                      <div className="mt-1 text-xs text-muted">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              {chartsVisible ? (
                <div className="grid gap-4">
                  {widgets.includes('line') ? (
                    <div className="h-44 border bg-white p-2" style={cardStyle}>
                      <div className="px-1 pb-1 text-xs text-muted">Динамика чеков и участников</div>
                      <ResponsiveContainer width="100%" height="85%">
                        <LineChart data={designDashboard.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#d8dde3" />
                          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                          <YAxis tick={{ fontSize: 11 }} />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="receipts"
                            name="Чеки"
                            stroke={theme.accent}
                            isAnimationActive
                          />
                          <Line
                            type="monotone"
                            dataKey="participants"
                            name="Участники"
                            stroke="#1a1d23"
                            isAnimationActive
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {widgets.includes('bars') ? (
                      <div className="h-44 border bg-white p-2" style={cardStyle}>
                        <div className="px-1 pb-1 text-xs text-muted">Воронка участия</div>
                        <ResponsiveContainer width="100%" height="85%">
                          <BarChart data={designDashboard.funnel}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#d8dde3" />
                            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                            <YAxis tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Bar dataKey="value" name="%" fill={theme.accent} isAnimationActive />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : null}

                    {widgets.includes('pie') ? (
                      <div className="h-44 border bg-white p-2" style={cardStyle}>
                        <div className="px-1 pb-1 text-xs text-muted">Доли этапов</div>
                        <ResponsiveContainer width="100%" height="85%">
                          <PieChart>
                            <Pie
                              data={designDashboard.funnel}
                              dataKey="value"
                              nameKey="name"
                              innerRadius={35}
                              outerRadius={55}
                              isAnimationActive
                            >
                              {designDashboard.funnel.map((_, i) => (
                                <Cell
                                  key={i}
                                  fill={i === 0 ? theme.accent : PIE_COLORS[i % PIE_COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    ) : null}
                  </div>

                  {widgets.includes('table') ? (
                    <div className="border bg-white p-3 text-sm" style={cardStyle}>
                      <div className="mb-2 text-xs text-muted">Последние чеки</div>
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-line text-muted">
                            <th className="py-1 font-medium">ID</th>
                            <th className="py-1 font-medium">Статус</th>
                            <th className="py-1 font-medium">Баллы</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['#1024', 'принят', '+100'],
                            ['#1025', 'на проверке', '—'],
                            ['#1026', 'принят', '+150'],
                          ].map((row) => (
                            <tr key={row[0]} className="border-b border-line/60">
                              <td className="py-1.5">{row[0]}</td>
                              <td className="py-1.5">{row[1]}</td>
                              <td className="py-1.5" style={{ color: theme.accent }}>
                                {row[2]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div
                  className="flex h-44 items-center justify-center border border-dashed border-line bg-white text-sm text-muted"
                  style={{ borderRadius: theme.radius }}
                >
                  Прокрутите сюда — графики оживут
                </div>
              )}

              {widgets.length === 0 ? (
                <p className="mt-4 text-sm text-muted">
                  Добавьте хотя бы один блок слева, чтобы увидеть превью.
                </p>
              ) : null}
            </div>

            <QuizPreview theme={theme} />
          </div>

          <p className="text-xs text-muted">
            Цвет шаблона или кастомный акцент применяется и к админке, и к игровому экрану.
          </p>
        </div>
      </div>
    </Section>
  )
}

function hexToHue(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  if (max !== min) {
    const d = max - min
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60
        break
      case g:
        h = ((b - r) / d + 2) * 60
        break
      default:
        h = ((r - g) / d + 4) * 60
    }
  }
  return Math.round(h)
}

function hueToHex(h: number) {
  const s = 0.72
  const l = 0.48
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0
  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]
  const toHex = (n: number) =>
    Math.round((n + m) * 255)
      .toString(16)
      .padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
