// src/data/data.js
import React from 'react';

// Custom icons for interests section
export const Code = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4-4Z"/><path d="m9 10 3 3 3-3"/><path d="M12 17V13"/></svg>;
export const Smartphone = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
export const Search = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

// Placeholder image utility
export const getPlaceholderImage = (width, height, text = '') =>
  `https://placehold.co/${width}x${height}/cccccc/000000?text=${text}`;

// Personal Information
export const personalInfo = {
  name: 'Sayf Rourou',
  birthday: '21/06/2000',
  degree: "Professional Master's in Information Systems Engineering & Data Science",
  experience: '5 Years',
  phone: '+216 94 111 680',
  email: 'sayfpackc11@gmail.com',
  cvLink: '/cv/CV.pdf',
};

// Qualification data
export const education = [
  { title: '1st-year E-Business Licence', institution: 'Higher School of Economics and Commerce of Tunis (ESSEC Tunis)', duration: '2019 - 2020' },
  { title: '2nd-year E-Business Licence', institution: 'Higher School of Economics and Commerce of Tunis (ESSEC Tunis)', duration: '2020 - 2021' },
  { title: '3rd-year E-Business Licence', institution: 'Higher School of Economics and Commerce of Tunis (ESSEC Tunis)', duration: '2021 - 2022' },
  { title: "1st-year Professional Master's in Information Systems Engineering & Data Science", institution: 'Faculty of Economic Sciences and Management of Tunis El Manar (FSEGT Manar)', duration: '2022 - 2023' },
  { title: "2nd-year Professional Master's in Information Systems Engineering & Data Science", institution: 'Faculty of Economic Sciences and Management of Tunis El Manar (FSEGT Manar)', duration: '2023 - 2024' },
];

export const experience = [
  { title: 'App Developer', company: 'INNOVUP Startup', duration: 'July 2021 - August 2021', description: 'Android restaurant management application' },
  { title: 'Web Developer', company: 'Tunisian Banking Company', duration: 'January 2022 – March 2022', description: 'Online bank credits application' },
  { title: 'Free-time Development+Hosting', company: 'AZURE / GCP / AWS', duration: '2014 - Present', description: 'Developing and Hosting web applications, game servers, cPanel / WHM setup, WordPress + plugins setup, VPS / VDS setup, DNS configuration...' },
];

// Skill data
export const technicalSkills = [
  { name: 'React', percentage: 85, color: 'bg-blue-500' }, { name: 'Angular', percentage: 75, color: 'bg-red-500' },
  { name: 'Ionic', percentage: 90, color: 'bg-blue-400' }, { name: 'Express.js', percentage: 90, color: 'bg-green-500' },
  { name: 'Java', percentage: 65, color: 'bg-orange-500' }, { name: 'Python', percentage: 75, color: 'bg-yellow-500' },
];

export const webDevSkills = [
  { name: 'HTML', percentage: 95, color: 'bg-orange-600' }, { name: 'CSS', percentage: 95, color: 'bg-blue-600' },
  { name: 'PHP', percentage: 75, color: 'bg-purple-500' }, { name: 'SQL', percentage: 95, color: 'bg-indigo-500' },
  { name: 'C / C-Sharp', percentage: 50, color: 'bg-red-700' }, { name: 'AutoIT', percentage: 85, color: 'bg-gray-500' },
];

export const devOpsSkills = [
  { name: 'AWS', percentage: 80, color: 'bg-orange-400' }, { name: 'AZURE', percentage: 85, color: 'bg-blue-400' },
  { name: 'cPanel / WHM Setup', percentage: 90, color: 'bg-pink-500' }, { name: 'WordPress + Plugins Setup', percentage: 95, color: 'bg-blue-700' },
  { name: 'Docker', percentage: 75, color: 'bg-blue-800' }, { name: 'Kubernetes', percentage: 75, color: 'bg-indigo-700' },
];

// Interests data
export const interestsData = [
  { name: 'Web Development', icon: <Code className="w-8 h-8 text-white" /> },
  { name: 'Mobile Development', icon: <Smartphone className="w-8 h-8 text-white" /> },
  { name: 'SEO', icon: <Search className="w-8 h-8 text-white" /> },
];

// Portfolio data
export const portfolioItems = [
  { id: 1, type: ['web', 'mobile'], mediaType: 'video', src: '/videos/sayf-gpt.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Sayf-GPT', title: 'Sayf-GPT' },
  { id: 2, type: ['web'], mediaType: 'image', src: '/img/explore,profile.gif', thumbnail: '/img/explore,profile.gif', title: 'Explore/Profile Interface' },
  { id: 3, type: ['web'], mediaType: 'image', src: '/img/upload.gif', thumbnail: '/img/upload.gif', title: 'Upload Feature' },
  { id: 4, type: ['web'], mediaType: 'image', src: '/img/watch,comment.gif', thumbnail: '/img/watch,comment.gif', title: 'Watch/Comment Feature' },
  { id: 5, type: ['web'], mediaType: 'video', src: '/videos/digicredit-demande.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Digicredit+Demande', title: 'Digicredit - Demande' },
  { id: 6, type: ['web'], mediaType: 'video', src: '/videos/digicredit-echeance.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Digicredit+Echeance', title: 'Digicredit - Echeance' },
  { id: 7, type: ['web'], mediaType: 'video', src: '/videos/digicredit-profile.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Digicredit+Profile', title: 'Digicredit - Profile' },
  { id: 8, type: ['web'], mediaType: 'video', src: '/videos/digicredit-simulation.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Digicredit+Simulation', title: 'Digicredit - Simulation' },
  { id: 9, type: ['web'], mediaType: 'video', src: '/videos/digicredit-singup.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Digicredit+Signup', title: 'Digicredit - Signup' },
  { id: 10, type: ['web'], mediaType: 'video', src: '/videos/sayfaio-home.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Sayfaio+Home', title: 'Sayfaio - Home' },
  { id: 11, type: ['web'], mediaType: 'video', src: '/videos/sayfaio-profile.mp4', thumbnail: 'https://placehold.co/600x400/cccccc/000000?text=Sayfaio+Profile', title: 'Sayfaio - Profile' },
  { id: 12, type: ['mobile'], mediaType: 'image', src: '/img/splash_screen_scan.png', thumbnail: '/img/splash_screen_scan.png', title: 'Mobile - Scan Screen' },
  { id: 13, type: ['mobile'], mediaType: 'image', src: '/img/splash_screen_selection.png', thumbnail: '/img/splash_screen_selection.png', title: 'Mobile - Selection Screen' },
  { id: 14, type: ['mobile'], mediaType: 'image', src: '/img/splash_screen_checkout.png', thumbnail: '/img/splash_screen_checkout.png', title: 'Mobile - Checkout Screen' },
  { id: 15, type: ['mobile'], mediaType: 'image', src: '/img/logo_img.png', thumbnail: '/img/logo_img.png', title: 'Mobile - Logo' },
];