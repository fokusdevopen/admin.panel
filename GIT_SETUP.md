# Настройка Git и деплой на GitHub

## Шаг 1: Инициализация Git (уже выполнено ✅)

Git репозиторий уже инициализирован.

## Шаг 2: Подключение к GitHub

### Вариант A: Если репозиторий уже создан на GitHub

1. Добавьте remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/admin.panel.git
```

Замените `YOUR_USERNAME` на ваш GitHub username.

2. Проверьте подключение:
```bash
git remote -v
```

### Вариант B: Создайте новый репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Название репозитория: `admin.panel` (или любое другое)
3. **НЕ** создавайте README, .gitignore или лицензию (они уже есть)
4. Нажмите "Create repository"
5. Скопируйте URL репозитория и выполните:
```bash
git remote add origin https://github.com/YOUR_USERNAME/admin.panel.git
```

## Шаг 3: Первый коммит и пуш

```bash
# Добавить все файлы
git add .

# Создать коммит
git commit -m "Initial commit: Admin Panel"

# Отправить на GitHub
git branch -M main
git push -u origin main
```

## Шаг 4: Настройка для деплоя

### 4.1 Обновите vite.config.ts

Откройте `vite.config.ts` и замените название репозитория:

```ts
const base = '/admin.panel/'  // замените на название ВАШЕГО репозитория
```

### 4.2 Обновите package.json

Замените `YOUR_USERNAME` на ваш GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/admin.panel"
```

## Шаг 5: Деплой

```bash
# Установить зависимости (если еще не установлены)
npm install

# Собрать проект
npm run build

# Задеплоить на GitHub Pages
npm run deploy
```

## Шаг 6: Настроить GitHub Pages

1. Перейдите на GitHub в ваш репозиторий
2. Settings → Pages
3. Source: выберите `gh-pages` branch
4. Folder: `/ (root)`
5. Сохраните

## Шаг 7: Проверить сайт

Через 1-2 минуты откройте:
```
https://YOUR_USERNAME.github.io/admin.panel
```

## Проблемы?

### Если `npm run deploy` не работает:

Убедитесь, что установлен `gh-pages`:
```bash
npm install --save-dev gh-pages
```

### Если видите белую страницу:

1. Проверьте `base` в `vite.config.ts` - должно совпадать с названием репозитория
2. Проверьте консоль браузера (F12) на ошибки
3. Убедитесь, что используется `HashRouter` (уже настроено)




