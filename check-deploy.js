<<<<<<< HEAD
// Скрипт для проверки конфигурации перед деплоем
import { readFileSync } from 'fs'

console.log('🔍 Проверка конфигурации для деплоя...\n')

try {
  // Проверка package.json
  const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'))
  const homepage = packageJson.homepage
  
  if (homepage.includes('YOUR_USERNAME')) {
    console.error('❌ ОШИБКА: В package.json не обновлен YOUR_USERNAME!')
    console.error('   Замените YOUR_USERNAME на ваш GitHub username в package.json\n')
    process.exit(1)
  }
  
  console.log('✅ package.json: homepage =', homepage)
  
  // Проверка vite.config.ts
  const viteConfig = readFileSync('vite.config.ts', 'utf-8')
  const baseMatch = viteConfig.match(/const base = ['"]([^'"]+)['"]/)
  
  if (baseMatch) {
    const base = baseMatch[1]
    console.log('✅ vite.config.ts: base =', base)
    
    if (base === '/admin.panel/') {
      console.warn('⚠️  ВНИМАНИЕ: base всё ещё "/admin.panel/"')
      console.warn('   Убедитесь, что это соответствует названию вашего репозитория!\n')
    }
  } else {
    console.error('❌ Не удалось найти base в vite.config.ts')
    process.exit(1)
  }
  
  console.log('\n✅ Конфигурация выглядит правильно!')
  console.log('📦 Теперь выполните: npm run build && npm run deploy\n')
  
} catch (error) {
  console.error('❌ Ошибка при проверке:', error.message)
  process.exit(1)
}



=======
// Скрипт для проверки конфигурации перед деплоем
import { readFileSync } from 'fs'

console.log('🔍 Проверка конфигурации для деплоя...\n')

try {
  // Проверка package.json
  const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'))
  const homepage = packageJson.homepage
  
  if (homepage.includes('YOUR_USERNAME')) {
    console.error('❌ ОШИБКА: В package.json не обновлен YOUR_USERNAME!')
    console.error('   Замените YOUR_USERNAME на ваш GitHub username в package.json\n')
    process.exit(1)
  }
  
  console.log('✅ package.json: homepage =', homepage)
  
  // Проверка vite.config.ts
  const viteConfig = readFileSync('vite.config.ts', 'utf-8')
  const baseMatch = viteConfig.match(/const base = ['"]([^'"]+)['"]/)
  
  if (baseMatch) {
    const base = baseMatch[1]
    console.log('✅ vite.config.ts: base =', base)
    
    if (base === '/admin.panel/') {
      console.warn('⚠️  ВНИМАНИЕ: base всё ещё "/admin.panel/"')
      console.warn('   Убедитесь, что это соответствует названию вашего репозитория!\n')
    }
  } else {
    console.error('❌ Не удалось найти base в vite.config.ts')
    process.exit(1)
  }
  
  console.log('\n✅ Конфигурация выглядит правильно!')
  console.log('📦 Теперь выполните: npm run build && npm run deploy\n')
  
} catch (error) {
  console.error('❌ Ошибка при проверке:', error.message)
  process.exit(1)
}



>>>>>>> f126881 (Initial commit)
