import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ onNavigate }) {
  const [activeLink, setActiveLink] = useState('home')

  const navItems = ['Home', 'About', 'Gallery', 'Contact']

  const handleNavClick = (item) => {
    const id = item.toLowerCase()
    setActiveLink(id)
    onNavigate(id)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-link ${activeLink === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
