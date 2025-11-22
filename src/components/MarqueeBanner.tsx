import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const text = 'DESCUENTO EN EFECTIVO';
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
          animation: marquee 9s linear infinite;
        }
      `}</style>
      <div className="sticky top-0 z-40 w-full overflow-hidden bg-green-500 border-y-4 border-green-600 py-2 shadow-lg" style={{
        boxShadow: '0 0 20px rgba(34,197,94,0.8), 0 0 40px rgba(34,197,94,0.6)'
      }}>
        {/* Efecto de sombra LED */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-50"></div>

        {/* Contenedor de la animación */}
        <div className="relative flex animate-marquee whitespace-nowrap">
          <span className="text-black font-black text-2xl md:text-3xl tracking-wider font-mono px-4" style={{
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 2px 2px rgba(0,0,0,0.3)'
          }}>
            {repeatedText}
          </span>
          <span className="text-black font-black text-2xl md:text-3xl tracking-wider font-mono px-4" style={{
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 2px 2px rgba(0,0,0,0.3)'
          }}>
            {repeatedText}
          </span>
        </div>
      </div>
    </>
  );
};
