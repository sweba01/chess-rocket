import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import PuzzleSelectTopNav from '../components/puzzlerocketselect/PuzzleSelectTopNav'
import ProductViewCard from '../components/puzzlerocketselect/ProductViewCard'
import DurationSelector from '../components/puzzlerocketselect/DurationSelector'
import LeaderboardItem from '../components/puzzlerocketselect/ui/LeaderboardItem'
import TabButton from '../components/puzzlerocketselect/ui/TabButton'
import TimePeriodTabs from '../components/puzzlerocketselect/ui/TimePeriodTabs'
import CategoryTabs from '../components/puzzlerocketselect/ui/CategoryTabs'

// Avatar images
import avatar1 from '../assets/images/card-images/Avatar.png'
import avatar2 from '../assets/images/card-images/Rectangle 5997.png'
import avatar3 from '../assets/images/card-images/Rectangle 5997-1.png'
import avatar4 from '../assets/images/card-images/Rectangle 5997-2.png'
import avatar5 from '../assets/images/card-images/source/Avatar=58.png'
import avatar6 from '../assets/images/card-images/source/Avatar=420.png'
import avatar7 from '../assets/images/card-images/source/Avatar=214.png'
import userAvatar from '../assets/images/card-images/Avatar/Avatar/customer-1 1.png'

export default function PuzzleRocketSelect() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
        <PuzzleSelectTopNav />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Main Content */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Product View Card (Puzzle Info + Challenge Banner) */}
              <ProductViewCard
                title="Puzzle Rocket"
                description="Race against time to solve puzzles"
                bestToday={24}
                topScore={28}
                challengePrize="$100"
                challengeTitle="Weekly Challenge"
                challengeMode="5 min mode"
                challengeEndsIn="3d 14h"
                leaderName="Eva Raposa"
                leaderFlag="🇺🇸"
                leaderScore={28}
              />

              {/* Duration Selector */}
              <DurationSelector
                selectedDuration="3min"
                onDurationChange={(duration) => console.log('Duration changed:', duration)}
                onStart={(duration) => console.log('Starting with duration:', duration)}
                onHowToPlay={() => console.log('How to play clicked')}
              />
            </div>

            {/* Right Column - Rankings Panel */}
            <div className="w-full lg:w-[376px] shrink-0">
              {/* Temporary Preview - Will be replaced by RankingsPanel */}
              <div
                className="rounded-[20px] sm:rounded-[24px] border border-[#d8cfe3] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
                style={{
                  background: 'linear-gradient(159.18deg, #E7F5FD 0%, #E8E2FE 33.33%, #FCE2F0 66.67%, #FCEBE0 100%)'
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[28px] sm:leading-[32px] tracking-[-0.2px] text-[#1a1d1f] font-['Inter_Display',sans-serif]">
                    Puzzle Rocket Rankings
                  </h3>
                  <div className="bg-[rgba(255,255,255,0.55)] px-[10px] sm:px-[13px] py-[4px] sm:py-[6px] rounded-[37px] shrink-0">
                    <span className="text-[13px] sm:text-[14px] font-medium text-[#140722]">3 min</span>
                  </div>
                </div>

                {/* Time Period Tabs */}
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <TimePeriodTabs
                    activeTab="today"
                    onTabChange={(tab) => console.log('Period changed:', tab)}
                  />
                </div>

                {/* Category Tabs */}
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <CategoryTabs
                    activeCategory="global"
                    onCategoryChange={(category) => console.log('Category changed:', category)}
                  />
                </div>

                {/* Leaderboard */}
                <div className="flex flex-col gap-[10px] sm:gap-[13px]">
                  <LeaderboardItem rank={1} name="Éva Raposa" flag="🇨🇳" score={43} avatar={avatar1} />
                  <LeaderboardItem rank={2} name="Olga Medina" flag="🇨🇦" score={42} avatar={avatar2} />
                  <LeaderboardItem rank={3} name="Prakash Micheal" flag="🇺🇸" score={37} avatar={avatar3} />
                  <LeaderboardItem rank={4} name="Lukas Kirby" flag="🇺🇦" score={27} avatar={avatar4} />
                  <LeaderboardItem rank={5} name="Maya Chen" flag="🇨🇦" score={32} avatar={avatar5} />
                  <LeaderboardItem rank={6} name="Sofia Rossi" flag="🇮🇹" score={29} avatar={avatar6} />
                  <LeaderboardItem rank={7} name="Aiden Smith" flag="🇺🇸" score={24} avatar={avatar7} />
                </div>

                {/* Current User */}
                <LeaderboardItem
                  rank={17}
                  name="Kenny"
                  flag="🇺🇸"
                  score={25}
                  isCurrentUser={true}
                  showOnline={true}
                  avatar={userAvatar}
                />

                {/* All-Time Best */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#140722]">Your All-Time Best:</span>
                  <div className="bg-[rgba(255,255,255,0.55)] px-[10px] sm:px-[13px] py-[4px] sm:py-[6px] rounded-[37px]">
                    <span className="text-[13px] sm:text-[14px] font-medium text-[#140722]">45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
