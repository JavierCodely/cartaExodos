import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const text = 'NUEVOS PRECIOS';
  const repeatedText = Array(20).fill(text).join(' ★ ');

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
      <div className="relative w-full overflow-hidden bg-yellow-400 border-y-4 border-yellow-500 py-2 shadow-lg">
        {/* Efecto de sombra LED */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-50"></div>

        {/* Contenedor de la animación */}
        <div className="relative flex animate-marquee whitespace-nowrap">
          <span className="text-black font-black text-2xl md:text-3xl tracking-wider font-mono px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {repeatedText}
          </span>
          <span className="text-black font-black text-2xl md:text-3xl tracking-wider font-mono px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {repeatedText}
          </span>
        </div>
      </div>
    </>
  );
};
