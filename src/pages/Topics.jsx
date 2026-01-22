import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import TopicsTopNav from '../components/topics/TopicsTopNav'
import Try2 from '../components/topics/Try2'

export default function Topics() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#111315]">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden flex items-center px-4 py-3 border-b border-[#2a2d2f]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-[#2a2d2f] rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-400"
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
          <Try2 />
        </main>
      </div>
    </div>
  )
}
