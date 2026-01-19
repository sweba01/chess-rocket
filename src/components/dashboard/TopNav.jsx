import settingsIcon from '../../assets/icons/Icon-13.png'
import avatarImg from '../../assets/images/image-of-boy.png'

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full h-[56px] sm:h-[64px] md:h-[72px] px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6">
      {/* Left - Page Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-8 text-[#1a1d1f] font-['Inter_Display',sans-serif]">
        Dashboard
      </h1>

      {/* Right - Button and Avatar */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Customize Dashboard Button */}
        <button className="flex items-center justify-center gap-2 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#efefef] rounded-full hover:bg-[#e5e5e5] transition-colors">
          <img
            src={settingsIcon}
            alt="Settings"
            className="w-4 h-4"
          />
          <span className="hidden sm:inline text-sm md:text-[15px] font-bold leading-6 tracking-[-0.15px] text-[#6f767e]">
            Customize Dashboard
          </span>
        </button>

        {/* Profile Avatar */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden">
          <img
            src={avatarImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}
