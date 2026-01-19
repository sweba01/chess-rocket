import { useState } from 'react'

// Images
import chessBoardImg from '../../assets/images/Material Option.png'
import bossBtnIcon from '../../assets/images/boss-btn.png'

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
      <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )
  }

  if (status === 'active') {
    return (
      <div className="w-6 h-6 rounded-full border-[3px] border-[#6366f1] flex items-center justify-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#6366f1]" />
      </div>
    )
  }

  if (status === 'locked') {
    return (
      <div className="w-6 h-6 rounded-full border-2 border-[#e5e7eb] flex-shrink-0" />
    )
  }

  if (status === 'boss') {
    return (
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border border-[#ffb86a] opacity-80"
        style={{ backgroundImage: 'linear-gradient(135deg, #ff8904 0%, #e7000b 100%)' }}
      >
        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
        flex items-center justify-between px-4 py-4 rounded-[14px] transition-all duration-300
        ${isActive ? 'border-2 border-[#6366f1] bg-[#fcfcfc] shadow-sm' : ''}
        ${isCompleted ? 'bg-[#f0fdf4] border border-[#afdfc1]' : ''}
        ${isLocked ? 'bg-[#fcfcfc] border border-[#eae7ee] shadow-sm' : ''}
        ${isBoss ? 'bg-[#fcfcfc] border border-[#ff8904] shadow-sm' : ''}
      `}
    >
      <div className="flex items-center gap-4">
        <StatusIndicator status={item.status} />
        <div className="flex flex-col gap-0.5">
          <span className={`
            text-base font-semibold leading-6
            ${isActive ? 'text-[#4f39f6]' : ''}
            ${isCompleted ? 'text-[#1a1d1f]' : ''}
            ${isLocked || isBoss ? 'text-[#6f767e]' : ''}
          `}>
            {item.title}
          </span>
          <span className="text-xs text-[#7b7b7b] font-medium tracking-[-0.12px]">
            {item.subtitle || item.duration}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex-shrink-0">
        {isCompleted && (
          <button className="flex items-center gap-1.5 text-[#008236] text-xs font-semibold hover:opacity-80 transition-opacity">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Replay
          </button>
        )}

        {isActive && (
          <button className="px-5 py-2 bg-[#6366f1] text-white text-xs font-semibold rounded-full uppercase tracking-[0.6px] hover:bg-[#4f46e5] transition-all duration-300 shadow-[0_0_22px_rgba(5,6,15,0.16)]">
            Start
          </button>
        )}

        {isLocked && (
          <div className="w-6 h-6 flex items-center justify-center text-[#94a3b8]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}

        {isBoss && (
          <button
            className="flex items-center gap-1.5 px-4 py-2 text-white text-xs font-semibold rounded-full uppercase tracking-[0.6px] transition-all duration-300 hover:opacity-90"
            style={{ backgroundImage: 'linear-gradient(159deg, #ff8904 0%, #e7000b 100%)' }}
          >
            <img src={bossBtnIcon} alt="" className="w-4 h-4" />
            Start
          </button>
        )}
      </div>
    </div>
  )
}

export default function CurrentLevelCard() {
  const [progress] = useState(20)

  return (
    <div className="relative">
      {/* Current Level Label */}
      <div className="bg-[#6366f1] rounded-t-[25px] py-2 px-6">
        <p className="text-center text-white text-xs font-medium tracking-wide">
          Current Level
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-[#fcfcfc] rounded-b-[25px] border-[1.5px] border-t-0 border-[rgba(123,123,123,0.1)] overflow-hidden">
        {/* Level Info Section */}
        <div className="p-3 sm:p-4 flex flex-col sm:flex-row gap-4">
          {/* Chess Board Image */}
          <div className="w-[120px] sm:w-[140px] h-[80px] sm:h-[90px] rounded-[16px] overflow-hidden flex-shrink-0 bg-[#f4f2ef]">
            <img
              src={chessBoardImg}
              alt="Chess Board"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Level Details */}
          <div className="flex flex-col justify-center gap-2 py-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1a1d1f] tracking-[-0.24px] leading-8">
              Level 3: Opening Principles
            </h3>
            <p className="text-xs text-[#7b7b7b] font-medium opacity-80 tracking-[-0.12px]">
              Progress through all rating levels from 500 to mastery
            </p>

            {/* Progress Section */}
            <div className="flex items-center gap-3 mt-1">
              {/* Progress Bar */}
              <div className="w-[88px] h-2 bg-[rgba(5,6,15,0.05)] rounded overflow-hidden">
                <div
                  className="h-full bg-[#6366f1] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Progress Percentage */}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#7b7b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span className="text-xs text-[#7b7b7b] font-medium">{progress}%</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#7b7b7b] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-[#7b7b7b] font-medium">90 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Training Items List */}
        <div className="px-3 sm:px-4 pb-4 space-y-3">
          {trainingItems.map((item) => (
            <TrainingItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
