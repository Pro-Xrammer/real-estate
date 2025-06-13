"use client"

import { useEffect, useRef } from "react"

export default function MountainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawMountains = () => {
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Mountain layers with different opacities
      const mountains = [
        { peaks: 8, height: 0.7, opacity: 0.1, color: "#2d5016" },
        { peaks: 6, height: 0.6, opacity: 0.15, color: "#3d6b1f" },
        { peaks: 4, height: 0.5, opacity: 0.2, color: "#4d7c2a" },
      ]

      mountains.forEach((mountain, index) => {
        ctx.beginPath()
        ctx.moveTo(0, height)

        // Create mountain silhouette
        for (let i = 0; i <= mountain.peaks; i++) {
          const x = (width / mountain.peaks) * i
          const peakHeight = height * mountain.height + Math.sin(i * 0.5) * 50
          const y = height - peakHeight

          if (i === 0) {
            ctx.lineTo(x, y)
          } else {
            const prevX = (width / mountain.peaks) * (i - 1)
            const midX = (prevX + x) / 2
            const midY = y + Math.random() * 30 - 15
            ctx.quadraticCurveTo(midX, midY, x, y)
          }
        }

        ctx.lineTo(width, height)
        ctx.closePath()

        ctx.fillStyle = mountain.color
        ctx.globalAlpha = mountain.opacity
        ctx.fill()
      })

      ctx.globalAlpha = 1
    }

    resizeCanvas()
    drawMountains()

    window.addEventListener("resize", () => {
      resizeCanvas()
      drawMountains()
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
