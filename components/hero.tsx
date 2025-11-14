"use client"

import { Button } from "@/components/ui/3d-button"
import { Heart, Baby } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="px-6 min-h-screen items-center flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
    
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] mb-6 text-balance"
        >
          Prevent Stunting,{" "}
          <span className="inline-flex items-center gap-3">
            Nurture Love
          
            From
          </span>{" "}
          The Womb
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Every nutrient and care during pregnancy determines your little one's future.
          Learn how to maintain a healthy pregnancy and prevent stunting from early on — with practical and trusted guidance.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] hover:from-[#16403f] hover:to-[#245856] border-[#0f2e2d]">
            🎀 Start Your Healthy Journey Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
