// Card images
import cardImg1 from '../../assets/images/card-img1.png'
import cardImg2 from '../../assets/images/card-img2.png'

// Opening data
const openings = [
  {
    id: 1,
    title: 'Sicilian Defense',
    description: 'Master the most popular response to 1e4',
    progress: 95,
    image: cardImg1,
  },
  {
    id: 2,
    title: "Queen's Gambit",
    description: 'Learn the classic opening for White',
    progress: 24,
    image: cardImg2,
  },
]

// Opening Card Component
function OpeningCard({ opening }) {
  const { title, description, progress, image } = opening

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#f1f1f1] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10 hover:border-[#6366f1]/20">
      {/* Image Container */}
      <div className="relative h-[160px] sm:h-[180px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5 flex-1">
        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold text-[#1a1d1f] tracking-[-0.3px] mb-1">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-medium text-[#6b7280] min-w-[40px] text-right">
            {progress}%
          </span>
        </div>

        {/* Start Now Button */}
        <button className="w-full py-3 px-4 bg-[#6366f1] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-[#4f46e5] hover:shadow-lg hover:shadow-[#6366f1]/30 active:scale-[0.98]">
          Start Now
        </button>
      </div>
    </div>
  )
}

export default function OpeningTrainer() {
  return (
    <div className="bg-white rounded-[20px] border border-[#f1f1f1] p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl font-bold text-[#1a1d1f] tracking-[-0.3px]">
          Opening Trainer
        </h3>
        <button className="px-4 py-2 text-sm font-medium text-[#6b7280] bg-[#fcfcfc] border border-[#e5e7eb] rounded-full transition-all duration-300 hover:border-[#6366f1] hover:text-[#6366f1] hover:bg-[#6366f1]/5">
          See All
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {openings.map((opening) => (
          <OpeningCard key={opening.id} opening={opening} />
        ))}
      </div>
    </div>
  )
}
