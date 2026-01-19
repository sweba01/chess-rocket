import chessImg from '../../assets/images/image 81.png'

export default function ProductView() {
  return (
    <div
      className="relative flex items-center w-full min-h-[140px] sm:min-h-[160px] lg:min-h-[177px] rounded-2xl lg:rounded-3xl overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(176deg, #e7f5fd 0%, #e8e2fe 33%, #fce2f0 67%, #fcebe0 100%)'
      }}
    >
      {/* Left Content */}
      <div className="relative z-10 flex flex-col gap-2 sm:gap-3 p-5 sm:p-6 lg:p-8 max-w-[60%] sm:max-w-[50%]">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#141414] leading-tight tracking-[-0.5px]">
          Climb Our Training Program
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#6f767e] font-medium leading-relaxed">
          Progress from novice to master by completing our Level Climb
        </p>
      </div>

      {/* Right Side Image - Chess Pieces */}
      <img
        src={chessImg}
        alt="Chess pieces"
        className="absolute right-0 top-0 h-full w-auto object-cover pointer-events-none hidden sm:block"
        style={{ maxWidth: '55%' }}
      />
    </div>
  )
}
