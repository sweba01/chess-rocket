export default function DurationButton({
  duration,
  isSelected = false,
  icon = null,
  onClick,
  width = '140px',
  responsive = false
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center p-3 sm:p-[20px] border-2 border-solid transition-all
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
      <div className="flex items-center">
        {icon && (
          <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div
          className={`
            text-[16px] sm:text-[18px] font-semibold leading-[24px] sm:leading-[28px] text-center font-['Inter_Display',sans-serif]
            ${isSelected ? 'text-[#615fff]' : 'text-[#101010]'}
          `}
        >
          {duration}
        </div>
      </div>
    </button>
  )
}
