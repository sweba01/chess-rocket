import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Logo
import chessRocketLogo from '../../assets/images/ChessRocket 1.png'

// Icons
import collapseIcon from '../../assets/icons/Collaps.png'
import sunIcon from '../../assets/icons/sun.png'
import moonIcon from '../../assets/icons/moon-01.png'

// Nav Icons
import homeIcon from '../../assets/icons/home.png'
import trainingIcon from '../../assets/icons/training.png'
import puzzlesIcon from '../../assets/icons/puzzle.png'
import communityIcon from '../../assets/icons/community.png'
import openingsIcon from '../../assets/icons/opening.png'
import coachingIcon from '../../assets/icons/coaching.png'
import arrowIcon from '../../assets/icons/Next arrow.png'

// User avatar placeholder
import userAvatar from '../../assets/images/Avatar.png'

const navItems = [
  { name: 'Home', icon: homeIcon, path: '/dashboard', hasArrow: true },
  { name: 'Training', icon: trainingIcon, path: '/training' },
  { name: 'Puzzles', icon: puzzlesIcon, path: '/puzzles' },
  { name: 'Community', icon: communityIcon, path: '/community' },
  { name: 'Openings', icon: openingsIcon, path: '/openings' },
  { name: 'Coaching', icon: coachingIcon, path: '/coaching' },
]

export default function Sidebar({ isOpen, onClose }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[283px] h-screen bg-[#fcfcfc] border-r border-[#eaecf0]
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header - Logo & Collapse */}
        <div className="flex items-center justify-between px-6 py-5">
          <img
            src={chessRocketLogo}
            alt="Chess Rocket"
            className="h-6 w-auto"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <img src={collapseIcon} alt="Collapse" className="w-6 h-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e8ecef] mx-0" />

        {/* User Profile Section */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-4">
            {/* Avatar with online indicator */}
            <div className="relative">
              <div className="w-[59px] h-[59px] rounded-full bg-[#b5e4ca] overflow-hidden">
                <img
                  src={userAvatar}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#3fdd78] border-[3px] border-white rounded-full" />
            </div>

            {/* User info */}
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-[#0f0e11] font-['Inter_Display',sans-serif]">
                Kenny 🇺🇸
              </span>
              <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-700 transition-colors">
                Edit Profile
                <span className="text-xs">✏️</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-6 space-y-2">
          {/* Current Level */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#fcfcfc] border border-[#f1f1f1] rounded-[14px]">
            <span className="text-sm font-medium text-[#727272]">Current Level</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[#101010]">12</span>
              <span>🏆</span>
            </div>
          </div>

          {/* Total Puzzles */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#fcfcfc] border border-[#f1f1f1] rounded-[14px]">
            <span className="text-sm font-medium text-[#727272]">Total Puzzles</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[#101010]">569</span>
              <span>🧩</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e8ecef] mx-0 mt-5" />

        {/* Navigation Menu */}
        <nav className="flex-1 px-6 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-full transition-colors ${
                      isActive
                        ? 'bg-[#efefef] text-[#1a1d1f]'
                        : 'text-[#6f767e] hover:bg-gray-50'
                    }`
                  }
                >
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <span className="text-[15px] font-semibold tracking-[-0.075px]">
                      {item.name}
                    </span>
                  </div>
                  {item.hasArrow && (
                    <img src={arrowIcon} alt="" className="w-2 h-3.5" />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="px-6 pb-4">
          <div className="flex items-center p-1 bg-[#f4f4f4] rounded-xl">
            <button
              onClick={() => setIsDarkMode(false)}
              className={`flex-1 flex items-center justify-center py-1 px-4 rounded-lg transition-all ${
                !isDarkMode
                  ? 'bg-[#fcfcfc] shadow-[0px_2px_4px_-4px_rgba(0,0,0,0.15)]'
                  : ''
              }`}
            >
              <img src={sunIcon} alt="Light mode" className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsDarkMode(true)}
              className={`flex-1 flex items-center justify-center py-1 px-4 rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-[#fcfcfc] shadow-[0px_2px_4px_-4px_rgba(0,0,0,0.15)]'
                  : ''
              }`}
            >
              <img src={moonIcon} alt="Dark mode" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 text-center">
          <p className="text-xs text-black/50">
            v1.0, Copyright Chess Rocket
          </p>
        </div>
      </aside>
    </>
  )
}
