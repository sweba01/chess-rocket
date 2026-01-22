import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import TopicsTopNav from '../components/topics/TopicsTopNav'
import TopicExpandedComponent from '../components/topics/TopicExpanded'
import chessImage from '../assets/images/chess-opening.png'
import { colors } from '../tokens'

export default function TopicExpanded() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-bg-dark">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden flex items-center px-4 py-3 border-b border-ui-border">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-bg-card-hover rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-text-secondary"
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
        <TopicsTopNav />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 space-y-6">
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

          {/* Expanded Topic with Lessons */}
          <TopicExpandedComponent
            title="Tactics"
            emoji="⚔️"
            bgColor={colors.accent.blue}
            progress={20}
            topics={10}
            lessons={72}
            completed={6}
            isExpanded={true}
          />
        </main>
      </div>
    </div>
  )
}
