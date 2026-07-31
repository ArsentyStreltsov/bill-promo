# Bill Promo — прототип лендинга

Структурный каркас одностраничного лендинга конструктора чековых промоакций.

## Запуск

```bash
npm install
npm run dev
```

Сборка: `npm run build`

## Структура

- `src/data/` — тексты, механики, кейсы, статистика, FAQ (легко заменить)
- `src/components/sections/` — блоки лендинга
- `src/components/` — шапка, футер, модалка заявки

Бренд задаётся в `src/data/content.ts` (`brand.name`).
