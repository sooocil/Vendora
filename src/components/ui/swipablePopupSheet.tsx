'use client'

import * as React from 'react'
import { motion, AnimatePresence, useMotionValue, useAnimation, PanInfo } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SwipablePopupSheetProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
  title?: string
  description?: string
  showCloseButton?: boolean
  showDragHandle?: boolean
  maxHeight?: string
  snapPoints?: number[]
}

export function SwipablePopupSheet({
  children,
  open,
  onOpenChange,
  className,
  title,
  description,
  showCloseButton = true,
  showDragHandle = true,
  maxHeight = '90vh',
  snapPoints = [0.3, 0.6, 0.9]
}: SwipablePopupSheetProps) {
  const y = useMotionValue(0)
  const controls = useAnimation()
  const sheetRef = React.useRef<HTMLDivElement>(null)

  // This function closes the sheet with a sliding animation
  const closeSheet = React.useCallback(async () => {
    await controls.start({ 
      y: '100%', 
      transition: { duration: 0.25, ease: 'easeInOut' } 
    })
    onOpenChange(false)
  }, [controls, onOpenChange])

  // When the sheet opens, this makes it slide up from the bottom
  React.useEffect(() => {
    if (open) {
      y.set(0)
      controls.start({ 
        y: 0, 
        transition: { 
          type: 'spring', 
          stiffness: 400, 
          damping: 30,
          mass: 0.8
        } 
      })
    }
  }, [open, y, controls])

  // This handles what happens when you finish dragging the sheet
  const handleDragEnd = React.useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 150
      const velocity = info.velocity.y
      const offset = info.offset.y

      // If you drag down far enough or quickly, the sheet closes
      if (offset > threshold || velocity > 800) {
        closeSheet()
        return
      }

      // Otherwise, the sheet bounces back to its open position
      controls.start({ 
        y: 0, 
        transition: { 
          type: 'spring', 
          stiffness: 300, 
          damping: 25 
        } 
      })
    },
    [controls, closeSheet]
  )

  // This closes the sheet when you click on the dark background
  const handleBackdropClick = React.useCallback(() => {
    closeSheet()
  }, [closeSheet])

  // This stops the page from scrolling when the sheet is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [open])

  // This lets you close the sheet by pressing the Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        closeSheet()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, closeSheet])

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* This is the dark background that appears behind the sheet */}
          <motion.div
            className="fixed inset-0 mb-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          {/* This is the main sheet that slides up from the bottom */}
          <motion.div
            ref={sheetRef}
            style={{ y , maxHeight }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0, bottom: 0.2 }}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            animate={controls}
            className={cn(
              'fixed bottom-0 mb-10 left-0 right-0 z-50',
              'bg-background border-t border-border',
              'rounded-2xl shadow-2xl',
              'flex flex-col',
              'max-w-lg mx-auto',
              'will-change-transform', // This helps make animations smoother
              className
            )}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            exit={{ 
              y: '100%',
              transition: { duration: 0.25, ease: 'easeInOut' }
            }}
          >
            {/* This is the little gray bar you can drag to move the sheet */}
            {showDragHandle && (
              <div className="w-full flex justify-center py-3 cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1.5 rounded-full bg-muted-foreground/40 transition-colors hover:bg-muted-foreground/60" />
              </div>
            )}

            {/* This section shows the title, description, and close button */}
            {(title || description || showCloseButton) && (
              <div className="flex items-start justify-between px-6 py-4 border-b border-border">
                <div className="flex-1">
                  {title && (
                    <h2 className="text-lg font-semibold text-foreground leading-tight">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {description}
                    </p>
                  )}
                </div>
                
                {showCloseButton && (
                  <button
                    onClick={closeSheet}
                    className="ml-4 p-2 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}

            {/* This is where the main content of the sheet goes */}
            <div className="flex-1 overflow-auto px-6 py-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
