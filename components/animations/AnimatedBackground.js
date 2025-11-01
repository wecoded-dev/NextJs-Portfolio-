'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Text3D, Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShapes() {
  const groupRef = useRef()
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.05
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Multiple floating shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-5, 2, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[4, -1, 0]}>
          <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
          <meshStandardMaterial 
            color="#ff00ff" 
            emissive="#ff00ff"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={2.5}>
        <mesh position={[0, 3, -2]}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial 
            color="#ffff00" 
            emissive="#ffff00"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef()
  const particlesRef = useRef()
  
  useEffect(() => {
    if (particlesRef.current) {
      const particles = new Float32Array(5000 * 3)
      for (let i = 0; i < 5000; i++) {
        particles[i * 3] = (Math.random() - 0.5) * 50
        particles[i * 3 + 1] = (Math.random() - 0.5) * 50
        particles[i * 3 + 2] = (Math.random() - 0.5) * 50
      }
      
      particlesRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(particles, 3)
      )
    }
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.05
      pointsRef.current.rotation.y += delta * 0.03
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={particlesRef} />
      <pointsMaterial 
        size={0.05} 
        color="#ffffff" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#000000']} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <ParticleField />
        <FloatingShapes />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.2}
          enablePan={false}
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      </Canvas>
    </div>
  )
}
