'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Float, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { TypeAnimation } from 'react-type-animation'
import confetti from 'canvas-confetti'

export default function HeroSection() {
  const [showConfetti, setShowConfetti] = useState(false)
  const canvasRef = useRef()

  useEffect(() => {
    // Trigger confetti on load
    setShowConfetti(true)
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <FloatingHeroText />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-6">
            <span className="text-gradient font-syne">CREATIVE</span>
            <br />
            <span className="text-shimmer font-orbitron">DEVELOPER</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 text-gray-300 font-space-grotesk">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Creative Coder',
                2000,
                'Tech Innovator',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-neon"
            />
          </div>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Crafting extraordinary digital experiences with cutting-edge technologies, 
            innovative design, and next-level animations.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              background: "linear-gradient(45deg, #ff00ff, #00ffff)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 glass rounded-full font-bold text-lg border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
          >
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
              CONTACT ME
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {['github', 'linkedin', 'twitter', 'dribbble'].map((social, index) => (
            <motion.a
              key={social}
              href={`#${social}`}
              whileHover={{ 
                scale: 1.2,
                y: -5,
                color: '#00ffff'
              }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-3 rounded-full glass hover:glow-effect"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="text-xl">{getSocialIcon(social)}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FloatingHeroText() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0, 0, 0]}
      >
        DEV
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  )
}

function getSocialIcon(platform) {
  const icons = {
    github: '💻',
    linkedin: '🔗',
    twitter: '🐦',
    dribbble: '🎨'
  }
  return icons[platform] || '🔗'
}
