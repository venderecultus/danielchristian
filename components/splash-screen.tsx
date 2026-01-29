'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function SplashScreen() {
  const [stage, setStage] = useState<'logo' | 'fade-out' | 'black' | 'fade-in' | 'done'>('logo')

  useEffect(() => {
    // Show logo for 2 seconds, then fade out
    const logoTimer = setTimeout(() => {
      setStage('fade-out')
    }, 2000)

    return () => clearTimeout(logoTimer)
  }, [])

  useEffect(() => {
    if (stage === 'fade-out') {
      // Fade out for 0.5 seconds, then show black
      const fadeTimer = setTimeout(() => {
        setStage('black')
      }, 500)

      return () => clearTimeout(fadeTimer)
    }
  }, [stage])

  useEffect(() => {
    if (stage === 'black') {
      // Show black screen for 1 second, then fade in main content
      const blackTimer = setTimeout(() => {
        setStage('fade-in')
      }, 1000)

      return () => clearTimeout(blackTimer)
    }
  }, [stage])

  useEffect(() => {
    if (stage === 'fade-in') {
      // Fade in main content for 0.5 seconds, then done
      const fadeInTimer = setTimeout(() => {
        setStage('done')
      }, 500)

      return () => clearTimeout(fadeInTimer)
    }
  }, [stage])

  if (stage === 'done') {
    return null
  }

  const isVisible = stage === 'logo' || stage === 'fade-out'
  const mainContentVisible = stage === 'fade-in'

  return (
    <>
      {/* Splash screen overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex items-center gap-5 transition-opacity duration-500 ${
          stage === 'logo' ? 'opacity-100' : 'opacity-0'
        }`}>
          <Image
            src="/logo.svg"
            alt="Daniel Christian Logo"
            width={43}
            height={44}
            className="w-12 h-12"
          />
          <span className="text-white text-[32px] font-sans font-medium">
            Daniel Christian
          </span>
        </div>
      </div>

      {/* Main content fade-in */}
      <div
        className={`transition-opacity duration-500 ${
          mainContentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Content will be rendered when splash is done */}
      </div>
    </>
  )
}
