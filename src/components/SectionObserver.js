// src/components/SectionObserver.js
import React, { useRef, useEffect } from 'react';

const SectionObserver = ({ children, sectionId, setSectionRef }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      setSectionRef(elementRef.current, sectionId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.remove('opacity-0', 'translate-y-10');
          elementRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [sectionId, setSectionRef]);

  return (
    <div
      id={sectionId}
      ref={elementRef}
      className="transition-all duration-1000 ease-out transform opacity-0 translate-y-10"
    >
      {children}
    </div>
  );
};

export default SectionObserver;