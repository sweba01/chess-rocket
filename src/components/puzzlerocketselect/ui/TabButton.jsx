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
        flex items-center justify-center px-3 sm:px-[13px] py-[8px] sm:py-[10px] min-h-[44px] rounded-[37px]
        transition-all duration-200 whitespace-nowrap cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2
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
          ${isActive ? 'text-[#fcfcfc]' : 'text-[#64748b]'}
        `}
      >
        {label}
      </span>
    </button>
  )
}
