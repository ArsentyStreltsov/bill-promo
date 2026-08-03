import { useEffect, useState } from 'react'
import { gameMechanicsSection, mechanics, type Mechanic } from '../../data/mechanics'
import { Section } from '../ui/Section'

function WheelDemo() {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const prizes = ['+50', 'Промокод', '+100', 'Ещё раз', '+20', 'Приз']

  function spin() {
    if (spinning) return
    setSpinning(true)
    setResult(null)
    window.setTimeout(() => {
      setResult(prizes[Math.floor(Math.random() * prizes.length)])
      setSpinning(false)
    }, 1200)
  }

  return (
    <div className="mt-3 rounded border border-line bg-white p-3 text-center">
      <div
        className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent text-xs font-semibold ${
          spinning ? 'animate-spin' : ''
        }`}
      >
        {result ?? 'Крутить'}
      </div>
      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="mt-3 rounded border border-line px-3 py-1.5 text-xs hover:border-ink disabled:opacity-50"
      >
        {spinning ? 'Крутится…' : 'Крутить колесо'}
      </button>
    </div>
  )
}

function ClickerDemo() {
  const [score, setScore] = useState(0)
  const [left, setLeft] = useState(10)

  return (
    <div className="mt-3 rounded border border-line bg-white p-3 text-center">
      <div className="text-2xl font-semibold text-accent">{score}</div>
      <div className="text-xs text-muted">попыток: {left}</div>
      <button
        type="button"
        disabled={left <= 0}
        onClick={() => {
          setScore((s) => s + 1)
          setLeft((l) => l - 1)
        }}
        className="mt-3 rounded border border-accent bg-accent px-4 py-2 text-xs font-medium text-white disabled:opacity-40"
      >
        Тап!
      </button>
      {left <= 0 ? (
        <button
          type="button"
          className="mt-2 block w-full text-xs text-muted underline"
          onClick={() => {
            setScore(0)
            setLeft(10)
          }}
        >
          Сбросить
        </button>
      ) : null}
    </div>
  )
}

function QuizDemo() {
  const [done, setDone] = useState(false)
  const [ok, setOk] = useState(false)

  if (done) {
    return (
      <div className="mt-3 rounded border border-line bg-white p-3 text-center text-sm">
        {ok ? 'Верно! +20 баллов' : 'Почти — в реальном промо будет подсказка бренда'}
        <button
          type="button"
          className="mt-2 block w-full text-xs text-muted underline"
          onClick={() => {
            setDone(false)
            setOk(false)
          }}
        >
          Ещё раз
        </button>
      </div>
    )
  }

  return (
    <div className="mt-3 rounded border border-line bg-white p-3">
      <p className="text-sm font-medium">Какой продукт участвует в акции?</p>
      <div className="mt-2 grid gap-2">
        {['Акционный SKU', 'Случайный товар', 'Любой чек'].map((opt, i) => (
          <button
            key={opt}
            type="button"
            onClick={() => {
              setOk(i === 0)
              setDone(true)
            }}
            className="rounded border border-line px-3 py-2 text-left text-xs hover:border-ink"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

const MEMORY_EMOJI = ['🎁', '🎫', '⭐', '🛒']

function shufflePairs() {
  const cards = [...MEMORY_EMOJI, ...MEMORY_EMOJI]
    .map((value, i) => ({ id: i + Math.random(), value }))
    .sort(() => Math.random() - 0.5)
  return cards
}

function MemoryDemo() {
  const [cards, setCards] = useState(shufflePairs)
  const [open, setOpen] = useState<number[]>([])
  const [matched, setMatched] = useState<string[]>([])
  const [lock, setLock] = useState(false)

  function reset() {
    setCards(shufflePairs())
    setOpen([])
    setMatched([])
    setLock(false)
  }

  function flip(index: number) {
    if (lock || open.includes(index) || matched.includes(cards[index].value)) return
    const next = [...open, index]
    setOpen(next)
    if (next.length === 2) {
      setLock(true)
      const [a, b] = next
      if (cards[a].value === cards[b].value) {
        setMatched((m) => [...m, cards[a].value])
        setOpen([])
        setLock(false)
      } else {
        window.setTimeout(() => {
          setOpen([])
          setLock(false)
        }, 650)
      }
    }
  }

  const done = matched.length === MEMORY_EMOJI.length

  return (
    <div className="mt-3 rounded border border-line bg-white p-3">
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, index) => {
          const shown = open.includes(index) || matched.includes(card.value)
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => flip(index)}
              className={`flex h-12 items-center justify-center rounded border text-lg ${
                shown ? 'border-accent bg-surface' : 'border-line bg-ink text-white'
              }`}
            >
              {shown ? card.value : '?'}
            </button>
          )
        })}
      </div>
      <p className="mt-2 text-center text-xs text-muted">
        {done ? 'Все пары найдены! +30 баллов' : 'Найди пары'}
      </p>
      {done ? (
        <button type="button" onClick={reset} className="mt-1 w-full text-xs text-muted underline">
          Ещё раз
        </button>
      ) : null}
    </div>
  )
}

const SLOT_SYMBOLS = ['🍒', '🍋', '⭐', '🎫', '🎁']

function SlotsDemo() {
  const [reels, setReels] = useState(['⭐', '⭐', '⭐'])
  const [spinning, setSpinning] = useState(false)
  const [msg, setMsg] = useState('Нажми «Крутить»')

  function spin() {
    if (spinning) return
    setSpinning(true)
    setMsg('Крутим…')
    let ticks = 0
    const id = window.setInterval(() => {
      setReels([
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
      ])
      ticks += 1
      if (ticks >= 8) {
        window.clearInterval(id)
        const final = [
          SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
          SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
          SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)],
        ]
        setReels(final)
        setSpinning(false)
        const win = final[0] === final[1] && final[1] === final[2]
        setMsg(win ? 'Джекпот! Промокод' : 'Почти — +10 баллов за попытку')
      }
    }, 80)
  }

  return (
    <div className="mt-3 rounded border border-line bg-white p-3 text-center">
      <div className="flex justify-center gap-2 text-2xl">
        {reels.map((s, i) => (
          <span
            key={i}
            className="flex h-12 w-12 items-center justify-center rounded border border-line bg-surface"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">{msg}</p>
      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="mt-2 rounded border border-accent bg-accent px-3 py-1.5 text-xs text-white disabled:opacity-50"
      >
        Крутить
      </button>
    </div>
  )
}

const CHEST_PRIZES = ['+50 баллов', 'Промокод −10%', 'Билет в розыгрыш', 'Ещё одна попытка']

function ChestDemo() {
  const [opened, setOpened] = useState(false)
  const [prize, setPrize] = useState('')

  function open() {
    setPrize(CHEST_PRIZES[Math.floor(Math.random() * CHEST_PRIZES.length)])
    setOpened(true)
  }

  return (
    <div className="mt-3 rounded border border-line bg-white p-3 text-center">
      <button
        type="button"
        onClick={opened ? () => setOpened(false) : open}
        className="mx-auto flex h-20 w-24 flex-col items-center justify-center rounded-md border-2 border-accent bg-surface text-3xl"
      >
        {opened ? '✨' : '🧰'}
      </button>
      <p className="mt-2 text-sm font-medium">
        {opened ? prize : 'Открой сундук'}
      </p>
      <button type="button" onClick={opened ? () => setOpened(false) : open} className="mt-2 text-xs text-muted underline">
        {opened ? 'Закрыть и снова' : 'Открыть'}
      </button>
    </div>
  )
}

function CatchDemo() {
  const [items, setItems] = useState<{ id: number; left: number }[]>([])
  const [score, setScore] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const spawn = window.setInterval(() => {
      setItems((prev) => [
        ...prev.slice(-4),
        { id: Date.now() + Math.random(), left: 10 + Math.random() * 75 },
      ])
    }, 700)
    const clear = window.setInterval(() => {
      setItems((prev) => prev.slice(1))
    }, 1800)
    return () => {
      window.clearInterval(spawn)
      window.clearInterval(clear)
    }
  }, [running])

  function catchItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id))
    setScore((s) => s + 1)
  }

  return (
    <div className="mt-3 rounded border border-line bg-white p-3">
      <div className="relative h-28 overflow-hidden rounded bg-surface">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => catchItem(item.id)}
            className="absolute top-2 text-xl transition-transform hover:scale-110"
            style={{ left: `${item.left}%` }}
          >
            🎁
          </button>
        ))}
        {!running ? (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            Нажми старт и лови подарки
          </div>
        ) : null}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="text-muted">Поймано: <span className="font-semibold text-accent">{score}</span></span>
        <button
          type="button"
          onClick={() => {
            if (running) {
              setRunning(false)
              setItems([])
            } else {
              setScore(0)
              setRunning(true)
            }
          }}
          className="rounded border border-line px-2 py-1 hover:border-ink"
        >
          {running ? 'Стоп' : 'Старт'}
        </button>
      </div>
    </div>
  )
}

function DailyDemo() {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const [claimed, setClaimed] = useState(2)
  const today = 3

  return (
    <div className="mt-3 rounded border border-line bg-white p-3">
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          const isClaimed = i < claimed
          const isToday = i === today
          return (
            <div
              key={d}
              className={`rounded border px-1 py-2 text-center text-[10px] ${
                isClaimed
                  ? 'border-accent bg-surface text-accent'
                  : isToday
                    ? 'border-ink'
                    : 'border-line text-muted'
              }`}
            >
              <div>{d}</div>
              <div className="mt-1 text-sm">{isClaimed ? '✓' : isToday ? '🎁' : '·'}</div>
            </div>
          )
        })}
      </div>
      <button
        type="button"
        disabled={claimed > today}
        onClick={() => setClaimed(today + 1)}
        className="mt-3 w-full rounded border border-accent bg-accent px-3 py-2 text-xs text-white disabled:opacity-40"
      >
        {claimed > today ? 'Подарок забран (+15)' : 'Забрать подарок за сегодня'}
      </button>
    </div>
  )
}

function Demo({ id }: { id: string }) {
  if (id === 'wheel') return <WheelDemo />
  if (id === 'clicker') return <ClickerDemo />
  if (id === 'quiz') return <QuizDemo />
  if (id === 'memory') return <MemoryDemo />
  if (id === 'slots') return <SlotsDemo />
  if (id === 'chest') return <ChestDemo />
  if (id === 'catch') return <CatchDemo />
  if (id === 'daily') return <DailyDemo />
  return null
}

function MechanicCard({ m }: { m: Mechanic }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`rounded-md border bg-white transition-all ${
        expanded ? 'border-accent sm:col-span-2 lg:col-span-2' : 'border-line'
      }`}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium">{m.title}</h3>
          {m.playable ? (
            <span className="rounded border border-accent px-1.5 py-0.5 text-[10px] uppercase text-accent">
              демо
            </span>
          ) : null}
        </div>
        {!expanded ? (
          <p className="mt-2 text-sm text-muted">{m.description}</p>
        ) : null}
      </button>

      {expanded ? (
        <div className="border-t border-line px-4 pb-4">
          <p className="pt-3 text-sm text-muted">{m.description}</p>
          <p className="mt-2 text-sm">
            <span className="text-ink">Задача:</span> {m.goal}
          </p>
          <p className="text-sm">
            <span className="text-ink">Награда:</span> {m.reward}
          </p>
          {m.playable ? (
            <Demo id={m.id} />
          ) : (
            <div className="mt-3 flex h-20 items-center justify-center rounded border border-dashed border-line bg-surface text-xs text-muted">
              превью механики
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export function GameMechanics() {
  return (
    <Section id={gameMechanicsSection.id} title={gameMechanicsSection.title}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mechanics.map((m) => (
          <MechanicCard key={m.id} m={m} />
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">{gameMechanicsSection.note}</p>
    </Section>
  )
}
