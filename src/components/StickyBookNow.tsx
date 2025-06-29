import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const StickyBookNow = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919305556846', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      <Link
        to="/contact"
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 glow-btn text-center"
      >
        Book Now
      </Link>
    </div>
  );
};

export default StickyBookNow;