import { useState } from 'react'

const rankingsData = [
  { rank: 1, name: 'Eva Raposa', flag: '🇧🇷', score: 43 },
  { rank: 2, name: 'Olga Medina', flag: '🇲🇽', score: 42 },
  { rank: 3, name: 'Prakash Micheal', flag: '🇮🇳', score: 37 },
  { rank: 4, name: 'Lukas Kirby', flag: '🇩🇪', score: 27 },
  { rank: 17, name: 'Kenny', flag: '🇺🇸', score: 25, isCurrentUser: true },
]

export default function PuzzleRankings() {
  const [activeTab, setActiveTab] = useState('thisWeek')

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#f1f1f1] flex flex-col gap-4 h-full">
      {/* Header */}
      <h3 className="text-[#1a1d1f] text-lg font-semibold font-heading">
        $100 Puzzle Rocket Rankings
      </h3>

      {/* Tabs */}
      <div className="flex bg-[#f4f4f4] rounded-lg p-1">
        <button
          onClick={() => setActiveTab('thisWeek')}
          className={`flex-1 py-2 px-4 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'thisWeek'
              ? 'bg-[#6366f1] text-white'
              : 'text-[#6f767e] hover:text-[#1a1d1f]'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setActiveTab('allTime')}
          className={`flex-1 py-2 px-4 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'allTime'
              ? 'bg-[#6366f1] text-white'
              : 'text-[#6f767e] hover:text-[#1a1d1f]'
          }`}
        >
          All-Time
        </button>
      </div>

      {/* Rankings List */}
      <div className="flex flex-col gap-2 flex-1">
        {rankingsData.map((player) => (
          <div
            key={player.rank}
            className={`flex items-center justify-between py-2 px-3 rounded-lg ${
              player.isCurrentUser ? 'bg-[#f0f9ff]' : ''
            }`}
          >
            {/* Left: Rank, Avatar, Name */}
            <div className="flex items-center gap-3">
              {/* Rank */}
              <span className={`text-sm font-semibold w-5 ${
                player.isCurrentUser ? 'text-[#6366f1]' : 'text-[#6f767e]'
              }`}>
                {player.rank}
              </span>

              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-[#e8e8e8] flex items-center justify-center overflow-hidden">
                <span className="text-sm">👤</span>
              </div>

              {/* Name & Flag */}
              <div className="flex items-center gap-1">
                <span className={`text-sm font-medium ${
                  player.isCurrentUser ? 'text-[#6366f1]' : 'text-[#1a1d1f]'
                }`}>
                  {player.name}
                </span>
                <span className="text-sm">{player.flag}</span>
              </div>
            </div>

            {/* Right: Score */}
            <span className={`text-sm font-semibold ${
              player.isCurrentUser ? 'text-[#6366f1]' : 'text-[#1a1d1f]'
            }`}>
              {player.score}
            </span>
          </div>
        ))}
      </div>

      {/* User Stats */}
      <div className="flex items-center justify-center gap-2 text-sm text-[#6f767e] border-t border-[#f1f1f1] pt-3">
        <span>Your All-Time Best:</span>
        <span className="font-semibold text-[#1a1d1f]">45</span>
      </div>

      {/* Play Button */}
      <button className="w-full bg-[#f4f4f4] hover:bg-[#e8e8e8] text-[#1a1d1f] text-sm font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
        <span>🚀</span>
        Play Puzzle Rocket
      </button>
    </div>
  )
}
