// src/pages/HomePage.js
import React, { useRef, useEffect, useState } from 'react';
import SectionObserver from '../components/SectionObserver';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const showcaseProjectsData = [
  {
    id: 'project-site-3',
    title: 'TrustQuery',
    description: 'A scalable and fast search engine for managing and searching large datasets, featuring an admin dashboard, public search, JWT authentication, and interactive globe visualization.',
    imageUrl: 'img/trustquery.svg',
    liveLink: 'https://trustquery.sayfaio.com',
    sourceCodeLink: 'https://github.com/sayfpack13/TrustQuery',
  },
];

const typingPhrases = [
  "I'm a Full Stack Developer.",
  "I'm a React.js enthusiast.",
  "I build stunning web experiences.",
  "I am Sayf Rourou."
];

const HomePage = ({ setSectionRef }) => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = typingPhrases[phraseIndex];
      if (isDeleting) {
        // Deleting effect
        if (charIndex > 0) {
          setTypedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to the next phrase after deleting
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % typingPhrases.length);
        }
      } else {
        // Typing effect
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause and then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 20 : 70;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      <Helmet>
        <title>Home - Sayf Rourou's Developer Hub</title>
        <meta name="description" content="Welcome to my developer hub! Explore innovative projects, contribute to open-source, and connect with the coding community." />
      </Helmet>
      <Header setSectionRef={setSectionRef} />

      {/* Full-screen hero section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Background pattern/animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
          ></motion.div>
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        <div className="relative z-10 text-center text-white p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-6xl font-bold mb-4">Hello,</h2>
  
            <div className="min-h-[50px] sm:min-h-[70px]">
              <p className="text-2xl sm:text-4xl font-light tracking-wide">
                <span className="font-mono">{typedText}</span>
                <span className="font-mono animate-pulse">|</span>
              </p>
            </div>
            <motion.a
              href="#featured-projects"
              className="mt-12 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2 }}
            >
              Explore My Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      <SectionObserver sectionId="featured-projects" setSectionRef={setSectionRef}>
        <div className="container mx-auto py-16 px-4">
          <div className="relative flex items-center justify-center mb-12">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>Projects</h1>
            <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">Featured Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionObserver>

      {/* Other sections can be added here */}
    </>
  );
};

export default HomePage;