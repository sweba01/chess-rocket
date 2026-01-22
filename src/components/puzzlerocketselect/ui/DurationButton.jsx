export default function DurationButton({
  duration,
  isSelected = false,
  icon = null,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 flex items-center justify-center p-[20px] gap-[10px] border-2 border-solid transition-all cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-[#615fff] focus:ring-offset-2
        ${isSelected
          ? 'bg-[#e5e3fe] border-[#615fff] rounded-[500px]'
          : 'bg-white border-[#d9d9d9] rounded-[18px] hover:border-[#b0b0b0]'
        }
      `}
      style={{
        boxShadow: isSelected
          ? '0px 2px 0px 0px #615fff'
          : '0px 2px 0px 0px #d9d9d9'
      }}
    >
      {icon && (
        <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
      <span
        className={`
          text-[18px] font-semibold leading-[28px] text-center font-['Inter_Display',sans-serif]
          ${isSelected ? 'text-[#615fff]' : 'text-[#101010]'}
        `}
      >
        {duration}
      </span>
    </button>
  )
}
