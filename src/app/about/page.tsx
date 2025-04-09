"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import '@/styles/animations.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // قائمة بالمهارات التقنية مع الأيقونات المناسبة
  const technicalSkills = [
    { name: 'HTML', Icon: FaHtml5, color: '#E44D26' },
    { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: TbBrandNextjs, color: '#ffffff' },
    { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Illustrator', Icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'InDesign', Icon: SiAdobeindesign, color: '#FF3366' },
    { name: 'Premiere Pro', Icon: SiAdobepremierepro, color: '#9999FF' },
    { name: 'After Effects', Icon: SiAdobeaftereffects, color: '#9999FF' }
  ];

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[#00ff9d]/2 rounded-full blur-3xl animate-ping-slow opacity-20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-enhanced py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-appear">
          <span className="text-gradient-enhanced relative inline-block">About Me</span>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-[#00ff9d] to-transparent mt-4 transform scale-x-0 animate-expandWidth"></div>
        </h1>
        
        <div className="grid-enhanced">
          {/* Left Column - Image and About Me */}
          <div className="col-span-12 md:col-span-6 space-y-8">
            {/* Image Section */}
            <div className="relative group flex justify-center perspective-effect">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00ff9d]/30 rounded-full blur-sm animate-float-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#00ff9d]/20 rounded-full blur-sm animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-[#00ff9d]/20 rounded-full animate-spin-slow"></div>
              
              {/* Image frame */}
              <div className="relative">
                <div className="absolute inset-0 mx-auto bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/30 rounded-full w-[280px] h-[280px] blur-md transform transition-all duration-500 group-hover:blur-lg"></div>
                <div className="relative bg-black/40 p-4 rounded-full shadow-lg border border-[#00ff9d]/20 backdrop-blur-sm overflow-hidden w-[280px] h-[280px] transform transition-all duration-500 group-hover:border-[#00ff9d]/40">
                  <div className="relative h-[260px] w-[260px] mx-auto overflow-hidden rounded-full">
                    <Image
                      src="/img/2.png"
                      alt="Mostafa Hamdy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-full transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                      priority
                    />
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-5 right-5 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-[#00ff9d]/70 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear">
              <h2 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                <span className="text-gradient-enhanced">About Me</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-transparent"></span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Mustafa Hamdy, Graphic Designer and Web Developer. My job is to turn my clients' vision into reality.            
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <a href="/files/Mostafa_Hamdy_CV.pdf" download className="button-enhanced button-enhanced-secondary text-sm">
                  <span>Download CV</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Education and Experience */}
          <div className="col-span-12 md:col-span-6 space-y-8">
            {/* Education Section */}
            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white relative inline-block">
                  <span className="text-gradient-enhanced">Education</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#00ff9d]/50 group hover:translate-x-2 transition-all duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00ff9d]/20 backdrop-blur-sm border-2 border-[#00ff9d] rounded-full group-hover:scale-125 transition-all duration-300"></div>
                  <h3 className="text-xl font-medium text-white mb-1">Faculty Of Commerce & Business Administration</h3>
                  <p className="text-gray-300">Helwan University, Graduated 2021 (Good)</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white relative inline-block">
                  <span className="text-gradient-enhanced">Work Experience</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#00ff9d]/50 group hover:translate-x-2 transition-all duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00ff9d]/20 backdrop-blur-sm border-2 border-[#00ff9d] rounded-full group-hover:scale-125 transition-all duration-300"></div>
                  <h3 className="text-xl font-medium text-white mb-1">Senior Graphic Designer & Web Developer</h3>
                  <p className="text-gray-300">Top Mastery for Advertising, 2024-Present</p>
                  <div className="mt-2 bg-[#00ff9d]/5 rounded-lg px-3 py-2 border border-[#00ff9d]/10 inline-block">
                    <span className="text-[#00ff9d] text-sm">Current</span>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-[#00ff9d]/50 group hover:translate-x-2 transition-all duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00ff9d]/20 backdrop-blur-sm border-2 border-[#00ff9d] rounded-full group-hover:scale-125 transition-all duration-300"></div>
                  <h3 className="text-xl font-medium text-white mb-1">Freelance</h3>
                  <p className="text-gray-300">Self-employed, 2017-Present</p>
                </div>
              </div>
            </div>
            
            {/* Skills Preview */}
            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white relative inline-block">
                  <span className="text-gradient-enhanced">Top Skills</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.slice(0, 5).map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-[#00ff9d]/5 rounded-lg px-3 py-2 border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 transition-all duration-300 hover:translate-y-[-2px] group"
                  >
                    <skill.Icon className="mr-2 text-xl" style={{ color: skill.color }} />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
                <a href="/skills" className="flex items-center bg-[#00ff9d]/10 rounded-lg px-3 py-2 border border-[#00ff9d]/20 hover:border-[#00ff9d]/50 transition-all duration-300 hover:translate-y-[-2px]">
                  <span className="text-[#00ff9d]">View all skills →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}