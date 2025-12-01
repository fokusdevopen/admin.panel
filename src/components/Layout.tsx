import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Ticket, 
  Tag, 
  Users, 
  Network, 
  UserCog, 
  FolderKanban, 
  CheckSquare, 
  Settings,
  Menu,
  X,
  Clock
} from 'lucide-react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface LayoutProps {
  children: React.ReactNode
}

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Дашборд' },
  { path: '/promocodes', icon: Ticket, label: 'Промокоды' },
  { path: '/promotions', icon: Tag, label: 'Акции' },
  { path: '/clients', icon: Users, label: 'Клиенты' },
  { path: '/partners', icon: Network, label: 'Партнёры' },
  { path: '/employees', icon: UserCog, label: 'Сотрудники' },
  { path: '/projects', icon: FolderKanban, label: 'Проекты' },
  { path: '/tasks', icon: CheckSquare, label: 'Задачи' },
  { path: '/settings', icon: Settings, label: 'Настройки' },
]

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const location = useLocation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Date and time bar */}
      <div className="bg-primary-600 text-white py-1 px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Clock size={14} />
          <span>{format(currentTime, 'dd MMMM yyyy, HH:mm:ss', { locale: ru })}</span>
        </div>
      </div>

      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary-600">FOKUS</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
=======
    <div className="min-h-screen bg-secondary-50 flex flex-col">
      {/* Date and time bar */}
      <div className="bg-primary-500 text-white py-2 px-6 shadow-md">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Clock size={16} />
          <span>{format(currentTime, 'dd MMMM yyyy, HH:mm:ss', { locale: ru })}</span>
        </div>
      </div>
      
      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b border-secondary-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-bold text-primary-500">FOKUS</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl hover:bg-secondary-100 transition-colors"
>>>>>>> f126881 (Initial commit)
          aria-label={sidebarOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
<<<<<<< HEAD
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out lg:transition-none flex flex-col`}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 hidden lg:block">
              <h1 className="text-2xl font-bold text-primary-600">FOKUS</h1>
              <p className="text-sm text-gray-500 mt-1">Цифровое Агентство</p>
=======
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-secondary-200 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out lg:transition-none flex flex-col shadow-xl`}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-secondary-200 hidden lg:block">
              <h1 className="text-2xl font-bold text-primary-500">FOKUS</h1>
              <p className="text-sm text-gray-600 mt-1">Цифровое Агентство</p>
>>>>>>> f126881 (Initial commit)
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
<<<<<<< HEAD
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
=======
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-primary-100 text-primary-700 font-medium shadow-md'
                            : 'text-gray-700 hover:bg-secondary-100 hover:shadow-sm'
>>>>>>> f126881 (Initial commit)
                        }`}
                      >
                        <Icon size={20} aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

<<<<<<< HEAD
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">А</span>
=======
            <div className="p-4 border-t border-secondary-200">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary-50">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">А</span>
>>>>>>> f126881 (Initial commit)
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Администратор</p>
                  <p className="text-xs text-gray-500">admin@fokus.ru</p>
                </div>
<<<<<<< HEAD
                <Link to="/settings" className="p-2 text-gray-500 hover:text-primary-600 rounded-lg">
                  <Settings size={18} />
=======
                <Link to="/settings" className="p-2 text-gray-500 hover:text-primary-600 rounded-lg hover:bg-secondary-100">
                  <Settings size={20} />
>>>>>>> f126881 (Initial commit)
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-0 min-h-screen flex flex-col">
          <div className="flex-1 p-4 lg:p-8">
            {children}
          </div>
          
          {/* Footer */}
<<<<<<< HEAD
          <footer className="border-t border-gray-200 bg-white px-4 lg:px-8 py-4 mt-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
=======
          <footer className="border-t border-secondary-200 bg-white px-4 lg:px-8 py-4 mt-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-600">
>>>>>>> f126881 (Initial commit)
              <div>
                <p>Версия 1.0.1</p>
              </div>
              <div>
                <p>Деятельность компании "Цифровое агентство FOKUS" с 2026 года</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
