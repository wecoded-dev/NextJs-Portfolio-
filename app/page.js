'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Components
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'
import Navigation from './components/layout/Navigation'
import LoadingScreen from './components/animations/LoadingScreen'
import ScrollProgress from './components/animations/ScrollProgress'
import AudioVisualizer from './components/animations/AudioVisualizer'
import BackgroundEffects from './components/animations/BackgroundEffects'

export default function UltraPortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')
  const audioRef = useRef()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Audio Visualizer */}
      <AudioVisualizer audioRef={audioRef} />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation currentSection={currentSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Hidden Audio */}
      <audio ref={audioRef} className="hidden" loop>
        <source src="/sounds/ambient.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
