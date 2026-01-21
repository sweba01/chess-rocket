export default function TabButton({
  label,
  isActive = false,
  onClick,
  width = 'auto'
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center px-3 sm:px-[13px] py-[5px] sm:py-[6px] h-[36px] sm:h-[40px] rounded-[37px]
        transition-all duration-200 whitespace-nowrap
        ${isActive
          ? 'bg-[#6366f1]'
          : 'bg-[rgba(255,255,255,0.55)] hover:bg-[rgba(255,255,255,0.75)]'
        }
      `}
      style={{ width: width !== 'auto' ? width : undefined }}
    >
      <span
        className={`
          text-[13px] sm:text-[14px] font-medium leading-[1.55] text-center font-['Manrope',sans-serif]
          ${isActive ? 'text-[#fcfcfc]' : 'text-[#818898]'}
        `}
      >
        {label}
      </span>
    </button>
  )
}
