// src/components/SectionWrapper.js
import React from 'react';

const SectionWrapper = ({ children }) => {
  return (
    <div className="container mx-auto py-16 px-4">
      {children}
    </div>
  );
};

export default SectionWrapper;