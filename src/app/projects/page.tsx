'use client';

import React from 'react';
import Image from 'next/image';
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

  const renderProject = (project: Project) => (
    <div key={project.title} className="bg-black dark:bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out h-full flex flex-col transform hover:scale-[1.03] hover:translate-y-[-8px] hover:shadow-2xl border border-[#00ff9d]/20">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col border-t-2 border-[#00ff9d]/20">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 hover:text-[#00ff9d] relative inline-block group">
            {project.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={`${tag}-${tagIndex}`}
                  className="bg-[#00ff9d]/10 text-[#00ff9d] text-xs px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#00ff9d]/20 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.features && (
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {project.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                  <li key={`${feature}-${featureIndex}`} className="truncate transition-all duration-300 hover:text-[#00ff9d] hover:translate-x-1">{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-4 mt-6 pt-4 border-t border-gray-800">
          <Link 
            href={project.demoUrl} 
            target="_blank" 
            className="flex-1 bg-[#00ff9d] text-black text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-[#00ff9d]/80 hover:shadow-md hover:scale-[1.02]"
          >
            View Project
          </Link>
          {project.githubUrl && (
            <Link
              href={project.githubUrl} 
              target="_blank" 
              className="flex-1 bg-gray-800 text-white text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-gray-700 hover:shadow-md hover:scale-[1.02]"
            >
              View Code
            </Link>
          )}
          {project.behanceUrl && (
            <Link
              href={project.behanceUrl} 
              target="_blank" 
              className="flex-1 bg-gray-800 text-white text-center py-2.5 rounded-md transition-all duration-300 font-medium hover:bg-gray-700 hover:shadow-md hover:scale-[1.02]"
            >
              View on Behance
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white custom-scrollbar">
      <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-br from-black to-gray-900 transition-all duration-500">
        <div className="w-full max-w-6xl mx-auto px-2 py-4 md:py-0">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent inline-block mb-6 animate-fadeIn">
            My Projects
            <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-1 transform scale-x-0 animate-expandWidth"></div>
          </h1>
          
          {/* Graphic Design Projects */}
          <div className="mb-8 animate-slideInUp">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center group relative">
              <svg className="w-5 h-5 mr-2 text-[#00ff9d] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="relative">
                Graphic Design Projects
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designProjects.map((project, index) => (
                <div key={project.title} className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: `${index * 200}ms` }}>
                  {renderProject(project)}
                </div>
              ))}
            </div>
          </div>
          
          {/* Web Development Projects */}
          <div className="pb-6 animate-slideInUp" style={{ animationDelay: "200ms" }}>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center group relative">
              <svg className="w-5 h-5 mr-2 text-[#00ff9d] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="relative">
                Web Development Projects
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <div key={project.title} className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: `${(index + designProjects.length) * 200}ms` }}>
                  {renderProject(project)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}