import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=923158494192&text=Hi%20Abdul%20Haseeb!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'm%20looking%20for%20a%20Full%20Stack%20Developer%20for%20a%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.%20If%20you're%20available,%20please%20let%20me%20know.%0A%0ALooking%20forward%20to%20connecting!";

  return (
    <div className="fixed bottom-24 right-6 z-40 group flex flex-col items-end gap-2">
      {/* Tooltip Label */}
      <span className="opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 bg-gray-950/90 border border-emerald-500/30 text-white font-sans text-xs px-3.5 py-1.5 rounded-xl shadow-xl transition-all duration-300 select-none pointer-events-none whitespace-nowrap mb-1 flex items-center gap-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
        Let's Chat on WhatsApp
      </span>

      {/* Main Pulse Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-14 w-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/30 text-white flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 hover:scale-110 shadow-emerald-950/30 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow Ring Anim */}
        <span className="absolute inset-0 rounded-2xl bg-emerald-500/20 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Icon SVG */}
        <svg 
          className="h-7 w-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.861-9.73.001-2.592-1.01-5.029-2.847-6.868C16.65 2.167 14.218 1.16 11.63 1.16c-5.442 0-9.863 4.384-9.866 9.73-.001 1.764.484 3.487 1.404 5.013l-.924 3.376 3.463-.923zm11.238-6.163c-.301-.151-1.784-.882-2.057-.981-.273-.099-.471-.148-.669.151-.197.299-.765.981-.938 1.18-.173.197-.347.222-.648.072-.3-.151-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.671-2.083-.174-.3-.019-.462.13-.611.135-.134.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.613-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.784-.73 2.037-1.437.254-.707.254-1.313.178-1.437-.076-.124-.272-.198-.57-.349z" />
        </svg>
      </a>
    </div>
  );
}
