export default function DurationButton({
  duration,
  isSelected = false,
  icon = null,
  onClick,
  width = '120px',
  responsive = false
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center px-4 py-3 sm:px-6 sm:py-[16px] border-2 border-solid transition-all cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-[#615fff] focus:ring-offset-2
        ${responsive ? 'w-full sm:w-auto sm:shrink-0' : 'shrink-0'}
        ${isSelected
          ? 'bg-[#e5e3fe] border-[#615fff] rounded-[500px]'
          : 'bg-white border-[#d9d9d9] rounded-[18px] hover:border-[#b0b0b0]'
        }
      `}
      style={{
        width: responsive ? undefined : width,
        minWidth: responsive ? undefined : width,
        boxShadow: isSelected
          ? '0px 2px 0px 0px #615fff'
          : '0px 2px 0px 0px #d9d9d9'
      }}
    >
      <div className="flex items-center gap-1">
        {icon && (
          <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div
          className={`
            text-[14px] sm:text-[16px] font-semibold leading-[24px] text-center font-['Inter_Display',sans-serif]
            ${isSelected ? 'text-[#615fff]' : 'text-[#101010]'}
          `}
        >
          {duration}
        </div>
      </div>
    </button>
  )
}
