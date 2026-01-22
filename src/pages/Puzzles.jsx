import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'
import PuzzlesTopNav from '../components/puzzles/PuzzlesTopNav'
import PuzzleHero from '../components/puzzles/PuzzleHero'
import PuzzleCard from '../components/puzzles/PuzzleCard'
import PuzzleRankings from '../components/puzzles/PuzzleRankings'

// Puzzle modes data
const puzzleModes = [
  {
    id: 1,
    title: 'Puzzle Rocket',
    description: 'Race against time! Solve puzzles before the clock runs out. 3 strikes and you\'re out.',
    icon: '🚀',
    iconBg: '#fff3e0'
  },
  {
    id: 2,
    title: 'Puzzle Tempo',
    description: 'Master tactical themes at your own pace. Build your rating from 0 to 3500.',
    icon: '⏱️',
    iconBg: '#e8f5e9'
  },
  {
    id: 3,
    title: 'Calculation Puzzles',
    description: 'Train deep calculation with no time pressure. Choose your mode and rating range.',
    icon: '🧮',
    iconBg: '#e3f2fd'
  },
  {
    id: 4,
    title: 'Guess the Master Moves',
    description: 'Solve puzzles to increase your rating. Each correct solve boosts your rating!',
    icon: '🎯',
    iconBg: '#fce4ec'
  },
  {
    id: 5,
    title: 'Puzzle Climb',
    description: 'Solve puzzles to increase your rating. Each correct solve boosts your rating!',
    icon: '🏔️',
    iconBg: '#f3e5f5'
  },
  {
    id: 6,
    title: 'Puzzles from Your Games',
    description: 'Solve puzzles to increase your rating. Each correct solve boosts your rating!',
    icon: '♟️',
    iconBg: '#e0f7fa'
  },
  {
    id: 7,
    title: 'Opening Puzzles',
    description: 'Test your opening knowledge with tactical puzzles.',
    icon: '⚡',
    iconBg: '#fff8e1'
  },
  {
    id: 8,
    title: 'Custom Puzzles',
    description: 'Create your own puzzle sets and challenges.',
    icon: '⚙️',
    iconBg: '#efebe9'
  }
]

export default function Puzzles() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const handlePuzzleClick = (puzzle) => {
    if (puzzle.title === 'Puzzle Rocket') {
      navigate('/puzzle-rocket-select')
    } else {
      console.log(`Starting ${puzzle.title}`)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#fcfcfc]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden flex items-center px-4 py-3 border-b border-[#eaecf0]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-[#f4f4f4] rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-[#6f767e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Top Navigation */}
        <PuzzlesTopNav />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Hero + Puzzle Cards */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Hero Section */}
              <PuzzleHero />

              {/* Puzzle Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {puzzleModes.map((puzzle) => (
                  <PuzzleCard
                    key={puzzle.id}
                    title={puzzle.title}
                    description={puzzle.description}
                    icon={puzzle.icon}
                    iconBg={puzzle.iconBg}
                    onClick={() => handlePuzzleClick(puzzle)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Rankings */}
            <div className="w-full lg:w-[320px] shrink-0">
              <PuzzleRankings />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
