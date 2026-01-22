import { useState } from 'react'
import { colors } from '../../tokens'
import LessonCard from './LessonCard'

// Sample lessons data for Tactics
const lessonsData = [
  {
    id: 1,
    title: 'Forks',
    lessonCount: 8,
    completedCount: 8,
    totalCount: 8,
    progress: 100,
    isCompleted: true
  },
  {
    id: 2,
    title: 'Pins',
    lessonCount: 7,
    completedCount: 5,
    totalCount: 7,
    progress: 71,
    isCompleted: false
  },
  {
    id: 3,
    title: 'Skewers',
    lessonCount: 6,
    completedCount: 3,
    totalCount: 6,
    progress: 50,
    isCompleted: false
  },
  {
    id: 4,
    title: 'Discovered attacks',
    lessonCount: 7,
    completedCount: 0,
    totalCount: 7,
    progress: 0,
    isCompleted: false
  },
  {
    id: 5,
    title: 'Discovered checks',
    lessonCount: 6,
    completedCount: 0,
    totalCount: 6,
    progress: 0,
    isCompleted: false
  },
  {
    id: 6,
    title: 'Double checks',
    lessonCount: 5,
    completedCount: 0,
    totalCount: 5,
    progress: 0,
    isCompleted: false
  },
  {
    id: 7,
    title: 'X-rays',
    lessonCount: 6,
    completedCount: 0,
    totalCount: 6,
    progress: 0,
    isCompleted: false
  },
  {
    id: 8,
    title: 'Deflections',
    lessonCount: 7,
    completedCount: 0,
    totalCount: 7,
    progress: 0,
    isCompleted: false
  }
]

export default function TopicExpanded({
  title = 'Tactics',
  emoji = '⚔️',
  bgColor = colors.accent.blue,
  progress = 20,
  topics = 10,
  lessons = 72,
  completed = 6,
  isExpanded: initialExpanded = true,
  onToggle
}) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    onToggle?.(!isExpanded)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Topic Header */}
      <div
        onClick={handleToggle}
        className="bg-bg-card rounded-2xl p-6 cursor-pointer hover:bg-bg-card-hover transition-colors"
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
              <h3 className="text-text-primary text-xl font-semibold font-body tracking-tight">
                {title}
              </h3>

              {/* Progress & Stats Row */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Progress Bar */}
                <div className="flex items-center gap-2">
                  <div className="w-[88px] h-2 bg-bg-elevated rounded">
                    <div
                      className="h-full bg-brand-purple-hover rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  {/* Flag Icon & Percentage */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 3H11L9 6L11 9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-text-secondary text-xs font-medium">{progress}%</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-text-secondary text-xs font-medium">
                    {topics} topics • {lessons} lessons • {completed} completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Chevron */}
          <svg
            className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Expanded Lessons Grid */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-in fade-in duration-300">
          {lessonsData.map((lesson) => (
            <LessonCard
              key={lesson.id}
              title={lesson.title}
              lessonCount={lesson.lessonCount}
              completedCount={lesson.completedCount}
              totalCount={lesson.totalCount}
              progress={lesson.progress}
              isCompleted={lesson.isCompleted}
              onClick={() => console.log(`Starting ${lesson.title}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
