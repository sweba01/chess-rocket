import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import TrainingTopNav from '../components/training/TrainingTopNav'
import ProductView from '../components/training/ProductView'
import CurrentLevelCard from '../components/training/CurrentLevelCard'

export default function Training() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#fcfcfc]">
      {/* Sidebar - Reuse from Dashboard */}
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
        <TrainingTopNav />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 pb-6 space-y-6">
          {/* Product View Banner */}
          <ProductView />

          {/* Current Level Card (Part 3) */}
          <CurrentLevelCard />

          {/* Placeholder for All Levels Component (Part 4) */}
          <div className="min-h-[200px] rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-gray-400 text-lg">All Levels Component (Part 4)</p>
          </div>
        </main>
      </div>
    </div>
  )
}
