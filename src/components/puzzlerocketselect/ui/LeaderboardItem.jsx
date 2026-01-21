export default function LeaderboardItem({
  rank,
  avatar,
  name,
  flag,
  score,
  isCurrentUser = false,
  showOnline = false
}) {
  return (
    <div
      className={`
        flex items-center justify-between w-full
        ${isCurrentUser
          ? 'bg-[rgba(255,255,255,0.55)] rounded-[37px] px-2 sm:px-[8px] py-[6px] min-h-[44px]'
          : 'px-0 py-0'
        }
      `}
    >
      {/* Left Section - Rank, Avatar, Name */}
      <div className="flex items-center gap-2 sm:gap-[13px] min-w-0">
        {/* Rank Badge + Avatar */}
        <div className="flex items-center gap-2 sm:gap-[12px] shrink-0">
          {/* Rank Badge */}
          <div className="w-[28px] h-[27px] sm:w-[32px] sm:h-[31px] flex items-center justify-center bg-white border border-[#eae7ee] rounded-[99px]">
            <span className="text-[12px] sm:text-[14px] font-semibold leading-[20px] text-[#1e293b] text-center font-['Inter_Display',sans-serif]">
              {rank}
            </span>
          </div>

          {/* Avatar */}
          <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full overflow-hidden shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#b5e4ca] to-[#a5d0bb] flex items-center justify-center text-xs sm:text-sm font-medium text-white">
                {name?.charAt(0)}
              </div>
            )}

            {/* Online Indicator */}
            {showOnline && (
              <div className="absolute bottom-0 right-0 w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#3fdd78] border-2 sm:border-[3px] border-[#fdf6fb] rounded-full" />
            )}
          </div>
        </div>

        {/* Player Name + Flag */}
        <div className="flex items-center min-w-0">
          <span className="text-[13px] sm:text-[14px] font-medium leading-[20px] text-[#0f172a] font-['Inter',sans-serif] truncate">
            {name}
          </span>
          {flag && (
            <span className="text-[13px] sm:text-[15px] leading-[20px] ml-1 shrink-0">
              {flag}
            </span>
          )}
        </div>
      </div>

      {/* Right Section - Score */}
      <span
        className={`
          text-[13px] sm:text-[14px] font-medium leading-[20px] font-['Inter',sans-serif] shrink-0 ml-2
          ${isCurrentUser ? 'text-[#4f39f6]' : 'text-[#1a1d1f]'}
        `}
      >
        {score}
      </span>
    </div>
  )
}
