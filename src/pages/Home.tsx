import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Award, Users, Camera, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import main from './main.png';

const Home = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize Canvas Nebula
    function initCanvasNebula() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx || !canvasRef.current) return;

      const container = canvasRef.current;
      // Remove any existing canvas before appending a new one
      Array.from(container.getElementsByTagName('canvas')).forEach(existingCanvas => {
        container.removeChild(existingCanvas);
      });
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      container.appendChild(canvas);

      const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6,
        speed: Math.random() * 1 + 0.1,
        hue: Math.random() * 60 + 200
      }));

      let animationId: number;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Nebula gradient
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
        );
        gradient.addColorStop(0, 'rgba(138, 43, 226, 0.1)');
        gradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Animate stars
        stars.forEach(star => {
          ctx.beginPath();
          ctx.fillStyle = `hsl(${star.hue}, 100%, 70%)`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsl(${star.hue}, 100%, 70%)`;
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
          
          star.y += star.speed;
          star.hue += 0.1;
          
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
        
        ctx.shadowBlur = 0;
        animationId = requestAnimationFrame(animate);
      };

      const handleResize = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      };

      window.addEventListener('resize', handleResize);
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (container.contains(canvas)) {
          container.removeChild(canvas);
        }
      };
    }

    const cleanup = initCanvasNebula();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup?.();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Canvas Nebula Background */}
      <div 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax"
          style={{ '--parallax-offset': `${parallaxOffset}px` } as React.CSSProperties}
        >
          <img
            src={main}
            alt="Wedding Photography"
            className="w-full h-full object-cover mb-10"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Framing Your
              <span className="block text-yellow-500 font-morva">Best Moments</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-sinkin">
              Professional wedding, pre-wedding, and event photography that captures the essence of your special moments.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sandeep-studio/portfolio"
                className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 glow-btn font-sinkin"
              >
                View Portfolio
              </Link>
              <Link
                to="/sandeep-studio/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 font-sinkin"
              >
                Book Now
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#3E3D53]/90 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sinkin">
                From intimate moments to grand celebrations, we capture it all with artistic precision.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8" />,
                title: 'Wedding Photography',
                description: 'Capturing your special day with timeless elegance',
                image: 'https://img.freepik.com/premium-photo/photo-indian-wedding-couple-photography_1235950-83425.jpg'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Pre-Wedding Shoots',
                description: 'Romantic sessions that tell your love story',
                image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/5d58e4d7-96df-43f4-a490-6b85bd84fd76/e96200ac-9a24-4055-8143-3dfeb1857624.png'
              },
              {
                icon: <Play className="h-8 w-8" />,
                title: 'Birthday Photography',
                description: 'Professional videography with cinematic quality',
                image: 'https://img.freepik.com/premium-photo/happy-birthday-116_1107970-10817.jpg'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Event Photography',
                description: 'Capturing the essence of your events with creativity',
                image: 'https://img.freepik.com/premium-photo/wedding-stage-indian-marriage_747653-997.jpg'
              }
            ].map((service, index) => (
              <AnimatedSection key={service.title} animation="scale-in" delay={index * 100}>
                <div className="group bg-gray-800/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-yellow-500 mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-morva">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-sinkin">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#202020]/90 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Couples' },
              { number: '1000+', label: 'Events Covered' },
              { number: '8+', label: 'Years Experience' },
              { number: '50K+', label: 'Photos Delivered' }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-in-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg font-sinkin">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Work Section */}
      <section className="py-20 bg-[#232023]/90 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Feature Work
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sinkin">
                Explore the signature experiences we specialize in at our studio.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8" />,
                title: 'Wedding Coverage',
                image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Couple Shoots',
                image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
              },
              {
                icon: <Play className="h-8 w-8" />,
                title: 'Cinematic Videos',
                image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?cs=srgb&dl=pexels-brunomassao-2873486.jpg&fm=jpg',
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Award Shows & Stage Events',
                image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: 'Fashion & Portfolio',
                image: 'https://images.pexels.com/photos/2860808/pexels-photo-2860808.jpeg',
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: 'Indoor Portraits',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} animation="scale-in" delay={index * 100}>
                <div className="group relative rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 bg-gray-800/80 backdrop-blur-sm">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6 text-center">
                    <div className="text-yellow-500 mb-3 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-morva">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#FFDF58] overflow-hidden">
        {/* Animated Circles */}
        <svg className="absolute top-8 left-8 w-56 h-56 opacity-20 z-0">
          <circle cx="100" cy="100" r="80" fill="black" />
          <circle
            cx="100"
            cy="100"
            r="10"
            fill="white"
            className="animate-pulse-fast"
          />
        </svg>

        <svg className="absolute bottom-24 right-8 w-52 h-52 opacity-20 z-0">
          <circle cx="100" cy="100" r="70" fill="black" />
          <circle
            cx="100"
            cy="100"
            r="6"
            fill="white"
            className="animate-spin-slow"
          />
        </svg>

        <svg className="absolute top-1/2 left-[20%] w-48 h-48 opacity-15 z-0 transform -translate-y-1/2">
          <circle cx="100" cy="100" r="60" fill="black" />
          <circle
            cx="80"
            cy="80"
            r="5"
            fill="white"
            className="animate-bounce-mini"
          />
        </svg>

        <svg className="absolute bottom-0 left-[67%] w-60 h-60 opacity-20 z-0">
          <circle cx="100" cy="100" r="75" fill="black" />
          <circle
            cx="120"
            cy="80"
            r="8"
            fill="white"
            className="animate-ping-fast"
          />
        </svg>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-800 mb-8 font-sinkin">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Link to="/sandeep-studio/contact"
            className="relative inline-block px-8 py-4 bg-black text-white rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300">
            Get In Touch
            <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-10 z-[-1]"></span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;