import { useState } from 'react'

// Images
import chessBoardImg from '../../assets/images/Material Option.png'

// Icons - we'll use emojis and SVGs for status indicators
import lockIcon from '../../assets/icons/Icon-11.png'

// Training items data
const trainingItems = [
  {
    id: 1,
    title: 'Watch Training Video',
    duration: '5 min',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Solve Tactical Puzzles',
    duration: '10 min',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Take Knowledge Quiz',
    duration: '8 min',
    status: 'active',
  },
  {
    id: 4,
    title: 'Play Practice Position',
    duration: '15 min',
    status: 'locked',
  },
  {
    id: 5,
    title: 'Play Practice Position',
    duration: '15 min',
    status: 'locked',
  },
  {
    id: 6,
    title: 'Boss: Intermediate Boss',
    subtitle: 'Defeat the boss to unlock next section',
    status: 'boss',
  },
]

// Status indicator component
function StatusIndicator({ status }) {
  if (status === 'completed') {
    return (
      <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )
  }

  if (status === 'active') {
    return (
      <div className="w-6 h-6 rounded-full border-[3px] border-[#6366f1] flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
      </div>
    )
  }

  if (status === 'locked') {
    return (
      <div className="w-6 h-6 rounded-full border-2 border-[#e5e7eb]" />
    )
  }

  if (status === 'boss') {
    return (
      <div className="w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    )
  }

  return null
}

// Training item card component
function TrainingItem({ item }) {
  const isActive = item.status === 'active'
  const isCompleted = item.status === 'completed'
  const isLocked = item.status === 'locked'
  const isBoss = item.status === 'boss'

  return (
    <div
      className={`
        flex items-center justify-between p-4 rounded-2xl transition-all duration-300
        ${isActive ? 'border-2 border-[#6366f1] bg-white shadow-[0_4px_20px_rgba(99,102,241,0.15)]' : ''}
        ${isCompleted ? 'bg-white border border-[#e5e7eb] hover:border-[#22c55e]/30 hover:shadow-sm' : ''}
        ${isLocked ? 'bg-[#f9fafb] border border-[#e5e7eb] opacity-70' : ''}
        ${isBoss ? 'bg-white border-2 border-[#fecaca] hover:border-[#ef4444]/50' : ''}
      `}
    >
      <div className="flex items-center gap-4">
        <StatusIndicator status={item.status} />
        <div className="flex flex-col">
          <span className={`
            text-[15px] font-semibold tracking-[-0.2px]
            ${isLocked ? 'text-[#9ca3af]' : 'text-[#1a1d1f]'}
            ${isBoss ? 'text-[#1a1d1f]' : ''}
          `}>
            {item.title}
          </span>
          {item.subtitle ? (
            <span className="text-xs text-[#6b7280] mt-0.5">{item.subtitle}</span>
          ) : (
            <span className={`text-xs ${isLocked ? 'text-[#9ca3af]' : 'text-[#6b7280]'}`}>
              {item.duration}
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div>
        {isCompleted && (
          <button className="flex items-center gap-1.5 text-[#22c55e] text-sm font-medium hover:text-[#16a34a] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Replay
          </button>
        )}

        {isActive && (
          <button className="px-5 py-2 bg-[#6366f1] text-white text-sm font-semibold rounded-full hover:bg-[#4f46e5] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/30 active:scale-95">
            START
          </button>
        )}

        {isLocked && (
          <div className="w-8 h-8 flex items-center justify-center text-[#9ca3af]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}

        {isBoss && (
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#ef4444] text-white text-sm font-semibold rounded-full hover:bg-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#ef4444]/30 active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            START
          </button>
        )}
      </div>
    </div>
  )
}

export default function TrainingProgram() {
  const [progress] = useState(20)

  return (
    <div className="relative overflow-hidden rounded-[25px] bg-[#6366f1]">
      {/* Decorative background elements for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#818cf8] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4f46e5] rounded-full blur-2xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      {/* Header Label */}
      <div className="relative z-10 flex justify-center pt-4 pb-3">
        <span className="text-sm font-medium text-white/90 tracking-wide">
          Training Program
        </span>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 mx-3 mb-3 bg-white rounded-[20px] overflow-hidden shadow-xl">
        {/* Training Info Section */}
        <div className="p-5 sm:p-6 border-b border-[#f1f1f1]">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Chess Board Image */}
            <div className="w-full sm:w-[120px] h-[100px] sm:h-[90px] rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#a78bfa] to-[#6366f1]">
              <img
                src={chessBoardImg}
                alt="Chess Board"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Training Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1d1f] tracking-[-0.3px] mb-1">
                Rating Training Regiment
              </h3>
              <p className="text-sm text-[#6b7280] mb-3 leading-relaxed">
                Progress through all rating levels from 500 to mastery
              </p>

              {/* Progress Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Progress Bar */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-1 h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#6b7280]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    {progress}%
                  </div>
                </div>

                {/* Level Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f9fafb] rounded-full">
                  <svg className="w-4 h-4 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm font-medium text-[#1a1d1f]">Level 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Items List */}
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 max-h-[400px] overflow-y-auto">
          {trainingItems.map((item) => (
            <TrainingItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
