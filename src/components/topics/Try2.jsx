import chessImage from '../../assets/images/chess-opening.png'
//import { colors } from '../../tokens'

const topicsData = [
  {
    id: 1,
    title: 'Tactics',
    emoji: '⚔️',
    bgColor: `#ffff`,
    progress: 20,
    topics: 10,
    lessons: 72,
    completed: 6
  },
  {
    id: 2,
    title: 'Strategy',
    emoji: '🎯',
    bgColor: '#ffff',
    progress: 60,
    topics: 10,
    lessons: 72,
    completed: 6
  },
  {
    id: 3,
    title: 'Openings',
    emoji: '📚',
    bgColor: '#ffff',
    progress: 15,
    topics: 10,
    lessons: 72,
    completed: 6
  },
  {
    id: 4,
    title: 'Middlegame Skills',
    emoji: '⚡',
    bgColor: '#ffff',
    progress: 50,
    topics: 7,
    lessons: 52,
    completed: 2
  },
  {
    id: 5,
    title: 'Endgames',
    emoji: '♔',
    bgColor: '#ffff',
    progress: 50,
    topics: 7,
    lessons: 52,
    completed: 2
  }
]

function TopicCard({ title, emoji, bgColor, progress, topics, lessons, completed, onClick }) {
  return (
    <div
      onClick={onClick}
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
        <svg className="w-5 h-5 text-text-secondary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default function Try2() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero Section */}
      <div className="bg-bg-elevated rounded-2xl overflow-hidden relative h-[120px]">
        <div className="flex items-center h-full px-8 py-6">
          {/* Left Content */}
          <div className="flex flex-col gap-2 z-10">
            <h2 className="text-text-primary text-2xl sm:text-[28px] font-semibold leading-tight tracking-[-0.5px] font-heading">
              Learn by Topic
            </h2>
            <p className="text-text-secondary text-sm font-normal leading-5 font-heading">
              Master specific chess concepts at your own pace
            </p>
          </div>

          {/* Chess Board Image */}
          <div className="hidden sm:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2">
            <img
              src={chessImage}
              alt="Chess Board"
              className="w-[180px] lg:w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="flex flex-col gap-2">
        {topicsData.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            emoji={topic.emoji}
            bgColor={topic.bgColor}
            progress={topic.progress}
            topics={topic.topics}
            lessons={topic.lessons}
            completed={topic.completed}
            onClick={() => console.log(`Clicked ${topic.title}`)}
          />
        ))}
      </div>
    </div>
  )
}
