// src/pages/HomePage.js
import React, { useRef, useEffect, useState } from 'react';
import SectionObserver from '../components/SectionObserver';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const showcaseProjectsData = [
  {
    id: 'project-site-1',
    title: 'MMGC Gaming Community',
    description: 'A thriving online platform for gamers, offering forums, events, and community features.',
    imageUrl: '/img/mmc1.png',
    liveLink: 'https://mmgc.live',
    previewHtml: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>MMGC Community Preview</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            body { font-family: 'Inter', sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f4f8; color: #334155; padding: 20px; text-align: center; }
            img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
            h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 10px; color: #1e293b; }
            p { font-size: 1rem; color: #475569; margin-bottom: 20px; }
            a { display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #fff; text-decoration: none; border-radius: 9999px; transition: background-color 0.3s ease; }
            a:hover { background-color: #2563eb; }
          </style>
      </head>
      <body>
          <img src="/img/mmc1.png" alt="MMGC" />
          <h1>MMGC Gaming Community</h1>
          <p>A thriving online platform for gamers, offering forums, events, and community features.</p>
          <a href="https://mmgc.live" target="_blank">Visit Site</a>
      </body>
      </html>
    `
  },
  {
    id: 'project-site-2',
    title: 'E-commerce Store Front',
    description: 'Modern e-commerce solution with cart and checkout.',
    imageUrl: 'https://placehold.co/800x450/cccccc/000000?text=E-commerce+Site',
    liveLink: '#',
    previewHtml: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>E-commerce Preview</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            body { font-family: 'Inter', sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f4f8; color: #334155; padding: 20px; text-align: center; }
            img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
            h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 10px; color: #1e293b; }
            p { font-size: 1rem; color: #475569; margin-bottom: 20px; }
            a { display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #fff; text-decoration: none; border-radius: 9999px; transition: background-color 0.3s ease; }
            a:hover { background-color: #2563eb; }
          </style>
      </head>
      <body>
          <img src="https://placehold.co/800x450/cccccc/000000?text=E-commerce+Site" alt="E-commerce Site" />
          <h1>E-commerce Store Front</h1>
          <p>Explore a seamless online shopping experience with our responsive and feature-rich e-commerce platform.</p>
          <a href="#" target="_blank">View Demo</a>
      </body>
      </html>
    `
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