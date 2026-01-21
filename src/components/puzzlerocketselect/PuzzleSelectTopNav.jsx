import { useNavigate } from 'react-router-dom'
import avatarImg from '../../assets/images/Avatar.png'

export default function PuzzleSelectTopNav({ backTo = '/puzzles', backLabel = 'Back to Puzzles' }) {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between w-full h-[60px] sm:h-[72px] px-4 sm:px-6 lg:px-10">
      {/* Left - Back Button */}
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-1 sm:gap-2 group"
      >
        {/* Back Arrow Icon */}
        <div className="w-[29px] h-[29px] flex items-center justify-center rounded-lg transition-colors group-hover:bg-[#f4f4f4]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1a1d1f]"
          >
            <path
              d="M10.625 4.25L6.375 8.5L10.625 12.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Back Label */}
        <span className="text-base sm:text-xl font-semibold text-[#1a1d1f] font-['Inter',sans-serif] group-hover:text-[#6366f1] transition-colors">
          {backLabel}
        </span>
      </button>

      {/* Right - Profile Avatar */}
      <div className="relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#b5e4ca] cursor-pointer hover:border-[#6366f1] transition-colors">
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
