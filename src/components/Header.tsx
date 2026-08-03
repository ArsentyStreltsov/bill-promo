import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navItems } from '../data/content'
import { Button } from './ui/Button'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function goTo(id: string) {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="text-base font-semibold tracking-tight text-ink">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className="text-sm text-muted hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" onClick={() => goTo('configurator')}>
            Рассчитать промо
          </Button>
          <button
            type="button"
            className="rounded-md border border-line p-2 lg:hidden"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="rounded-md px-2 py-2 text-left text-sm hover:bg-surface"
              >
                {item.label}
              </button>
            ))}
            <Button className="mt-1 w-full sm:hidden" onClick={() => goTo('configurator')}>
              Рассчитать промо
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
