'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProtectedImage from '../../components/ProtectedImage';
import Link from "next/link";
import { FaGithub, FaBehance, FaExternalLinkAlt } from 'react-icons/fa';
import '@/styles/custom-scrollbar.css';
import '@/styles/animations.css';

interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  behanceUrl?: string;
  tags: string[];
  features: string[];
}

export default function Projects() {
  const webProjects = [
    {
      title: "VidLoader",
      description: "تطبيق ويب لتحميل الفيديوهات من منصات مختلفة بسهولة وكفاءة. يدعم تحميل الفيديوهات بصيغ متعددة مع واجهة مستخدم بسيطة وجذابة.",
      image: "/img/vidloader.svg",
      demoUrl: "https://vidloader-mo.vercel.app/",
      githubUrl: "https://github.com/mhgd74/vidloader",
      tags: ["Node.js", "Express", "HTML5", "CSS3", "JavaScript"],
      features: [
        "واجهة مستخدم بسيطة وجذابة",
        "دعم تحميل الفيديوهات بصيغ متعددة",
        "عرض معلومات الفيديو قبل التحميل",
        "تصميم متجاوب يعمل على جميع الأجهزة",
        "تحميل سريع وفعال",
        "دعم منصات فيديو متعددة"
      ]
    },
    {
      title: "Top Mastery",
      description: "A comprehensive website for Top Mastery, a leading company in design, printing, development, and digital marketing. Established in 2005, offering integrated creative solutions.",
      image: "/img/TopMastery.png",
      demoUrl: "https://top-mastery.vercel.app/",
      githubUrl: "https://github.com/topmastery/top-mastery",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      features: [
        "Modern and elegant design",
        "Professional services showcase",
        "Integrated portfolio gallery",
        "Project filtering system",
        "Advanced contact form",
        "Smooth and fast interface"
      ]
    },
    {
      title: "MH Studio",
      description: "A design studio website offering comprehensive digital solutions, creative design services, brand identity development, and digital platform management.",
      image: "/img/Studio.png",
      demoUrl: "https://mhgd74.github.io/Studio/",
      githubUrl: "https://github.com/mhgd74/Studio",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Responsive modern design",
        "User-friendly interface",
        "Interactive portfolio",
        "Integrated contact system",
        "Multilingual support",
        "High performance & loading speed"
      ]
    }
  ];

  const designProjects = [
    {
      title: "Al-Masoud Clinics",
      description: "Complete brand identity design for Al-Masoud Medical Clinics, including logo design, visual identity, and various applications across print materials and social media platforms.",
      image: "/img/AlMasoud.png",
      demoUrl: "https://www.behance.net/gallery/205300087/Al-Masoud-Clinics-Project",
      behanceUrl: "https://www.behance.net/gallery/205300087/Al-Masoud-Clinics-Project",
      tags: ["Brand Identity", "Logo Design", "Social Media", "Print Design"],
      features: [
        "Modern medical logo",
        "Consistent visual identity",
        "Medical print designs",
        "Social media content",
        "Outdoor advertising"
      ]
    },
    {
      title: "AL-Shorouk Belt Company Profile",
      description: "Professional company profile design showcasing services and achievements with an attractive and distinctive approach, focusing on modern design and organized content.",
      image: "/img/CompanyProfile.png",
      demoUrl: "https://www.behance.net/gallery/203448883/Company-Profile",
      behanceUrl: "https://www.behance.net/gallery/203448883/Company-Profile",
      tags: ["Editorial Design", "Adobe InDesign", "Brochure Design", "Corporate Identity"],
      features: [
        "Modern and elegant layout",
        "Organized and readable content",
        "Attractive visuals and illustrations",
        "Consistent colors and typography",
        "Print and digital-ready format"
      ]
    },
    {
      title: "KHG Logo Design",
      description: "Professional logo design for KHG company with a comprehensive presentation showcasing the design process and various brand identity applications.",
      image: "/img/KHG.png",
      demoUrl: "https://www.behance.net/gallery/210247615/KHG-Logo-Presentation",
      behanceUrl: "https://www.behance.net/gallery/210247615/KHG-Logo-Presentation",
      tags: ["Adobe Illustrator", "Logo Design", "Brand Identity", "Mockup Design"],
      features: [
        "Innovative modern logo",
        "Professional presentation",
        "Brand applications",
        "Harmonious colors and fonts",
        "Complete visual identity"
      ]
    }
  ];

  const renderProject = (project: Project, isDesignProject: boolean = false) => (
    <div key={project.title} className="card-enhanced h-full flex flex-col">
      <div className="relative h-52 overflow-hidden rounded-t-lg">
        <ProtectedImage
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          priority
          showProtectionOverlay={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Project type badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-[#00ff9d] text-xs px-3 py-1.5 rounded-full border border-[#00ff9d]/30">
          {isDesignProject ? 'Design' : 'Web Development'}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 hover:text-[#00ff9d] relative inline-block group">
            {project.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff9d] to-transparent transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={`${tag}-${tagIndex}`}
                  className="bg-[#00ff9d]/10 text-[#00ff9d] text-xs px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#00ff9d]/20 hover:scale-105 border border-[#00ff9d]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {project.features && (
            <div className="space-y-2">
              <h4 className="font-semibold text-white flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Features:
              </h4>
              <ul className="space-y-1.5">
                {project.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                  <li key={`${feature}-${featureIndex}`} className="text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-start">
                    <span className="text-[#00ff9d] mr-2">•</span>
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-4 border-t border-[#00ff9d]/10">
          <Link 
            href={project.demoUrl} 
            target="_blank" 
            className="flex-1 bg-[#00ff9d] text-black text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-[#00ff9d]/80 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] flex items-center justify-center"
          >
            <span className="whitespace-nowrap">View Project</span>
            <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          
          {!isDesignProject && project.githubUrl && (
            <Link
              href={project.githubUrl} 
              target="_blank" 
              className="flex-1 bg-black/50 backdrop-blur-sm text-white text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-black/70 hover:shadow-md border border-[#00ff9d]/20 hover:border-[#00ff9d]/40 flex items-center justify-center"
            >
              <FaGithub className="mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">View Code</span>
            </Link>
          )}
          
          {isDesignProject && (
            <Link
              href="https://www.behance.net/MostafaHamdy" 
              target="_blank" 
              className="flex-1 bg-black/50 backdrop-blur-sm text-white text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-black/70 hover:shadow-md border border-[#00ff9d]/20 hover:border-[#00ff9d]/40 flex items-center justify-center"
            >
              <FaBehance className="mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Behance</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'web'>('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white custom-scrollbar relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[#00ff9d]/2 rounded-full blur-3xl animate-ping-slow opacity-20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="flex-1 flex items-center justify-center h-full transition-all duration-500 relative z-10">
        <div className="container-enhanced py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h1 className="text-3xl md:text-4xl font-bold inline-block animate-fadeIn mb-6 md:mb-0">
              <span className="text-gradient-enhanced">My Projects</span>
              <div className="h-0.5 w-32 bg-gradient-to-r from-[#00ff9d] to-transparent mt-2 transform scale-x-0 animate-expandWidth"></div>
            </h1>
            
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <button 
                onClick={() => setActiveCategory('all')} 
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${activeCategory === 'all' 
                  ? 'bg-[#00ff9d] text-black font-medium shadow-[0_0_15px_rgba(0,255,157,0.5)]' 
                  : 'bg-black/30 backdrop-blur-sm text-gray-300 hover:bg-black/50 border border-[#00ff9d]/20 hover:border-[#00ff9d]/40'}`}
              >
                <div className="flex items-center whitespace-nowrap">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  All Projects
                </div>
              </button>
              <button 
                onClick={() => setActiveCategory('design')} 
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${activeCategory === 'design' 
                  ? 'bg-[#00ff9d] text-black font-medium shadow-[0_0_15px_rgba(0,255,157,0.5)]' 
                  : 'bg-black/30 backdrop-blur-sm text-gray-300 hover:bg-black/50 border border-[#00ff9d]/20 hover:border-[#00ff9d]/40'}`}
              >
                <div className="flex items-center whitespace-nowrap">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Design
                </div>
              </button>
              <button 
                onClick={() => setActiveCategory('web')} 
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${activeCategory === 'web' 
                  ? 'bg-[#00ff9d] text-black font-medium shadow-[0_0_15px_rgba(0,255,157,0.5)]' 
                  : 'bg-black/30 backdrop-blur-sm text-gray-300 hover:bg-black/50 border border-[#00ff9d]/20 hover:border-[#00ff9d]/40'}`}
              >
                <div className="flex items-center whitespace-nowrap">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Web Dev
                </div>
              </button>
            </div>
          </div>
          
          {/* Projects Grid with Filtering */}
          <div className="animate-slideInUp">
            {(activeCategory === 'all' || activeCategory === 'design') && (
              <div className={`mb-12 ${activeCategory !== 'all' ? '' : ''}`}>
                {activeCategory === 'all' && (
                  <div className="flex items-center mb-8 group relative">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                      <svg className="w-5 h-5 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold relative inline-block">
                      <span className="text-gradient-enhanced">Graphic Design Projects</span>
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00ff9d] to-transparent transition-all duration-300 group-hover:w-full"></span>
                    </h2>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {designProjects.map((project, index) => (
                    <div key={project.title} className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover-3d" style={{ animationDelay: `${index * 200}ms` }}>
                      {renderProject(project, true)}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {(activeCategory === 'all' || activeCategory === 'web') && (
              <div className="pb-6" style={{ animationDelay: "200ms" }}>
                {activeCategory === 'all' && (
                  <div className="flex items-center mb-8 group relative">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                      <svg className="w-5 h-5 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold relative inline-block">
                      <span className="text-gradient-enhanced">Web Development Projects</span>
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00ff9d] to-transparent transition-all duration-300 group-hover:w-full"></span>
                    </h2>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {webProjects.map((project, index) => (
                    <div key={project.title} className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover-3d" style={{ animationDelay: `${activeCategory === 'all' ? (index + designProjects.length) * 200 : index * 200}ms` }}>
                      {renderProject(project)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}