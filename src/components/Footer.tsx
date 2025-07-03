import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#232323] text-[#f4f1e8] rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3),0_0_0_1px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]">
      {/* Decorative border animation */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-[expandContract_3s_ease-in-out_infinite]" />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-0 animate-[particleFloat_8s_ease-in-out_infinite]"
          style={{
            left: `${10 + i * 20}%`,
            animationDelay: `${i * 2}s`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-10 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInDown_1.2s_ease-out_0.3s_forwards]">
          <h1 className="font-playfair text-5xl md:text-6xl font-light text-[#d4af37] tracking-wider mb-4 relative inline-block cursor-default hover:animate-[titleGlow_0.8s_ease-in-out]">
            <span className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-px bg-[#d4af37] animate-[lineGrow_1.5s_ease-out_1s_forwards] origin-right scale-x-0" />
            SANDEEP STUDIO
            <span className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-px bg-[#d4af37] animate-[lineGrow_1.5s_ease-out_1s_forwards] origin-left scale-x-0" />
          </h1>
          <p className="text-xl text-[#b8a082] italic tracking-wider opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            Capturing Life's Precious Moments
          </p>
        </div>

        {/* Main Content - 3 columns layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information - First Column */}
          <div className="opacity-0 translate-y-10 animate-[slideUpFade_0.8s_ease-out_0.8s_forwards]">
            <h3 className="font-playfair text-2xl text-[#d4af37] mb-8 relative inline-block cursor-default after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent after:animate-[underlineExpand_1s_ease-out_2s_forwards] hover:after:animate-[underlinePulse_0.6s_ease-in-out]">
              Get In Touch
            </h3>
            <ul className="space-y-5">
              {[
                { icon: <MapPin className="w-7 h-7" />, text: '35MP+HRX, Harioudh Nagar, Azamgarh,\n Salempur, Uttar Pradesh 276001' },
                { icon: <Phone className="w-7 h-7" />, text: '+91 9305556846' },
                { icon: <Mail className="w-7 h-7" />, text: 'sandeepstudioazm@gmail.com' },
                { icon: <Clock className="w-7 h-7" />, text: 'Monday - Sonday\n9:00 AM - 7:00 PM' }
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center opacity-0 -translate-x-8 animate-[slideInLeft_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${1.5 + index * 0.2}s` }}
                >
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-[rgba(212,175,55,0.2)] mr-5 flex items-center justify-center before:absolute before:-inset-1/2 before:w-[200%] before:h-[200%] before:bg-conic-gradient before:from-transparent before:via-[rgba(212,175,55,0.3)] before:to-transparent before:animate-[iconRotate_3s_linear_infinite] before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                    {item.icon}
                  </div>
                  <span className="text-[#c4b598] text-sm whitespace-pre-line hover:text-[#f4f1e8] transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Second Column */}
          <div className="opacity-0 translate-y-10 animate-[slideUpFade_0.8s_ease-out_1s_forwards]">
            <h3 className="font-playfair text-2xl text-[#d4af37] mb-8 relative inline-block cursor-default after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent after:animate-[underlineExpand_1s_ease-out_2s_forwards] hover:after:animate-[underlinePulse_0.6s_ease-in-out]">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                'Wedding Photography',
                'Portrait Sessions',
                'Family Photography',
                'Event Photography',
                'Digital Photo Editing'
              ].map((service, index) => (
                <li
                  key={service}
                  className="flex items-center opacity-0 translate-y-5 animate-[fadeInUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${1.8 + index * 0.15}s` }}
                >
                  <span className="text-[#d4af37] mr-3 transition-transform">◆</span>
                  <span className="text-[#c4b598] hover:text-[#d4af37] hover:font-semibold transition-all">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media - Third Column */}
          <div className="opacity-0 translate-y-10 animate-[slideUpFade_0.8s_ease-out_1.2s_forwards]">
            <h3 className="font-playfair text-2xl text-[#d4af37] mb-8 relative inline-block cursor-default after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent after:animate-[underlineExpand_1s_ease-out_2s_forwards] hover:after:animate-[underlinePulse_0.6s_ease-in-out]">
              Follow Sandeep Studio
            </h3>
            <div className="flex justify-center gap-5 mt-6 mr-20 flex-wrap">
              {[
                { icon: <Instagram className="w-7 h-7" />, url: 'https://www.instagram.com/sandeepstudioazamgarh?igsh=MXNudzhrZWsxZjB5NA==' },
                { icon: <Youtube className="w-7 h-7" />, url: 'https://youtube.com/@sandeepstudiomixinglabazam2967?si=4my5jE5nApWPOQOh' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border-2 border-[rgba(212,175,55,0.2)] bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-[rgba(212,175,55,0.05)] flex items-center justify-center text-[#d4af37] opacity-0 scale-0 rotate-180 animate-[socialPop_0.6s_ease-out_forwards] hover:border-[#d4af37] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-2 hover:scale-110 transition-all"
                  style={{ animationDelay: `${2.0 + index * 0.2}s` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Navigation */}
        <div className="border-t border-[rgba(212,175,55,0.2)] pt-10 text-center opacity-0 animate-[fadeIn_1s_ease-out_3s_forwards]">
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'Portfolio', 'About', 'Services', 'Contact', 'Testimonials'].map((item) => {
              const path = item.toLowerCase() === 'home' ? '/Reactapp/' : `/Reactapp/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  className="relative text-[#c4b598] text-sm px-4 py-2 rounded-full hover:text-[#d4af37] hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-[rgba(212,175,55,0.1)] before:to-transparent before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <p className="text-[#8a7960] text-sm italic">
            © {new Date().getFullYear()} Sandeep Studio. All rights reserved. | Crafted with passion for photography.
          </p>
        </div>
      </div>

      {/* Background animations */}
      <style>{`
        @keyframes expandContract {
          0%, 100% { width: 150px; opacity: 0.6; }
          50% { width: 250px; opacity: 1; }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(100px); opacity: 0; }
          10%, 90% { opacity: 0.3; }
          50% { transform: translateY(-100px); opacity: 0.6; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
          50% { text-shadow: 0 0 30px rgba(212, 175, 55, 0.6), 0 0 50px rgba(212, 175, 55, 0.4); }
        }
        @keyframes lineGrow {
          to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideUpFade {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes underlineExpand {
          to { width: 120%; }
        }
        @keyframes underlinePulse {
          0%, 100% { height: 2px; }
          50% { height: 4px; }
        }
        @keyframes slideInLeft {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes iconRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes socialPop {
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;