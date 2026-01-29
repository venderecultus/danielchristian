'use client'

import { WorksGallery } from "@/components/works-gallery"
import { SplashScreen } from "@/components/splash-screen"
import { useEffect, useState } from 'react'

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Wait for splash screen to complete (4.5 seconds total)
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <SplashScreen />

      <div
        className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-6">
          <nav className="flex items-center gap-8 text-sm font-sans">
            <a href="#projects" className="text-white hover:text-white/60 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-white hover:text-white/60 transition-colors">
              About Me
            </a>
            <a href="#contact" className="text-white hover:text-white/60 transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Works Gallery */}
        <main className="pt-32 pb-16">
          <WorksGallery />
        </main>
      </div>
    </div>
  )
}
