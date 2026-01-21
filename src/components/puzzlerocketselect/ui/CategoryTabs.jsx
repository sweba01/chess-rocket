const defaultCategories = [
  { id: 'global', label: 'Global' },
  { id: 'community', label: 'Community' },
  { id: 'friends', label: 'Friends' },
  { id: 'personal', label: 'Personal' }
]

export default function CategoryTabs({
  categories = defaultCategories,
  activeCategory = 'global',
  onCategoryChange
}) {
  return (
    <div className="flex items-center gap-[4px] bg-[rgba(255,255,255,0.55)] p-[4px] rounded-[37px] w-max sm:w-full min-w-full">
      {categories.map((category) => {
        const isActive = activeCategory === category.id
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange?.(category.id)}
            className={`
              flex-1 flex items-center justify-center px-3 sm:px-2 py-[10px] min-h-[44px] rounded-[37px]
              transition-all duration-200 whitespace-nowrap cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-inset
              ${isActive ? 'bg-white' : 'hover:bg-white/30'}
            `}
          >
            <span
              className={`
                text-[13px] sm:text-[14px] font-medium leading-[1.55] text-center font-['Manrope',sans-serif]
                ${isActive ? 'text-black' : 'text-[#64748b]'}
              `}
            >
              {category.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
