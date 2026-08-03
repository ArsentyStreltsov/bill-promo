export const brand = {
  name: 'Bill Promo',
  tagline: 'Чековые промоакции на готовой платформе',
}

export const navItems = [
  { id: 'features', label: 'Как работает' },
  { id: 'mechanics', label: 'Механики' },
  { id: 'dashboard', label: 'Дизайн и кабинет' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'configurator', label: 'Собрать промо' },
  { id: 'faq', label: 'FAQ' },
] as const

export const hero = {
  title: 'Чековые промоакции на готовой платформе',
  subtitle:
    'Собираем промо под задачи бренда: чеки, мини-игры, баллы, промокоды и призы — в Telegram, ВКонтакте или на сайте.',
  note: 'Готовые модули + адаптация дизайна. При необходимости доработаем механику под проект.',
  primaryCta: 'Рассчитать стоимость промо',
  secondaryCta: 'Как это работает',
  screens: [
    'Загрузка чека',
    'Мини-игра',
    'Баланс баллов',
    'Каталог призов',
    'Выигрыш промокода',
  ],
  labels: [
    'Telegram Mini App',
    'VK Mini Apps',
    'Проверка чеков',
    'Игровые механики',
    'Промокоды и призы',
  ],
}

/** Объединённый блок: продукт + наш процесс + путь участника */
export const platformFlow = {
  id: 'features',
  title: 'Как запускается промо',
  subtitle:
    'Вы приходите с задачей — мы собираем акцию из готовых модулей, адаптируем под бренд и ведём до отчёта. Самостоятельно собирать конструктор не нужно.',
  pillars: [
    { title: 'Готовые модули', text: 'Чеки, игры, баллы, призы' },
    { title: 'Сборка под задачу', text: 'Сценарий и условия акции' },
    { title: 'Запуск под ключ', text: 'Дизайн, тест, сопровождение' },
  ],
  agencySteps: [
    { title: 'Бриф', text: 'Цели и сроки' },
    { title: 'Механика', text: 'Набор модулей' },
    { title: 'Сборка', text: 'Дизайн и настройка' },
    { title: 'Запуск', text: 'Публикация' },
    { title: 'Отчёт', text: 'Аналитика' },
  ],
  participantSteps: [
    { title: 'Узнаёт', text: 'Реклама, QR, POS' },
    { title: 'Заходит', text: 'Telegram, VK, сайт' },
    { title: 'Подтверждает', text: 'Чек или промокод' },
    { title: 'Участвует', text: 'Игры и баллы' },
    { title: 'Получает', text: 'Призы и розыгрыш' },
  ],
}

export const platforms = {
  title: 'Где запускаем',
  note: 'Для нестандартных площадок оценим отдельную интеграцию.',
  cards: [
    {
      title: 'Telegram Mini App',
      items: ['быстрый вход', 'бот и уведомления', 'удобно для мобильной аудитории'],
    },
    {
      title: 'VK Mini Apps',
      items: ['внутри ВКонтакте', 'трафик из VK', 'связь с сообществом'],
    },
    {
      title: 'Отдельный сайт',
      items: ['по ссылке', 'свой домен', 'без привязки к соцсети'],
    },
  ],
}

export const designDashboard = {
  id: 'dashboard',
  title: 'Дизайн промо и кабинет клиента',
  subtitle:
    'Можно стартовать с готового шаблона или собрать кастомный вид кабинета: блоки, акценты и графики настраиваются под бренд.',
  demoNote: 'Данные и превью демонстрационные',
  templates: [
    {
      id: 'fresh',
      label: 'Fresh Retail',
      accent: '#16a34a',
      bg: '#f0fdf4',
      surface: '#ffffff',
    },
    {
      id: 'night',
      label: 'Night Promo',
      accent: '#2563eb',
      bg: '#eff6ff',
      surface: '#ffffff',
    },
    {
      id: 'festival',
      label: 'Festival Brand',
      accent: '#db2777',
      bg: '#fdf2f8',
      surface: '#ffffff',
    },
  ],
  widgetCatalog: [
    { id: 'kpi', label: 'KPI-карточки' },
    { id: 'line', label: 'Динамика чеков' },
    { id: 'bars', label: 'Воронка' },
    { id: 'pie', label: 'Доли этапов' },
    { id: 'table', label: 'Таблица чеков' },
  ],
  chartData: [
    { name: 'Пн', participants: 120, receipts: 80 },
    { name: 'Вт', participants: 150, receipts: 110 },
    { name: 'Ср', participants: 180, receipts: 140 },
    { name: 'Чт', participants: 160, receipts: 130 },
    { name: 'Пт', participants: 220, receipts: 190 },
    { name: 'Сб', participants: 260, receipts: 210 },
    { name: 'Вс', participants: 200, receipts: 160 },
  ],
  funnel: [
    { name: 'Зашли', value: 100 },
    { name: 'Чек', value: 64 },
    { name: 'Игра', value: 48 },
    { name: 'Приз', value: 31 },
  ],
  kpis: [
    { value: 'X+', label: 'промоакций' },
    { value: 'XXX 000+', label: 'участников' },
    { value: 'XXX 000+', label: 'чеков' },
    { value: 'XX+', label: 'игр' },
  ],
}

export const promoConfigurator = {
  id: 'configurator',
  title: 'Соберите пример промо',
  subtitle: 'Короткий мастер: выберите условия и оставьте контакт — подготовим расчёт.',
  note: 'Демонстрационный сценарий. Не рассчитывает стоимость автоматически.',
  steps: [
    {
      id: 'platform',
      title: 'Где запускаем',
      options: ['Telegram', 'ВКонтакте', 'Сайт', 'Несколько площадок'],
    },
    {
      id: 'proof',
      title: 'Что подтверждает участие',
      options: ['Чек', 'Чек + SKU', 'Промокод', 'Смешанный сценарий'],
    },
    {
      id: 'engage',
      title: 'Как вовлекаем',
      options: ['Мини-игры', 'Ежедневные активности', 'Рефералка', 'Баллы'],
    },
    {
      id: 'reward',
      title: 'Что получает участник',
      options: ['Промокоды', 'Каталог призов', 'Розыгрыш', 'Главный приз'],
    },
  ],
  contactStep: {
    title: 'Контакты для расчёта',
    fields: [
      { id: 'name', label: 'Имя', placeholder: 'Как к вам обращаться' },
      { id: 'company', label: 'Компания', placeholder: 'Компания или бренд' },
      { id: 'contact', label: 'Контакт', placeholder: 'Телефон, Telegram или email' },
    ],
  },
  success: 'Спасибо! Мы получили задачу и подготовим вопросы для расчёта.',
}

export const formFields = {
  name: 'Имя',
  company: 'Компания',
  contact: 'Телефон, Telegram или email',
  task: 'Примерная задача',
  deadline: 'Желаемый срок запуска',
  comment: 'Комментарий (необязательно)',
  submit: 'Отправить',
}

export const finalCta = {
  title: 'Обсудим ваше промо',
  text: 'Предложим механику, модули и смету.',
  button: 'Получить предложение',
  formHint: 'Расскажите задачу — предложим механику и подготовим расчёт.',
  success: 'Спасибо! Мы получили задачу и подготовим вопросы для расчёта проекта.',
}

export const footer = {
  text: 'Готовая технологическая платформа для запуска чековых промоакций под задачу бренда.',
}
