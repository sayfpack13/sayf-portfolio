// src/pages/PortfolioPage.js
import React, { useState, useEffect, useRef } from 'react';
import { Award, Settings, Mail, Linkedin } from 'lucide-react'; // Lucide icons for Qualification and Contact
import { Helmet } from 'react-helmet-async';
import SectionObserver from '../components/SectionObserver';
import SectionWrapper from '../components/SectionWrapper';
import {
  personalInfo,
  education,
  experience,
  technicalSkills,
  webDevSkills,
  devOpsSkills,
  interestsData,
  portfolioItems,
  getPlaceholderImage,
} from '../data/data';


// --- Components (Defined directly within PortfolioPage.js) ---

const About = () => {
  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">About Me</h1>
      </div>
      <div className="p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">I'm <span className="text-blue-600">Sayf Rourou</span>, a Web Developer</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          With a solid foundation in both front-end and back-end development, I enjoy building dynamic and responsive web applications. I specialize in crafting seamless user experiences and robust, scalable systems.
        </p>
        <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
          <p><span className="font-semibold text-blue-600">Birthday:</span> {personalInfo.birthday}</p>
          <p><span className="font-semibold text-blue-600">Degree:</span> {personalInfo.degree}</p>
          <p><span className="font-semibold text-blue-600">Experience:</span> {personalInfo.experience}</p>
          <p><span className="font-semibold text-blue-600">Phone:</span> {personalInfo.phone}</p>
          <p><span className="font-semibold text-blue-600">Email:</span> {personalInfo.email}</p>
          <p><span className="font-semibold text-blue-600">Address:</span> Tunis, Tunisia</p>
        </div>
        <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer" className="btn bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg">Download CV</a>
      </div>
    </SectionWrapper>
  );
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    if (activeTab === 'education') {
      return (
        <div className="space-y-8">
          {education.map((item, i) => (
            <div key={i} className="relative pl-10 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0 transform -translate-x-1/2"></div>
              <h4 className="text-xl font-semibold text-blue-600 mb-1">{item.title}</h4>
              <p className="text-gray-700 mb-1">{item.institution}</p>
              <small className="text-gray-500"><i className="far fa-calendar-alt mr-2"></i>{item.duration}</small>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="space-y-8">
        {experience.map((item, i) => (
          <div key={i} className="relative pl-10 border-l-2 border-blue-600">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0 transform -translate-x-1/2"></div>
            <h4 className="text-xl font-semibold text-blue-600 mb-1">{item.title}</h4>
            <p className="text-gray-700 mb-1">{item.company}</p>
            <small className="text-gray-500"><i className="far fa-calendar-alt mr-2"></i>{item.duration}</small>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>History</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">My Qualifications</h1>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex space-x-4 bg-white p-2 rounded-full shadow-lg">
          <button
            className={`py-2 px-6 rounded-full font-medium transition-colors duration-200 ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('education')}
          >
            <Award className="inline-block w-5 h-5 mr-2" /> Education
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium transition-colors duration-200 ${activeTab === 'experience' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('experience')}
          >
            <Settings className="inline-block w-5 h-5 mr-2" /> Experience
          </button>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl">
        {renderContent()}
      </div>
    </SectionWrapper>
  );
};

const Skill = () => {
  // Sub-component for skill bar
  const SkillBar = ({ name, percentage, color }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );

  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>Skills</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">My Skills</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          {technicalSkills.map((skill, i) => <SkillBar key={i} {...skill} />)}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Web Dev Skills</h3>
          {webDevSkills.map((skill, i) => <SkillBar key={i} {...skill} />)}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">DevOps Skills</h3>
          {devOpsSkills.map((skill, i) => <SkillBar key={i} {...skill} />)}
        </div>
      </div>
    </SectionWrapper>
  );
};

const Interests = () => {
  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>Interests</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">My Interests</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-3">
        {interestsData.map((item, i) => (
          <div key={i} className="text-center p-6 bg-blue-600 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center items-center h-16 w-16 bg-white bg-opacity-70 rounded-full mx-auto mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const filteredItems = portfolioItems.filter(item => filter === 'all' || item.type.includes(filter));

  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>Gallery</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">My Portfolio</h1>
      </div>
      <div className="text-center mb-10">
        <ul className="flex flex-wrap justify-center gap-3 mb-6 bg-white p-2 rounded-full shadow-lg max-w-md mx-auto">
          <li onClick={() => setFilter('all')} className={`py-2 px-5 rounded-full cursor-pointer font-semibold transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}>All</li>
          <li onClick={() => setFilter('web')} className={`py-2 px-5 rounded-full cursor-pointer font-semibold transition-colors ${filter === 'web' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}>Web Development</li>
          <li onClick={() => setFilter('mobile')} className={`py-2 px-5 rounded-full cursor-pointer font-semibold transition-colors ${filter === 'mobile' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}>Mobile Development</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            {item.mediaType === 'video' ? (
              <div className="portfolio-video-container">
                <video controls poster={item.thumbnail} className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="relative w-full h-56">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
                  src={item.src}
                  alt={item.title}
                  onError={(e) => { e.target.onerror = null; e.target.src = getPlaceholderImage(600, 400, 'Image not found'); }}
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a href={item.src} target="_blank" rel="noopener noreferrer" className="text-white text-6xl hover:scale-110 transition-transform duration-200" aria-label={`View ${item.title}`}>
                    +
                  </a>
                </div>
              </div>
            )}
            <div className="p-4">
              <h4 className="text-gray-900 text-lg font-semibold truncate">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Contact = () => {
  return (
    <SectionWrapper>
      <div className="relative flex items-center justify-center mb-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold uppercase text-gray-200 opacity-70" style={{ WebkitTextStroke: '1px #dee2e6' }}>Contact</h1>
        <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-blue-600">Get In Touch</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        <p className="text-gray-700 text-center mb-6">
          Feel free to reach out to me! You can send an email or connect with me on social media.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-10 h-10 text-blue-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Email Me</h4>
              <p className="text-blue-600">{personalInfo.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="w-10 h-10 text-blue-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Connect on LinkedIn</h4>
              <a href="https://cutt.ly/sayf-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sayf-rourou</a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};


const PortfolioPage = ({ setSectionRef }) => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Sayf Rourou</title>
        <meta name="description" content="Explore my portfolio of web development projects, skills, and experience. See my work in React, Node.js, and more." />
      </Helmet>
      <div className="bg-gray-50 min-h-screen">
        <main className="container mx-auto py-12 px-4">
          <SectionObserver sectionId="about" setSectionRef={setSectionRef}>
            <About />
          </SectionObserver>

          <SectionObserver sectionId="qualification" setSectionRef={setSectionRef}>
            <Qualification />
          </SectionObserver>

          <SectionObserver sectionId="skill" setSectionRef={setSectionRef}>
            <Skill />
          </SectionObserver>

          <SectionObserver sectionId="interests" setSectionRef={setSectionRef}>
            <Interests />
          </SectionObserver>

          <SectionObserver sectionId="portfolio" setSectionRef={setSectionRef}>
            <PortfolioSection />
          </SectionObserver>

          <SectionObserver sectionId="contact" setSectionRef={setSectionRef}>
            <Contact />
          </SectionObserver>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;