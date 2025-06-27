// src/components/HtmlPreviewModal.js
import React from 'react';

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

export default HtmlPreviewModal;