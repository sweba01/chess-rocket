import googleLogo from '../assets/icons/google-logo-frame.svg'
import appleLogo from '../assets/icons/apple-logo-instance.svg'
import mailIcon from '../assets/icons/mail-01.svg'
import lockIcon from '../assets/icons/passcode-lock.svg'

export default function SignUpContainer() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-full sm:max-w-77.75 md:max-w-[478px]">
      {/* Social Sign Up Section */}
      <div className="flex flex-col gap-5">
        <p className="text-sm font-semibold leading-6 tracking-[-0.14px] text-[#1a1d1f]">
          Sign in with Google or Apple:
        </p>
        <div className="flex gap-2 w-full">
          <button className="flex items-center justify-center gap-2 py-3 px-3 sm:px-5 bg-white border-2 border-[#efefef] rounded-xl hover:border-[#d0d0d0] transition-colors flex-[1_0_0]">
            <img src={googleLogo} alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[14px] sm:text-[15px] font-bold leading-6 tracking-[-0.15px] text-[#1a1d1f]">
              Google
            </span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-3 sm:px-5 bg-white border-2 border-[#efefef] rounded-xl hover:border-[#d0d0d0] transition-colors flex-[1_0_0]">
            <img src={appleLogo} alt="Apple" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-[14px] sm:text-[15px] font-bold leading-6 tracking-[-0.15px] text-[#1a1d1f]">
              Apple ID
            </span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 bg-[#efefef] rounded-sm" />

      {/* Email Sign Up Section */}
      <div className="flex flex-col gap-5">
        <p className="text-sm font-semibold leading-6 tracking-[-0.14px] text-[#1a1d1f]">
          <span className="md:hidden">Or sign in with email address</span>
          <span className="hidden md:inline">Or sign in with email address:</span>
        </p>
        <div className="flex flex-col gap-3">
          {/* Email Input */}
          <div className="flex items-center gap-2 sm:gap-3 p-3 bg-[#f4f4f4] rounded-xl">
            <img src={mailIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-[14px] sm:text-[15px] font-semibold leading-6 tracking-[-0.075px] text-[#1a1d1f] placeholder:text-[#1a1d1f]/40 outline-none min-w-0"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center gap-2 sm:gap-3 p-3 bg-[#f4f4f4] rounded-xl">
            <img src={lockIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
            <input
              type="password"
              placeholder="Enter your password"
              className="flex-1 bg-transparent text-[14px] sm:text-[15px] font-semibold leading-6 tracking-[-0.075px] text-[#1a1d1f] placeholder:text-[#1a1d1f]/40 outline-none min-w-0"
            />
          </div>

          {/* Forgot Password - hidden on mobile */}
          <a
            href="#"
            className="hidden md:block text-sm font-medium leading-6 tracking-[-0.14px] text-[#666] hover:text-[#1a1d1f] transition-colors"
          >
            Forgot password?
          </a>

          {/* Get Started Button */}
          <button
            className="w-full h-[44px] sm:h-[48px] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold leading-6 tracking-[-0.15px] text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: 'linear-gradient(111deg, #6340ff 17%, #ff40c6 48%, #ff8040 79%)'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
