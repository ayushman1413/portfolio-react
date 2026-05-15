import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme'
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={closeSidebar}
        onThemeToggle={toggleTheme}
        isDarkTheme={theme === 'dark-theme'}
      />
      <MainContent 
        onMobileNavToggle={toggleSidebar}
        isDarkTheme={theme === 'dark-theme'}
      />
    </div>
  )
}

export default App
