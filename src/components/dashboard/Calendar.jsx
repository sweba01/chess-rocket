import { useState } from 'react'

// Icons
import backArrow from '../../assets/icons/Back arrow.png'
import nextArrow from '../../assets/icons/Next arrow.png'
import calendarIcon from '../../assets/icons/calendar-day 1.png'

// Days of the week
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// Month names
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

// Sample events data (day numbers with event indicators)
const eventsData = {
  8: 'purple',   // Purple dot
  19: 'orange',  // Orange dot
  24: 'yellow',  // Yellow dot (rating)
  28: 'purple',  // Purple dot
}

// Get days in a month
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

// Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

// Generate calendar days for a month
function generateCalendarDays(year, month) {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const daysInPrevMonth = getDaysInMonth(year, month - 1)

  const days = []

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
      event: eventsData[i] || null,
    })
  }

  // Next month days (fill remaining slots to complete 6 weeks = 42 days)
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      isNextMonth: true,
    })
  }

  return days
}

// Event dot component
function EventDot({ color }) {
  const colorClasses = {
    purple: 'bg-[#6f47eb]',
    orange: 'bg-[#f97316]',
    yellow: 'bg-[#eab308]',
  }

  return (
    <div className={`w-1.5 h-1.5 rounded-full ${colorClasses[color] || 'bg-[#6f47eb]'}`} />
  )
}

// Scheduled Event Item component
function ScheduledEvent({ color, title, time }) {
  const bgColorClasses = {
    purple: 'bg-[#c4b5fd]', // Light purple for Weekly Tournament
    blue: 'bg-[#a5f3fc]',   // Light cyan/blue for Study Session
  }

  return (
    <div className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg px-1 -mx-1 transition-colors cursor-pointer">
      {/* Icon Circle */}
      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${bgColorClasses[color] || 'bg-[#c4b5fd]'}`}>
        <img src={calendarIcon} alt="" className="w-4 h-4" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-black truncate">{title}</span>
        <span className="text-xs text-[#6b7280]">{time}</span>
      </div>
    </div>
  )
}

// Day cell component
function DayCell({ dayData, isSelected, isToday, onClick }) {
  const { day, isCurrentMonth, event } = dayData

  return (
    <button
      onClick={() => onClick(day)}
      className={`
        flex flex-col items-center justify-center p-1 min-h-[28px] rounded transition-all duration-200
        ${isSelected ? 'bg-[#eee9fd]' : 'hover:bg-gray-100'}
        ${!isCurrentMonth ? 'opacity-50' : ''}
      `}
    >
      <span
        className={`
          text-sm font-semibold tracking-[-0.14px] leading-5
          ${isSelected ? 'text-[#6f47eb]' : isCurrentMonth ? 'text-black' : 'text-[#5c5f62]'}
        `}
      >
        {day}
      </span>
      {event && (
        <div className="mt-0.5">
          <EventDot color={event} />
        </div>
      )}
    </button>
  )
}

export default function Calendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState(10) // Default selected day

  const calendarDays = generateCalendarDays(currentYear, currentMonth)

  // Navigate to previous month
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // Handle day selection
  const handleDayClick = (day) => {
    setSelectedDay(day)
  }

  return (
    <div className="bg-white rounded-[20px] border border-[#f1f1f1] p-5">
      <div className="flex flex-col gap-3">
      {/* Month Navigation Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.14]">
        <button
          onClick={goToPrevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <img src={backArrow} alt="Previous" className="w-2 h-3" />
        </button>

        <span className="text-[15px] font-medium text-black tracking-[-0.15px]">
          {MONTHS[currentMonth]}
        </span>

        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <img src={nextArrow} alt="Next" className="w-2 h-3" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div
            key={day}
            className="flex items-center justify-center p-1 text-[11px] font-semibold text-[#5c5f62] text-center"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((dayData, index) => (
          <DayCell
            key={index}
            dayData={dayData}
            isSelected={dayData.isCurrentMonth && dayData.day === selectedDay}
            isToday={
              dayData.isCurrentMonth &&
              dayData.day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
            }
            onClick={handleDayClick}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-[#e5e7eb] my-2" />

      {/* Scheduled Events */}
      <div className="flex flex-col gap-1">
        <ScheduledEvent
          color="purple"
          title="Weekly Tournament"
          time="11:15AM - 12:30PM"
        />
        <ScheduledEvent
          color="blue"
          title="Study Session: Endgames"
          time="16:15PM - 17:30PM"
        />
      </div>
      </div>
    </div>
  )
}
