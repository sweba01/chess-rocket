import { colors } from '../../tokens'

export default function LessonCard({
  title,
  lessonCount,
  completedCount,
  totalCount,
  progress = 0,
  isCompleted = false,
  onClick
}) {
  // Determine progress bar color based on completion
  const getProgressColor = () => {
    if (progress === 100) return 'bg-[#3fdd78]' // Green for completed
    if (progress > 0) return 'bg-brand-purple' // Purple for in-progress
    return 'bg-bg-elevated' // Gray for not started
  }

  return (
    <div
      onClick={onClick}
      className="bg-bg-card rounded-2xl p-5 cursor-pointer hover:bg-bg-card-hover transition-colors flex flex-col gap-3"
    >
      {/* Top Row: Icon, Title, Lessons, Start Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Checkmark Icon */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isCompleted ? 'bg-[#3fdd78]' : 'bg-bg-elevated'
          }`}>
            {isCompleted ? (
              <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-text-secondary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
          </div>

          {/* Title & Lesson Count */}
          <div className="flex flex-col">
            <span className="text-text-primary text-base font-semibold font-body">
              {title}
            </span>
            <span className="text-text-secondary text-xs font-medium">
              {lessonCount} lessons
            </span>
          </div>
        </div>

        {/* Start Button */}
        <button className="bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
          START
        </button>
      </div>

      {/* Bottom Row: Progress Bar & Percentage */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-text-secondary text-xs font-medium">
            {completedCount}/{totalCount} completed
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Progress Bar */}
          <div className="w-20 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${getProgressColor()}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-text-secondary text-xs font-medium w-8 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}
