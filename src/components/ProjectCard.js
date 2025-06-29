// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
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
         <div className="flex justify-around items-center">
           <a
             href={project.liveLink}
             target="_blank"
             rel="noopener noreferrer"
             className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
           >
             Live Demo
           </a>
           {project.sourceCodeLink && (
             <a
               href={project.sourceCodeLink}
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
             >
               View Code
             </a>
           )}
         </div>
       </div>
     </div>
   );
 };

 export default ProjectCard;