import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import StickyBookNow from './components/StickyBookNow';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import History from './pages/History';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Track current route

  useEffect(() => {
    // Check if it's the initial load (no localStorage flag)
    const isInitialLoad = !localStorage.getItem('hasVisited');

    // Check if the user refreshed the homepage
    const isHomeRefresh = location.pathname === '/' && performance.navigation.type === 1;

    // Show loader only on initial load or homepage refresh
    if (isInitialLoad || isHomeRefresh) {
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true'); // Mark as visited
      }, 5000); // 5-second loader
      
      return () => clearTimeout(timeout);
    } else {
      setLoading(false); // Hide loader immediately for other cases
    }
  }, [location.pathname]); // Re-run when route changes

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
}

// Wrap App with Router to use useLocation
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
