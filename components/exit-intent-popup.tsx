"use client"

import { useState, useEffect } from "react"
import { X, Download, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Gift className="h-8 w-8 text-primary" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900">
            Wait! Don't Miss Out
          </h3>
          
          <p className="text-gray-600">
            Get our exclusive inverter buying guide and 10% off your first purchase!
          </p>
          
          <div className="space-y-3">
            <Button 
              variant="outline"
              onClick={() => {
                window.open('tel:+919962861772', '_blank')
                setIsVisible(false)
              }}
              className="w-full"
            >
              Call for 10% Discount
            </Button>
          </div>
          
          <p className="text-xs text-gray-500">
            *Limited time offer. Valid for new customers only.
          </p>
        </div>
      </div>
    </div>
  )
}
