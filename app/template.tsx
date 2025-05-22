'use client'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react';
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ clipPath: 'circle(0%)' }}
        animate={{ clipPath: 'circle(150%)' }}
        exit={{ clipPath: 'circle(0%)' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        >
        {children}

      </motion.div>
    </AnimatePresence>
  )
}