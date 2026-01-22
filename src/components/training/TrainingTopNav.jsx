import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatarImg from '../../assets/images/Avatar.png'

export default function TrainingTopNav() {
  const [activeTab, setActiveTab] = useState('levelClimb')
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'topics') {
      navigate('/topics')
    } else {
      navigate('/training')
    }
  }

  return (
    <nav className="flex items-center justify-between w-full h-[72px] px-4 sm:px-6 lg:px-10 py-6">
      {/* Left - Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold leading-8 text-[#1a1d1f] font-['Inter',sans-serif]">
        Training Program
      </h1>

      {/* Center - Tab Switcher */}
      <div className="hidden sm:flex items-center gap-2">
        {/* Level Climb Tab */}
        <button
          onClick={() => handleTabClick('levelClimb')}
          className={`
            flex items-center gap-2 h-10 pl-5 pr-4 rounded-full text-sm font-semibold font-['Manrope',sans-serif] transition-all duration-300
            ${activeTab === 'levelClimb'
              ? 'bg-[#7a7cf3] text-white'
              : 'bg-[#1a1d1f] text-[#6f767e] hover:bg-[#2a2d2f]'
            }
          `}
        >
          {/* Rocket Icon */}
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2.5C10 2.5 8.5 5 8.5 8.5C8.5 10.5 9 12 10 13.5C11 12 11.5 10.5 11.5 8.5C11.5 5 10 2.5 10 2.5Z"
              fill="currentColor"
            />
            <path
              d="M6.5 10C5 11 4 12.5 4 14.5C4 16 5 17 6.5 17C7.5 17 8.5 16.5 9 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.5 10C15 11 16 12.5 16 14.5C16 16 15 17 13.5 17C12.5 17 11.5 16.5 11 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 13.5V17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Level Climb
        </button>

        {/* Topics Tab */}
        <button
          onClick={() => handleTabClick('topics')}
          className={`
            flex items-center gap-2 h-10 pl-6 pr-4 rounded-full text-sm font-semibold font-['Manrope',sans-serif] transition-all duration-300
            ${activeTab === 'topics'
              ? 'bg-[#7a7cf3] text-white'
              : 'bg-[#1a1d1f] text-[#6f767e] hover:bg-[#2a2d2f]'
            }
          `}
        >
          {/* Grid/Topics Icon */}
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Topics
        </button>
      </div>

      {/* Right - Profile Avatar */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#b5e4ca] cursor-pointer hover:border-[#7a7cf3] transition-colors">
          <img
            src={avatarImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}
