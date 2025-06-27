// src/components/Footer.js
import React from 'react';

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mt-16 py-12 px-6 rounded-t-3xl shadow-2xl">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-4 drop-shadow-md">sayfaio</h3>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
          Innovating one project at a time. Let's build something amazing together.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-10">
          <a
            href="https://cutt.ly/sayf-fb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition-all duration-300 hover:scale-125 hover:text-blue-300 ease-in-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a
            href="https://cutt.ly/sayf-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition-all duration-300 hover:scale-125 hover:text-blue-300 ease-in-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        <p className="text-blue-300 text-sm mb-2">
          &copy; {new Date().getFullYear()} sayfaio. All rights reserved.
        </p>
        <p className="text-blue-400 text-xs">
          Built with <span className="text-red-400">&hearts;</span> by Sayf
        </p>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-blue-400 hover:shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;