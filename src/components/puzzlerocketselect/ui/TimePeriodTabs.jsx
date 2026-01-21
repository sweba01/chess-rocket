import TabButton from './TabButton'

const defaultTabs = [
  { id: 'today', label: 'Today' },
  { id: 'thisWeek', label: 'This Week' },
  { id: 'allTime', label: 'All-Time' }
]

export default function TimePeriodTabs({
  tabs = defaultTabs,
  activeTab = 'today',
  onTabChange
}) {
  return (
    <div className="flex items-center gap-[5px] w-max sm:w-auto">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange?.(tab.id)}
        />
      ))}
    </div>
  )
}
