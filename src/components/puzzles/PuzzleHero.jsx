export default function PuzzleHero() {
  return (
    <div className="bg-gradient-to-r from-[#e8b4c8] to-[#d4a5b9] rounded-2xl overflow-hidden relative h-[140px] sm:h-[160px]">
      <div className="flex items-center h-full px-6 sm:px-8 py-6">
        {/* Left Content */}
        <div className="flex flex-col gap-2 z-10">
          <h2 className="text-[#1a1d1f] text-2xl sm:text-[28px] font-bold leading-tight tracking-[-0.5px] font-heading">
            Train with Puzzles
          </h2>
          <p className="text-[#1a1d1f]/70 text-sm font-normal leading-5 font-body max-w-[300px]">
            Browse through all of our puzzle modes to sharpen your skills.
          </p>
        </div>

        {/* Chess Pieces Image */}
        <div className="hidden sm:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2">
          <div className="w-[160px] lg:w-[200px] h-[120px] lg:h-[140px] flex items-center justify-center">
            {/* Chess pieces illustration - using emoji as placeholder */}
            <div className="text-6xl lg:text-7xl flex gap-1">
              <span className="drop-shadow-lg">♟️</span>
              <span className="drop-shadow-lg -mt-4">♞</span>
              <span className="drop-shadow-lg">♜</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
