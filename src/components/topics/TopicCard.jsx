export default function TopicCard({
  title,
  emoji,
  bgColor,
  progress = 20,
  topics = 10,
  lessons = 72,
  completed = 6,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a1d1f] rounded-2xl p-6 cursor-pointer hover:bg-[#222528] transition-colors"
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: bgColor }}
          >
            {emoji}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            {/* Title */}
            <h3 className="text-[#fcfcfc] text-xl font-semibold font-['Manrope',sans-serif] tracking-tight">
              {title}
            </h3>

            {/* Progress & Stats Row */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                <div className="w-[88px] h-2 bg-[#272b30] rounded">
                  <div
                    className="h-full bg-[#6366f1] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Flag Icon & Percentage */}
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#6f767e]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 3H11L9 6L11 9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#7b7b7b] text-xs font-medium">{progress}%</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#6f767e]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className="text-[#6f767e] text-xs font-medium">
                  {topics} topics • {lessons} lessons • {completed} completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chevron */}
        <svg className="w-5 h-5 text-[#6f767e]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
