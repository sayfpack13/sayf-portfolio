// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';


// --- Main App Component ---
const AppWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sync currentPage with URL
  const [currentPage, setCurrentPage] = useState(() => {
    return location.pathname === '/portfolio' ? 'portfolio-page' : 'home-page';
  });

  const sectionRefs = useRef({});

  const setSectionRef = (node, id) => {
    if (node) sectionRefs.current[id] = node;
  };

  // Scroll on page change
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = sectionRefs.current[currentPage];
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // Handle route changes
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPage('home-page');
    } else if (location.pathname === '/portfolio') {
      setCurrentPage('portfolio-page');
    }
  }, [location]);

  const handleNavClick = (pageId) => {
    if (pageId === 'home-page') {
      navigate('/');
    } else if (pageId === 'portfolio-page') {
      navigate('/portfolio');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">
      {/* Font Awesome CDN for icons */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      {/* Typed.js CDN for typing effect */}
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* Custom animations */
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 1s ease-out forwards; }
        /* Responsive video container for PortfolioSection */
        .portfolio-video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            border-radius: 0.5rem; /* rounded-t-lg */
        }
        .portfolio-video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
      `}</style>

      <Header
        currentPage={currentPage}
        setCurrentPage={handleNavClick}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage setSectionRef={setSectionRef} />}
        />
        <Route
          path="/portfolio"
          element={<PortfolioPage setSectionRef={setSectionRef} />}
        />
      </Routes>

      <Footer
        scrollToTop={() => {
          const targetId = currentPage === 'home-page' ? 'home' : 'portfolio';
          const element = sectionRefs.current[targetId];
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYCOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
};

// Main App component wrapped with Router
const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;