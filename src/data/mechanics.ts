export type Mechanic = {
  id: string
  title: string
  description: string
  goal: string
  reward: string
  playable?: boolean
}

export const gameMechanicsSection = {
  id: 'mechanics',
  title: 'Мини-игры, которые возвращают участников',
  note: 'Часть механик можно потыкать прямо здесь. Остальные — из библиотеки или под заказ.',
}

export const mechanics: Mechanic[] = [
  {
    id: 'wheel',
    title: 'Колесо фортуны',
    description: 'Попытка после чека: баллы, промокод или доп. шанс.',
    goal: 'Быстрый выигрыш и повтор',
    reward: 'Баллы, промокод',
    playable: true,
  },
  {
    id: 'clicker',
    title: 'Кликер',
    description: 'Короткие сессии с лимитом попыток.',
    goal: 'Ежедневные возвраты',
    reward: 'Валюта, попытки',
    playable: true,
  },
  {
    id: 'quiz',
    title: 'Викторина',
    description: 'Знакомство с продуктом за правильные ответы.',
    goal: 'Обучение бренду',
    reward: 'Баллы',
    playable: true,
  },
  {
    id: 'memory',
    title: 'Карточки на память',
    description: 'Пары с продуктами и персонажами.',
    goal: 'Лёгкое вовлечение',
    reward: 'Баллы, промокоды',
    playable: true,
  },
  {
    id: 'slots',
    title: 'Игровой автомат',
    description: 'Моментальный результат после попытки.',
    goal: 'Быстрая обратная связь',
    reward: 'Промокоды',
    playable: true,
  },
  {
    id: 'chest',
    title: 'Открытие сундука',
    description: 'Эмоциональный момент награды.',
    goal: 'Эффект сюрприза',
    reward: 'Случайный приз',
    playable: true,
  },
  {
    id: 'catch',
    title: 'Ловля предметов',
    description: 'Простая механика для широкой аудитории.',
    goal: 'Лёгкий вход',
    reward: 'Баллы, призы',
    playable: true,
  },
  {
    id: 'daily',
    title: 'Ежедневный подарок',
    description: 'Привычка заходить каждый день.',
    goal: 'Регулярный возврат',
    reward: 'Ежедневный бонус',
    playable: true,
  },
  {
    id: 'match3',
    title: 'Три в ряд',
    description: 'Комбинации для удержания внимания.',
    goal: 'Время в промо',
    reward: 'Баллы, билеты',
  },
  {
    id: 'runner',
    title: 'Раннер',
    description: 'Забег со сбором бонусов бренда.',
    goal: 'Активная аудитория',
    reward: 'Баллы',
  },
  {
    id: 'puzzle',
    title: 'Пазл',
    description: 'Сборка изображения бренда.',
    goal: 'Знакомство с визуалом',
    reward: 'Баллы',
  },
  {
    id: 'instant',
    title: 'Моментальный розыгрыш',
    description: 'Результат сразу после действия.',
    goal: 'Мгновенный фидбек',
    reward: 'Приз или утешительный бонус',
  },
]
