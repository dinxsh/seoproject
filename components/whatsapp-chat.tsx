"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your inverter solutions. Can you provide more information?"
    const phoneNumber = "919962861772"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          <span className="text-[10px]">1</span>
        </div>
      </button>
    </div>
  )
}
