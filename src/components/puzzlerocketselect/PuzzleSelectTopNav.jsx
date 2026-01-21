import { useNavigate } from 'react-router-dom'

export default function PuzzleSelectTopNav({ backTo = '/puzzles', backLabel = 'Back to Puzzles' }) {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center w-full h-[60px] sm:h-[72px] px-4 sm:px-6 lg:px-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-1 sm:gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 rounded-lg"
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
    </nav>
  )
}
