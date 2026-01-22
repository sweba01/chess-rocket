import { useNavigate } from 'react-router-dom'
import avatarImg from '../../assets/images/Avatar.png'

export default function TopicsTopNav() {
  const navigate = useNavigate()
{/* this part is created through figma link to claude code */}
  return (
    <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-10 py-6">
      {/* Left - Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold leading-8 text-[#fbfeff] font-['Inter',sans-serif]">
        Training Program
      </h1>

      {/* Center - Tab Switcher */}
      <div className="hidden sm:flex items-center gap-2">
        {/* Level Climb Tab - Inactive */}
        <button
          onClick={() => navigate('/training')}
          className="flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold bg-[#1a1d1f] text-[#6f767e] hover:bg-[#2a2d2f] transition-colors"
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

        {/* Topics Tab - Active */}
        <button
          className="flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold bg-[#7a7cf3] text-white"
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

      {/* Mobile Tab Switcher */}
      <div className="flex sm:hidden items-center gap-1">
        <button
          onClick={() => navigate('/training')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1d1f] text-[#6f767e]"
        >
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
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7a7cf3] text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Right - Profile Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#b5e4ca] cursor-pointer hover:border-[#7a7cf3] transition-colors">
        <img
          src={avatarImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  )
}
