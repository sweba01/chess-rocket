import { useState } from 'react'
import DurationButton from './ui/DurationButton'
import StartButton from './ui/StartButton'

// Clock Icon Component - 20x20px
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="#1a1d1f" strokeWidth="1.5" />
    <path d="M10 5V10L13 12" stroke="#1a1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Survival/Timer Icon Component - 20x20px
const SurvivalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V12L16 14" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="9" stroke="#101010" strokeWidth="1.5" />
    <path d="M12 2V4" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 20V22" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// Info Icon Component - 20x20px
const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="#6f767e" strokeWidth="1.5" />
    <path d="M10 9V14" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="6.5" r="0.75" fill="#6f767e" />
  </svg>
)

const durations = [
  { id: '1min', label: '1 min', value: 1, width: '120px' },
  { id: '3min', label: '3 min', value: 3, width: '120px' },
  { id: '5min', label: '5 min', value: 5, width: '120px' },
  { id: 'survival', label: 'Survival', value: 'survival', width: '145px', hasIcon: true }
]

export default function DurationSelector({
  selectedDuration = '3min',
  onDurationChange,
  onStart,
  onHowToPlay
}) {
  const [selected, setSelected] = useState(selectedDuration)

  const handleDurationClick = (durationId) => {
    setSelected(durationId)
    onDurationChange?.(durationId)
  }

  const handleStart = () => {
    onStart?.(selected)
  }

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-[24px]">
      {/* Card Container - 42596:6159 */}
      <div
        className="w-full bg-white border-[1.5px] border-solid rounded-[20px] sm:rounded-[25px] flex flex-col gap-4 sm:gap-6 p-4 sm:p-[30px_36px]"
        style={{
          borderColor: 'rgba(123, 123, 123, 0.1)'
        }}
      >
        {/* Header Section - 42596:6164 & 42596:6182 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          {/* Left - Title with Clock Icon */}
          <div className="flex items-center gap-[13px]">
            <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
              <ClockIcon />
            </div>
            <span className="text-[18px] sm:text-[20px] font-semibold leading-[28px] sm:leading-[32px] tracking-[-0.2px] text-[#1a1d1f] font-['Inter_Display',sans-serif]">
              Select Duration
            </span>
          </div>

          {/* Right - How to Play Link - 42596:6182 */}
          <button
            onClick={onHowToPlay}
            className="flex items-center gap-[8px] hover:opacity-70 transition-opacity self-start sm:self-auto cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 rounded-lg px-2 -mx-2"
          >
            <span className="text-[14px] sm:text-[15px] font-semibold leading-[24px] tracking-[-0.075px] text-[#6f767e] font-['Inter',sans-serif]">
              How to Play
            </span>
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <InfoIcon />
            </div>
          </button>
        </div>

        {/* Duration Buttons - 42596:6169 */}
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-2 sm:gap-[12px]">
          {durations.map((duration) => (
            <DurationButton
              key={duration.id}
              duration={duration.label}
              isSelected={selected === duration.id}
              onClick={() => handleDurationClick(duration.id)}
              width={duration.width}
              icon={duration.hasIcon ? <SurvivalIcon /> : null}
              responsive={true}
            />
          ))}
        </div>
      </div>

      {/* Start Button - 42596:6181 - Outside the card */}
      <StartButton
        text="Start Puzzle Rocket"
        onClick={handleStart}
      />
    </div>
  )
}
