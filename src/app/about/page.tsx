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
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent transform transition-all duration-700 opacity-0 translate-y-8 animate-appear">
          About Me
          <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-1 transform scale-x-0 animate-expandWidth"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image and About Me */}
          <div className="space-y-8">
            {/* Image Section */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 mx-auto bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 rounded-full w-[260px] h-[260px] transition-all duration-500"></div>
              <div className="relative bg-black/20 p-3 rounded-full shadow-lg border border-[#00ff9d]/10 overflow-hidden w-[260px] h-[260px]">
                <div className="relative h-[250px] w-[250px] mx-auto">
                  <Image
                    src="/img/2.png"
                    alt="Mostafa Hamdy"
                    fill
                    className="object-cover rounded-full transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    priority
                  />
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30">
              <h2 className="text-xl font-semibold text-white mb-4 relative inline-block">
                <span>About Me</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Mustafa Hamdy, Graphic Designer and Web Developer My job is to turn my clients' vision into reality.            
              </p>              
              </div>
          </div>

          {/* Right Column - Education and Experience */}
          <div className="space-y-8">
            {/* Education Section */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-semibold text-white mb-4 relative inline-block">
                <span>Education</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
              </h2>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-[#00ff9d] group hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9d] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-lg font-medium text-white">Faculty Of Commerce & Business Administration</h3>
                  <p className="text-sm text-gray-300">Helwan University, Graduated 2021 (Good)</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30" style={{ animationDelay: '400ms' }}>
              <h2 className="text-xl font-semibold text-white mb-4 relative inline-block">
                <span>Work Experience</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
              </h2>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-[#00ff9d] group hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9d] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-lg font-medium text-white">Senior Graphic Designer</h3>
                  <p className="text-sm text-gray-300">Top Mastery for Advertising, 2024-Present</p>
                </div>
                <div className="relative pl-4 border-l-2 border-[#00ff9d] group hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9d] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-lg font-medium text-white">Freelance Graphic Designer</h3>
                  <p className="text-sm text-gray-300">Self-employed, 2017-Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}