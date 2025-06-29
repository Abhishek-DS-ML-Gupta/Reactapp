import { useEffect, useState } from 'react';

const loadingSteps = [
  'Initializing Camera...',
  'Loading Lenses...',
  'Adjusting Focus...',
  'Preparing Gallery...',
  'Almost Ready...',
  'Welcome!',
];

export default function Preloader() {
  const [progress, setProgress] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 800);

    const flashInterval = setInterval(() => {
      const el = document.getElementById('preloader');
      if (el) {
        el.style.filter = 'brightness(2)';
        setTimeout(() => (el.style.filter = 'brightness(1)'), 100);
      }
    }, 6000);

    const maxTimeout = setTimeout(triggerFadeOut, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(flashInterval);
      clearTimeout(maxTimeout);
    };
  }, []);

  useEffect(() => {
    if (progress === loadingSteps.length - 1) {
      setTimeout(triggerFadeOut, 3000);
    }
  }, [progress]);

  const triggerFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      const el = document.getElementById('preloader');
      if (el) el.style.display = 'none';
    }, 1200);
  };

  return (
    <>
      <div
        id="preloader"
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-[10000] transition-all duration-[1200ms] ${
          fadeOut ? 'opacity-0 scale-110 invisible' : ''
        }`}
      >
        <div id="particles" className="absolute inset-0 overflow-hidden"></div>

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`bokeh-light bokeh-${i}`}></div>
        ))}

        <div className="relative mb-10 camera-container">
          <div className="camera-lens">
            <div className="lens-ring outer-ring"></div>
            <div className="lens-ring middle-ring"></div>
            <div className="lens-ring inner-ring"></div>
            <div className="aperture-center"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`aperture-blade blade-${i + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="text-center text-white">
          <div className="text-[28px] font-light tracking-[3px] font-serif mb-2 brand-name">
            SANDEEP STUDIO
          </div>
          <div className="text-sm tracking-[2px] uppercase opacity-70 mb-6">
            {loadingSteps[progress]}<span className="loading-dots">...</span>
          </div>

          <div className="relative w-[250px] h-[1px] bg-white/10 rounded overflow-hidden">
            <div className="progress-bar h-full"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-white/60 font-light">
              Loading Gallery
            </div>
          </div>
        </div>

        <div className="flash-overlay absolute inset-0 pointer-events-none"></div>
      </div>

      {/* Inline animation styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&family=Inter:wght@300;400;500&display=swap');

        .camera-lens {
          width: 120px;
          height: 120px;
          position: relative;
          transform-style: preserve-3d;
          animation: lens-rotate 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .lens-ring {
          position: absolute;
          border-radius: 50%;
          border: 3px solid transparent;
          animation: ring-pulse 2s ease-in-out infinite;
        }

        .outer-ring {
          width: 120px;
          height: 120px;
          border: 3px solid #fff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1);
          animation: outer-rotate 3s linear infinite;
        }

        .middle-ring {
          width: 90px;
          height: 90px;
          top: 15px;
          left: 15px;
          border: 2px solid #ff6b6b;
          box-shadow: 0 0 15px rgba(255, 107, 107, 0.5), inset 0 0 15px rgba(255, 107, 107, 0.2);
          animation: middle-rotate 2s linear infinite reverse;
        }

        .inner-ring {
          width: 60px;
          height: 60px;
          top: 30px;
          left: 30px;
          border: 2px solid #4ecdc4;
          box-shadow: 0 0 10px rgba(78, 205, 196, 0.6), inset 0 0 10px rgba(78, 205, 196, 0.3);
          animation: inner-rotate 1.5s linear infinite;
        }

        .aperture-center {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 45px;
          left: 45px;
          background: radial-gradient(circle, #fff 0%, transparent 70%);
          border-radius: 50%;
          animation: aperture-pulse 1s ease-in-out infinite alternate;
        }

        .aperture-blade {
          position: absolute;
          width: 20px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #ccc);
          top: 58px;
          left: 50px;
          transform-origin: center;
          animation: blade-rotate 3s linear infinite;
        }

        .blade-1 { transform: rotate(0deg); animation-delay: 0s; }
        .blade-2 { transform: rotate(45deg); animation-delay: 0.1s; }
        .blade-3 { transform: rotate(90deg); animation-delay: 0.2s; }
        .blade-4 { transform: rotate(135deg); animation-delay: 0.3s; }
        .blade-5 { transform: rotate(180deg); animation-delay: 0.4s; }
        .blade-6 { transform: rotate(225deg); animation-delay: 0.5s; }
        .blade-7 { transform: rotate(270deg); animation-delay: 0.6s; }
        .blade-8 { transform: rotate(315deg); animation-delay: 0.7s; }

        .progress-bar {
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #fff);
          animation: progress-fill 4s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .bokeh-light {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
          animation: bokeh-float 8s ease-in-out infinite;
          filter: blur(1px);
        }

        .bokeh-1 { width: 40px; height: 40px; top: 20%; left: 15%; animation-delay: 0s; }
        .bokeh-2 { width: 25px; height: 25px; top: 60%; left: 80%; animation-delay: 2s; }
        .bokeh-3 { width: 30px; height: 30px; top: 30%; left: 70%; animation-delay: 4s; }
        .bokeh-4 { width: 20px; height: 20px; top: 80%; left: 20%; animation-delay: 6s; }

        .flash-overlay {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: camera-flash 6s ease-in-out infinite;
        }

        @keyframes lens-rotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(15deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-15deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }

        @keyframes outer-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes middle-rotate { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        @keyframes inner-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes aperture-pulse {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes blade-rotate {
          0% { transform: rotate(var(--rotation, 0deg)) scaleX(1); }
          50% { transform: rotate(calc(var(--rotation, 0deg) + 180deg)) scaleX(0.8); }
          100% { transform: rotate(calc(var(--rotation, 0deg) + 360deg)) scaleX(1); }
        }

        @keyframes progress-fill {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 100%; }
        }

        @keyframes camera-flash {
          0%, 90% { opacity: 0; }
          95% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes bokeh-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }

        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </>
  );
}
