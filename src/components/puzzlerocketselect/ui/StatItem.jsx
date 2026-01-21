export default function StatItem({ value, label, valueWidth = 'auto' }) {
  return (
    <div className="flex flex-col items-start">
      <span
        className="text-[22px] sm:text-[27px] font-semibold leading-[28px] sm:leading-[32px] tracking-[-0.22px] sm:tracking-[-0.27px] text-[#1a1d1f] font-['Inter_Display',sans-serif]"
        style={{ width: valueWidth !== 'auto' ? valueWidth : undefined }}
      >
        {value}
      </span>
      <span className="text-[13px] sm:text-[15px] font-semibold leading-[20px] sm:leading-[24px] tracking-[-0.075px] text-[#6f767e] font-['Inter',sans-serif]">
        {label}
      </span>
    </div>
  )
}
