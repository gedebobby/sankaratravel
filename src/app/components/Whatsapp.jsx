import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281337921417?text=Hello%20Aryana%20Tour%2C%20I%20would%20like%20to%20book%20a%20transport%20tour."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition duration-300"
    >
      <MessageCircle size={30} strokeWidth={2.2} />
    </a>
  );
}
