const HistoryPage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-serif text-gray-800 leading-relaxed bg-[#4e4b51]">
      {/* Floating Particles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/60 rounded-full animate-float"
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs Background */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(222, 184, 135, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(244, 164, 96, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(210, 180, 140, 0.1) 0%, transparent 50%)
          `,
          animation: 'floatingOrbs 20s ease-in-out infinite'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="mt-16">
            <h1
              className="text-4xl sm:text-5xl font-morva text-shadow bg-yellow-400"
              style={{
                background: 'linear-gradient(45deg, #d1691e, #f4a460)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'fadeInUp 1s ease-out, textGlow 3s ease-in-out infinite'
              }}
            >
              Our History
            </h1>
            <p className="text-lg sm:text-xl text-black mt-4 Apercu">
              Three decades of capturing life's precious moments
            </p>
          </div>
        </div>

        {/* History Content */}
        <div className="animate-slideInRight">
          <div
            className="bg-[#f7eedb] p-6 sm:p-8 rounded-xl shadow-lg border border-[#F4A460]/20 relative overflow-hidden"
            style={{
              animation: 'cardFloat 8s ease-in-out infinite'
            }}
          >
            <h2 className="text-3xl font-display bg-yellow-400 mb-6 pb-2 border-b-2 border-white rounded-lg">
              Our Journey
            </h2>

            <p className="text-lg mb-6 text-justify text-gray-700 Apercu">
              In 1993, with nothing but a passion for capturing life's most precious moments and a single camera, our founder established what would become one of the region's most trusted photography studios. What started as a small venture in a modest space has grown into a legacy of excellence spanning over three decades.
            </p>

            <div
              className="bg-gradient-to-r bg-yellow-400 text-black p-4 sm:p-6 rounded-lg my-6 relative overflow-hidden transition-transform duration-300 hover:translate-x-2 hover:scale-[1.02] border-white"
              style={{
                animation: 'milestoneGlow 3s ease-in-out infinite'
              }}
            >
              <h3 className="text-xl sm:text-2xl font-display mb-2">1993 - The Beginning</h3>
              <p>Founded with a vision to create timeless memories through the art of photography</p>
            </div>

            <p className="text-lg mb-6 text-justify text-gray-700 Apercu">
              Throughout the years, we've had the privilege of documenting countless weddings, family portraits, corporate events, and special occasions. Our commitment to artistic excellence and personalized service has made us a trusted name in the community.
            </p>

            <div
              className="bg-gradient-to-r bg-yellow-400 text-black p-4 sm:p-6 rounded-lg my-6 relative overflow-hidden transition-transform duration-300 hover:translate-x-2 hover:scale-[1.02] border-white"
              style={{
                animation: 'milestoneGlow 3s ease-in-out infinite'
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-display">2000s - Growth & Innovation</h3>
              <p className="Apercu">Embraced digital technology while maintaining our commitment to artistic integrity</p>
            </div>

            <p className="text-lg mb-6 text-justify text-gray-700 Apercu">
              Today, we continue to blend traditional photography techniques with modern technology, ensuring that every client receives not just photographs, but treasured memories that will last a lifetime. Our studio remains dedicated to the same principles that guided us from day one: quality, creativity, and genuine care for our clients.
            </p>

            <div className="h-1 bg-gradient-to-r bg-yellow-400 my-8 rounded-full border-white" />

            <p className="text-lg italic text-gray-700">
              "Every photograph tells a story, and we're honored to be part of yours."
            </p>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatingOrbs {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
        }

        @keyframes textGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes milestoneGlow {
          0%, 100% { box-shadow: 0 5px 15px rgba(222, 184, 135, 0.3); }
          50% { box-shadow: 0 10px 25px rgba(222, 184, 135, 0.5); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default HistoryPage;
