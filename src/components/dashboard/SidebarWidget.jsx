import { useState } from 'react'

// Avatar images
import avatar1 from '../../assets/images/Avatar.png'
import avatar2 from '../../assets/images/Image (Eva Raposa).png'

// Leaderboard data
const leaderboardData = [
  { rank: 1, name: 'Éva Raposa', flag: '🇨🇳', score: 43, avatar: avatar1 },
  { rank: 2, name: 'Olga Medina', flag: '🇨🇦', score: 42, avatar: avatar2 },
  { rank: 3, name: 'Prakash Micheal', flag: '🇺🇸', score: 37, avatar: avatar1 },
  { rank: 4, name: 'Lukas Kirby', flag: '🇺🇦', score: 27, avatar: avatar2 },
]

// Current user data
const currentUser = {
  rank: 17,
  name: 'Kenny',
  flag: '🇺🇸',
  score: 25,
  avatar: avatar1,
  allTimeBest: 45,
}

// Leaderboard Row Component
function LeaderboardRow({ player }) {
  return (
    <div className="flex items-center justify-between py-2 transition-all duration-200 hover:bg-white/30 rounded-lg px-2 -mx-2">
      <div className="flex items-center gap-3">
        {/* Rank Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white border border-[#eae7ee] rounded-full">
            <span className="text-sm font-semibold text-[#1e293b]">{player.rank}</span>
          </div>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#b5e4ca]">
            <img
              src={player.avatar}
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name with Flag */}
        <span className="text-sm font-medium text-[#0f172a]">
          {player.name} {player.flag}
        </span>
      </div>

      {/* Score */}
      <span className="text-sm font-medium text-[#1a1d1f]">{player.score}</span>
    </div>
  )
}

// Current User Row Component (Highlighted)
function CurrentUserRow({ user }) {
  return (
    <div className="flex items-center justify-between py-2.5 px-3 bg-white/55 rounded-full backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {/* Rank Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white border border-[#eae7ee] rounded-full">
            <span className="text-sm font-semibold text-[#1e293b]">{user.rank}</span>
          </div>

          {/* Avatar with Online Indicator */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#b5e4ca]">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3fdd78] border-2 border-white rounded-full" />
          </div>
        </div>

        {/* Name with Flag */}
        <span className="text-sm font-medium text-[#0f172a]">
          {user.name} {user.flag}
        </span>
      </div>

      {/* Score (Purple for current user) */}
      <span className="text-sm font-medium text-[#4f39f6]">{user.score}</span>
    </div>
  )
}

export default function SidebarWidget() {
  const [activeTab, setActiveTab] = useState('thisWeek')

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[#d8cfe3] p-5"
      style={{
        backgroundImage: 'linear-gradient(163deg, #e7f5fd 0%, #e8e2fe 33%, #fce2f0 67%, #fcebe0 100%)'
      }}
    >
      {/* Header Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-center text-[#1a1d1f] tracking-[-0.2px] mb-4">
        $100 Puzzle Rocket Rankings
      </h3>

      {/* Tab Toggle */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setActiveTab('thisWeek')}
          className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'thisWeek'
              ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/25'
              : 'bg-white/55 text-[#818898] hover:bg-white/70'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setActiveTab('allTime')}
          className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'allTime'
              ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/25'
              : 'bg-white/55 text-[#818898] hover:bg-white/70'
          }`}
        >
          All-Time
        </button>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-1 mb-4">
        {leaderboardData.map((player) => (
          <LeaderboardRow key={player.rank} player={player} />
        ))}
      </div>

      {/* Current User Row (Highlighted) */}
      <div className="mb-4">
        <CurrentUserRow user={currentUser} />
      </div>

      {/* All-Time Best */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-sm font-medium text-[#140722]">Your All-Time Best:</span>
        <div className="px-3 py-1 bg-white/55 rounded-full">
          <span className="text-sm font-medium text-[#140722]">{currentUser.allTimeBest}</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-white border border-[#eae7ee] rounded-full transition-all duration-300 hover:shadow-lg hover:border-[#6366f1]/30 hover:bg-white active:scale-[0.98]">
        {/* Rocket Icon */}
        <svg className="w-5 h-5 text-[#6366f1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 2C12.5 2 16 5 16 9C16 10.5 15.5 11.77 14.83 12.83L17.5 15.5L16 17L13.17 14.17C12.11 14.72 10.89 15 9.5 15C5.5 15 2.5 12 2.5 12C2.5 12 5.5 9 9.5 9C10.5 9 11.45 9.21 12.32 9.57L13.94 7.94C13.5 5.5 12.5 2 12.5 2ZM9.5 11C8.67 11 8 11.67 8 12.5C8 13.33 8.67 14 9.5 14C10.33 14 11 13.33 11 12.5C11 11.67 10.33 11 9.5 11Z"/>
        </svg>
        <span className="text-sm font-semibold text-[#101010]">Play Puzzle Rocket</span>
      </button>
    </div>
  )
}
