import React from 'react';

const DiagonalBanner: React.FC = () => {
  return (
    <>
      <style>
        {`
           @keyframes slide-horizontal {
             0% {
               transform: translateX(0%);
             }
             100% {
               transform: translateX(-100%);
             }
           }
           
           .animate-slide-horizontal {
             animation: slide-horizontal 12s linear infinite;
           }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .animate-slide-horizontal {
              animation-duration: 15s;
            }
          }
          
          @media (max-width: 480px) {
            .animate-slide-horizontal {
              animation-duration: 18s;
            }
          }
        `}
      </style>
      
      {/* White space above banner */}
      <div className="bg-white py-8"></div>
      
      {/* Diagonal Banner */}
      <div className="relative h-16 w-full overflow-hidden bg-[rgb(12,35,39)]" style={{ clipPath: 'polygon(0% 100%, 100% 30%, 100% 100%)' }}>
        <div className="absolute inset-0 flex items-center" style={{ transform: 'translateY(6px)' }}>
          <div className="absolute left-0 flex animate-slide-horizontal whitespace-nowrap" style={{ transform: 'translateX(0%)' }}>
            <div className="flex items-center">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-lg font-bold text-white tracking-wider select-none">NIRVAHA</span>
                  <span className="text-2xl text-yellow-400">⭐</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DiagonalBanner;
