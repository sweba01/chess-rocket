import StatItem from './ui/StatItem'

// Puzzle rocket image
import puzzleRocketImg from '../../assets/images/rocket-image.png'

export default function PuzzleInfoCard({
  image = puzzleRocketImg,
  title = 'Puzzle Rocket',
  description = 'Race against time to solve puzzles',
  bestToday = 24,
  topScore = 28
}) {
  return (
    <div className="flex items-center gap-[96px] px-[20px] pt-0 pb-[20px] w-full">
      {/* Left Section - Image and Title */}
      <div className="flex items-center gap-[14px] shrink-0">
        {/* Puzzle Image - 70x87px */}
        <div className="w-[70px] h-[87px] shrink-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title and Description - 208x106px */}
        <div className="flex flex-col h-[106px] w-[208px] items-start justify-center">
          <div className="flex flex-col gap-[5px] items-start w-full">
            <h2 className="text-[30px] font-semibold leading-[1.4] tracking-[-0.6px] text-[#141414] font-['Inter',sans-serif]">
              {title}
            </h2>
            <p className="text-[14px] font-medium leading-[20px] text-[#6f767e] font-['Inter',sans-serif]">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Stats - 249px wide, gap 23px */}
      <div className="flex items-center gap-[23px] justify-end w-[249px] ml-auto">
        <StatItem value={bestToday} label="Best today" />
        <StatItem value={topScore} label="Top score" />
      </div>
    </div>
  )
}
