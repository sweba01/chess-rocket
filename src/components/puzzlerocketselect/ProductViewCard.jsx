import StatItem from './ui/StatItem'
import WeeklyChallengeBanner from './WeeklyChallengeBanner'

// Puzzle rocket image
import puzzleRocketImg from '../../assets/images/rocket-image.png'

export default function ProductViewCard({
  // Puzzle Info Props
  image = puzzleRocketImg,
  title = 'Puzzle Rocket',
  description = 'Race against time to solve puzzles',
  bestToday = 24,
  topScore = 28,
  // Challenge Banner Props
  showChallengeBanner = true,
  challengePrize = '$100',
  challengeTitle = 'Weekly Challenge',
  challengeMode = '5 min mode',
  challengeEndsIn = '3d 14h',
  leaderAvatar,
  leaderName = 'Eva Raposa',
  leaderFlag = '🇺🇸',
  leaderScore = 28
}) {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-4 p-3 rounded-[20px] sm:rounded-3xl border border-[#d8cfe3] overflow-hidden"
      style={{
        background: 'linear-gradient(175.95deg, #E7F5FD 0%, #E8E2FE 33.33%, #FCE2F0 66.67%, #FCEBE0 100%)'
      }}
    >
      {/* Top Section - Puzzle Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-3 sm:px-[20px] pt-2 sm:pt-0 pb-3 sm:pb-[20px] w-full">
        {/* Left - Image and Title */}
        <div className="flex items-center gap-3 sm:gap-[14px] w-full sm:w-auto sm:shrink-0">
          {/* Puzzle Image */}
          <div className="w-[60px] h-[75px] sm:w-[70px] sm:h-[87px] shrink-0 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title and Description */}
          <div className="flex flex-col flex-1 sm:flex-none sm:h-[106px] sm:w-[208px] items-start justify-center">
            <div className="flex flex-col gap-[5px] items-start w-full">
              <h2 className="text-[24px] sm:text-[30px] font-semibold leading-[1.3] sm:leading-[1.4] tracking-[-0.4px] sm:tracking-[-0.6px] text-[#141414] font-['Inter',sans-serif]">
                {title}
              </h2>
              <p className="text-[13px] sm:text-[14px] font-medium leading-[18px] sm:leading-[20px] text-[#6f767e] font-['Inter',sans-serif]">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Right - Stats */}
        <div className="flex items-center gap-4 sm:gap-[23px] w-full sm:w-auto justify-start sm:justify-end sm:ml-auto">
          <StatItem value={bestToday} label="Best today" />
          <StatItem value={topScore} label="Top score" />
        </div>
      </div>

      {/* Bottom Section - Weekly Challenge Banner */}
      {showChallengeBanner && (
        <WeeklyChallengeBanner
          prize={challengePrize}
          challengeTitle={challengeTitle}
          mode={challengeMode}
          endsIn={challengeEndsIn}
          leaderAvatar={leaderAvatar}
          leaderName={leaderName}
          leaderFlag={leaderFlag}
          leaderScore={leaderScore}
        />
      )}
    </div>
  )
}
