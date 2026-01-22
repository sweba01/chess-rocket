import avatarImg from '../../assets/images/Avatar.png'

export default function PuzzlesTopNav() {
  return (
    <nav className="flex items-center justify-between w-full h-[72px] px-4 sm:px-6 lg:px-10 py-6">
      {/* Left - Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold leading-8 text-text-dark font-heading">
        Puzzle Games
      </h1>

      {/* Right - Profile Avatar */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-green cursor-pointer hover:border-brand-purple transition-colors">
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
