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
  const location = useLocation();

  useEffect(() => {
    const isInitialLoad = !localStorage.getItem('hasVisited');
    const isHomeRefresh = location.pathname === '/' && performance.navigation.type === 1;

    if (isInitialLoad || isHomeRefresh) {
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 5000);

      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/Reactapp/" element={<Home />} />
          <Route path="/Reactapp/history" element={<History />} />
          <Route path="/Reactapp/portfolio" element={<Portfolio />} />
          <Route path="/Reactapp/about" element={<About />} />
          <Route path="/Reactapp/services" element={<Services />} />
          <Route path="/Reactapp/testimonials" element={<Testimonials />} />
          <Route path="/Reactapp/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
}

// Inline scroll-to-top handler
function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

// Wrap App with Router and scroll-to-top logic
export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <App />
    </Router>
  );
}
