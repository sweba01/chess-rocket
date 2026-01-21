export default function StartButton({
  text = 'Start Puzzle Rocket',
  onClick,
  disabled = false
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center justify-center px-[24px] py-[16px] rounded-[48px]
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#615fff] focus:ring-offset-2
        ${disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:opacity-90 hover:shadow-lg active:opacity-95'
        }
      `}
      style={{
        background: 'linear-gradient(160.724deg, rgb(99, 64, 255) 14.539%, rgb(255, 64, 198) 56.748%, rgb(255, 128, 64) 98.958%)'
      }}
    >
      <span className="text-[15px] font-bold leading-[24px] tracking-[-0.15px] text-[#fcfcfc] font-['Inter',sans-serif]">
        {text}
      </span>
    </button>
  )
}
