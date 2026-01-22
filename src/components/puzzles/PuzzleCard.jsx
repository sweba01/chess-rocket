export default function PuzzleCard({
  title,
  description,
  icon,
  iconBg = '#fff3e0',
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all border border-[#f1f1f1] flex flex-col gap-3"
    >
      {/* Top Row: Icon and Start Button */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        {/* Start Button */}
        <button className="bg-[#efefef] hover:bg-[#e5e5e5] text-[#1a1d1f] text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
          Start
        </button>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[#1a1d1f] text-base font-semibold font-body">
          {title}
        </h3>
        <p className="text-[#6f767e] text-xs font-normal leading-4 font-body line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}
