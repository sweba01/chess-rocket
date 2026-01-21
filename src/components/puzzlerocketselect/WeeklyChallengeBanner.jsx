export default function WeeklyChallengeBanner({
  prize = '$100',
  challengeTitle = 'Weekly Challenge',
  mode = '5 min mode',
  endsIn = '3d 14h',
  leaderAvatar,
  leaderName = 'Eva Raposa',
  leaderFlag = '🇺🇸',
  leaderScore = 28
}) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-full bg-white/55 backdrop-blur-[17.5px] w-full">
      {/* Left Section - Challenge Info */}
      <div className="flex items-center gap-2">
        {/* Trophy Icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M6.25 17.5H13.75M10 14.1667V17.5M5 2.5H15C15 2.5 15 5.83333 15 8.33333C15 10.8333 12.7614 12.5 10 12.5C7.23858 12.5 5 10.8333 5 8.33333C5 5.83333 5 2.5 5 2.5Z"
            stroke="url(#trophy-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 3.33333H16.6667C17.1269 3.33333 17.5 3.70643 17.5 4.16667V5C17.5 6.38071 16.3807 7.5 15 7.5M5 3.33333H3.33333C2.8731 3.33333 2.5 3.70643 2.5 4.16667V5C2.5 6.38071 3.61929 7.5 5 7.5"
            stroke="url(#trophy-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="trophy-gradient" x1="2.5" y1="2.5" x2="17.5" y2="17.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6340FF" />
              <stop offset="0.5" stopColor="#FF40C6" />
              <stop offset="1" stopColor="#FF8040" />
            </linearGradient>
          </defs>
        </svg>

        {/* Challenge Text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span
            className="text-[13px] font-semibold leading-5"
            style={{
              background: 'linear-gradient(149.07deg, #6340FF 14.54%, #FF40C6 56.75%, #FF8040 98.96%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {prize} {challengeTitle}
          </span>
          <span className="text-xs text-[#7b7b7b] font-medium">
            {mode} <span className="text-[#101010] font-semibold">• Ends in {endsIn}</span>
          </span>
        </div>
      </div>

      {/* Right Section - Leader Info */}
      <div className="flex items-center gap-2">
        {/* Leader Avatar */}
        {leaderAvatar ? (
          <img
            src={leaderAvatar}
            alt={leaderName}
            className="w-[23px] h-[23px] rounded-full object-cover"
          />
        ) : (
          <div className="w-[23px] h-[23px] rounded-full bg-gradient-to-br from-[#f0e6ff] to-[#ffe6f0] flex items-center justify-center text-xs">
            {leaderName.charAt(0)}
          </div>
        )}

        {/* Leader Name & Flag */}
        <span className="text-[13px] font-medium text-[#0f172a] hidden sm:inline">
          {leaderName} {leaderFlag}
        </span>

        {/* Leader Score */}
        <span className="text-sm font-medium text-[#4f39f6]">
          {leaderScore}
        </span>
      </div>
    </div>
  )
}
