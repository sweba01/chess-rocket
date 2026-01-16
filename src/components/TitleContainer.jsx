import { useRef, useLayoutEffect } from 'react'
import chessRocketLogo from '../assets/images/chess-rocket-logo.png'

export default function TitleContainer() {
  const headingRef = useRef(null)

  useLayoutEffect(() => {
    const el = headingRef.current
    if (!el) return

    const resizeText = () => {
      const maxFontSize = 41
      const minFontSize = 20

      let fontSize = maxFontSize
      el.style.fontSize = `${fontSize}px`

      // Shrink text until it fits container
      while (el.scrollWidth > el.clientWidth && fontSize > minFontSize) {
        fontSize -= 1
        el.style.fontSize = `${fontSize}px`
      }
    }

    resizeText()
    window.addEventListener('resize', resizeText)

    return () => window.removeEventListener('resize', resizeText)
  }, [])

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full max-w-full sm:max-w-77.75 md:max-w-119.5">
      
      {/* Logo */}
      <div className="h-6 w-49 md:h-8.5 md:w-69.25">
        <img
          src={chessRocketLogo}
          alt="Chess Rocket"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Heading & Details */}
      <div className="flex flex-col gap-4 md:gap-0 items-center text-center w-full">
        <h1
          ref={headingRef}
          className="
            font-display
            font-semibold
            text-auth-text-primary
            whitespace-nowrap
            leading-[1.2]
            tracking-tight
            w-full
          "
        >
          Sign in to Chess Rocket
        </h1>

        <p className="text-[16px] md:text-[24px] leading-9 md:leading-[50px] tracking-[-0.32px] md:tracking-[-1.23px] text-[#1a1d1f]/55">
          Start your journey to chess mastery today
        </p>
      </div>
    </div>
  )
}
