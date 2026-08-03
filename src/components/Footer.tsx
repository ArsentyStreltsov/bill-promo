import { brand, footer, navItems } from '../data/content'
import { Button } from './ui/Button'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="text-lg font-semibold">{brand.name}</div>
          <p className="mt-2 text-sm text-muted">{footer.text}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
        <Button
          onClick={() =>
            document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Рассчитать промо
        </Button>
      </div>
    </footer>
  )
}
