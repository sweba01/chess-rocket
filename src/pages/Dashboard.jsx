import { useState } from 'react'
import TopNav from '../components/dashboard/TopNav'
import ContentRow from '../components/dashboard/ContentRow'
import Sidebar from '../components/dashboard/Sidebar'
import TrainingProgram from '../components/dashboard/TrainingProgram'
import OpeningTrainer from '../components/dashboard/OpeningTrainer'
import SidebarWidget from '../components/dashboard/SidebarWidget'
import Calendar from '../components/dashboard/Calendar'

export default function Dashboard() {
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
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
        <TopNav />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-10 pb-6 space-y-6">
          {/* Content Row - Weekly Challenge Banner */}
          <ContentRow />

          {/* Training Program & Sidebar Widget Row */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
            {/* Training Program */}
            <TrainingProgram />

            {/* Sidebar Widget - Rankings */}
            <SidebarWidget />
          </div>

          {/* Opening Trainer & Calendar Row */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
            {/* Opening Trainer */}
            <OpeningTrainer />

            {/* Calendar */}
            <Calendar />
          </div>
        </main>
      </div>
    </div>
  )
}
