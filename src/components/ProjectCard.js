// src/components/ProjectCard.js
import React, { useState } from 'react';

const HtmlPreviewModal = ({ htmlContent, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">HTML Preview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <iframe
          srcDoc={htmlContent}
          className="flex-grow w-full border-0"
          title="HTML Preview"
        ></iframe>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={project.imageUrl}
        alt={project.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x200/cccccc/000000?text=Image+Not+Found`;
        }}
      />
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
          >
            Live Demo
          </a>
          <button
            onClick={() => setShowPreview(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Preview
          </button>
        </div>
      </div>
      {showPreview && (
        <HtmlPreviewModal
          htmlContent={project.previewHtml}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;