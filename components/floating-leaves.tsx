"use client"

import { motion } from "framer-motion"

export default function FloatingLeaves() {
  const leaves = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute opacity-20"
          style={{
            width: leaf.size,
            height: leaf.size,
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: leaf.delay,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-600/30">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
