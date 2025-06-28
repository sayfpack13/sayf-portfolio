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

  const [currentPage, setCurrentPage] = useState(() => {
    return location.pathname === '/portfolio' ? 'portfolio-page' : 'home-page';
  });


  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const audioRef = useRef(null);

  const startupSounds = [
    '/sounds/startup/1.mp3',
    '/sounds/startup/2.mp3',
    '/sounds/startup/3.mp3',
    // Add more paths if needed
  ];

  // Function to handle user interaction and play audio
  const handleEnterSite = () => {
    // Select random audio
    const randomSound = startupSounds[Math.floor(Math.random() * startupSounds.length)];
    setSelectedAudio(randomSound);
    setHasEnteredSite(true);

    // Play after setting src
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    }, 50);
  };


  const sectionRefs = useRef({});

  const setSectionRef = (node, id) => {
    if (node) sectionRefs.current[id] = node;
  };

  // Scroll on page change
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = sectionRefs.current[currentPage];
      if (element) {
        // Ensure window.pageYOffset is used for broader compatibility
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

  useEffect(() => {
    const randomSound = startupSounds[Math.floor(Math.random() * startupSounds.length)];
    setSelectedAudio(randomSound);
  }, []);





  const handleNavClick = (pageId) => {
    if (pageId === 'home-page') {
      navigate('/');
    } else if (pageId === 'portfolio-page') {
      navigate('/portfolio');
    }
  };




  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">
      <audio ref={audioRef} src={selectedAudio} preload="auto" />

      {/* Conditional rendering for the introductory overlay */}
      {!hasEnteredSite ?
        <div className="intro-overlay">
          <h1>Welcome!</h1>
          <button className='bg-blue-600 hover:bg-blue-700 text-white' onClick={handleEnterSite}>
            Enter Website
          </button>
        </div>
        :

        <>
          {/* Main application content, conditionally hidden until user enters */}
          <div className={!hasEnteredSite ? 'hidden' : ''}>
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
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
          </div>
        </>
      }


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
