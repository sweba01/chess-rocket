// Images for level thumbnails
import chessBoardImg from '../../assets/images/Material Option.png'

// Level data
const levelsData = [
  {
    id: 1,
    title: 'Level 1: Chess Fundamentals',
    progress: 100,
    duration: '90 min',
    status: 'complete',
  },
  {
    id: 2,
    title: 'Level 2: Basic Tactics',
    progress: 100,
    duration: '90 min',
    status: 'complete',
  },
  {
    id: 3,
    title: 'Level 3: Opening Principles',
    progress: 20,
    duration: '90 min',
    status: 'current',
  },
  {
    id: 4,
    title: 'Level 4: Endgame Basics',
    progress: 0,
    duration: '90 min',
    status: 'locked',
  },
]

// Level Item Component
function LevelItem({ level }) {
  const { title, progress, duration, status } = level
  const isComplete = status === 'complete'
  const isCurrent = status === 'current'
  const isLocked = status === 'locked'

  return (
    <div
      className={`
        flex items-center justify-between p-3 rounded-[25px] transition-all duration-300 cursor-pointer
        ${isComplete ? 'bg-[#f0fdf4] border-[1.5px] border-[#32ae60] hover:shadow-md' : ''}
        ${isCurrent ? 'bg-[#f5f3ff] border-[1.5px] border-[#6366f1] hover:shadow-md' : ''}
        ${isLocked ? 'bg-[#fcfcfc] border-[1.5px] border-[rgba(123,123,123,0.1)] hover:border-gray-300' : ''}
      `}
    >
      {/* Left Section - Image and Title */}
      <div className="flex items-center gap-5 flex-1">
        {/* Level Thumbnail */}
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#a78bfa] to-[#6366f1]">
          <img
            src={chessBoardImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Level Title */}
        <p className="text-base font-semibold text-[#101010] tracking-[0.024px]">
          {title}
        </p>
      </div>

      {/* Right Section - Progress, Time, Arrow */}
      <div className="flex items-center gap-3">
        {/* Progress Section */}
        <div className="flex items-center gap-3">
          {/* Progress Bar */}
          <div className={`w-[88px] h-2 rounded overflow-hidden ${isComplete ? 'bg-[#0ebe75]' : 'bg-[rgba(5,6,15,0.05)]'}`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isComplete ? 'bg-[#0ebe75]' : isCurrent ? 'bg-[#6366f1]' : 'bg-transparent'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Status */}
          <div className="flex items-center gap-1">
            {/* Flag Icon */}
            <svg
              className={`w-4 h-4 ${isComplete ? 'text-[#0ebe75]' : 'text-[#7b7b7b]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span className={`text-xs font-medium tracking-[-0.12px] ${isComplete ? 'text-[#0ebe75]' : 'text-[#7b7b7b]'}`}>
              {isComplete ? 'Complete' : `${progress}%`}
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-[#7b7b7b] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs text-[#7b7b7b] font-medium tracking-[-0.12px]">
            {duration}
          </span>
        </div>

        {/* Chevron Arrow */}
        <div className="w-5 h-5 flex items-center justify-center text-[#7b7b7b]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function AllLevels() {
  return (
    <div className="space-y-4">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-[#1a1d1f] leading-8">
        All Levels
      </h2>

      {/* Levels List */}
      <div className="space-y-3">
        {levelsData.map((level) => (
          <LevelItem key={level.id} level={level} />
        ))}
      </div>
    </div>
  )
}
