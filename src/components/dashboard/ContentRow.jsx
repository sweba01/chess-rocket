import chessMoneyImg from '../../assets/images/image 81.png'
import leaderAvatar from '../../assets/images/Image (Eva Raposa).png'

export default function ContentRow() {
  return (
    <div
      className="relative flex items-start w-full min-h-[200px] sm:min-h-[240px] md:min-h-[271px] rounded-2xl md:rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: 'linear-gradient(176deg, #e7f5fd 0%, #e8e2fe 33%, #fce2f0 67%, #fcebe0 100%)'
      }}
    >
      {/* Right Side Image - Positioned absolutely */}
      <img
        src={chessMoneyImg}
        alt="Chess pieces and money"
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-80 sm:opacity-100 pointer-events-none hidden sm:block"
        style={{ maxWidth: '60%' }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-[18px] max-w-full sm:max-w-[90%] md:max-w-[450px]">
        {/* Countdown Badge */}
        <div className="inline-flex self-start items-center px-2.5 py-0.5 bg-[#d54033] rounded-full">
          <span className="text-[10px] sm:text-xs font-medium text-[#fafafa] tracking-[-0.36px]">
            Ends In: 3d 14h 22m
          </span>
        </div>

        {/* Title Section */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="font-semibold text-lg sm:text-xl md:text-2xl leading-[1.4] tracking-[-0.48px]">
            <p
              className="bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(146deg, #6340ff 15%, #ff40c6 57%, #ff8040 99%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              $100 Weekly Challenge
            </p>
            <p className="text-[#141414]">5 Minute Puzzle Rocket Championship</p>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-5 text-[#6f767e]">
            Win $100 by achieving the highest global score this week!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-[18px]">
          {/* Play Now Button */}
          <button
            className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-4 rounded-full text-sm font-medium text-[#f4f4f4] w-full sm:w-[180px] md:w-[204px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: 'linear-gradient(165deg, #6340ff 9%, #ff40c6 70%, #ff8040 132%)'
            }}
          >
            Play Now
          </button>

          {/* Current Leader Card */}
          <div className="flex items-center gap-2.5 px-2.5 py-1.5 sm:py-2 bg-white/55 rounded-full w-full sm:w-[180px] md:w-[204px]">
            <img
              src={leaderAvatar}
              alt="Eva Raposa"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] sm:text-xs font-medium text-[#7b7b7b] leading-4 tracking-[-0.12px]">
                Current Leader
              </span>
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs sm:text-[13px] font-medium text-[#0f172a] leading-5 truncate">
                  Eva Raposa 🇺🇸
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#4f39f6] leading-5 whitespace-nowrap">
                  43 pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="h-[4px] sm:h-[5px] w-3 sm:w-4 rounded-full overflow-hidden bg-white"
          >
            {index < 3 && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: 'linear-gradient(133deg, #6340ff 15%, #ff40c6 57%, #ff8040 99%)'
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
