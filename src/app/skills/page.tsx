"use client";

import React, { useEffect, useState } from 'react';
import '@/styles/animations.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeaudition, SiDavinciresolve } from "react-icons/si";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const designSkills: SkillCategory = {
    title: "Design Skills",
    skills: [
      { name: "Graphic Design", level: 90 },
      { name: "UI/UX Design", level: 85 },
      { name: "Brand Identity", level: 95 },
      { name: "Typography", level: 80 }
    ]
  };

  const technicalSkills: SkillCategory = {
    title: "Technical Skills",
    skills: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 }
    ]
  };

  const technicalTools = [
    { name: 'HTML', Icon: FaHtml5, color: '#E44D26' },
    { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: TbBrandNextjs, color: '#ffffff' },
    { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Illustrator', Icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'InDesign', Icon: SiAdobeindesign, color: '#FF3366' },
    { name: 'Premiere Pro', Icon: SiAdobepremierepro, color: '#9999FF' },
    { name: 'After Effects', Icon: SiAdobeaftereffects, color: '#9999FF' },
    { name: 'Audition', Icon: SiAdobeaudition, color: '#9999FF' },
    { name: 'DaVinci Resolve', Icon: SiDavinciresolve, color: '#FF0000' }
  ];

  const renderSkillBar = (skill: Skill, index: number) => (
    <div key={skill.name} className="mb-6 group">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-white group-hover:text-[#00ff9d] transition-colors duration-300">{skill.name}</h3>
        <span className="text-[#00ff9d] font-medium bg-[#00ff9d]/10 px-2 py-0.5 rounded-md text-sm border border-[#00ff9d]/20">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-black/50 rounded-full h-3 backdrop-blur-sm p-0.5 border border-[#00ff9d]/10">
        <div 
          className="bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-[0_0_5px_rgba(0,255,157,0.5)]"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 200}ms`
          }}
        >
          <div className="absolute inset-0 bg-[url('/img/grid.png')] bg-repeat opacity-20"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  const renderSkillCategory = (category: SkillCategory, index: number) => (
    <div 
      key={category.title}
      className="card-enhanced"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
          {index === 0 ? (
            <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-bold relative inline-block">
          <span className="text-gradient-enhanced">{category.title}</span>
        </h2>
      </div>
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => renderSkillBar(skill, skillIndex))}
      </div>
    </div>
  );

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
          <span className="text-gradient-enhanced relative inline-block">My Skills</span>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-[#00ff9d] to-transparent mt-4 transform scale-x-0 animate-expandWidth"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[designSkills, technicalSkills].map((category, index) => (
            <div 
              key={category.title}
              className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {renderSkillCategory(category, index)}
            </div>
          ))}
        </div>
        
        <div className="mt-16 card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
              <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold relative inline-block">
              <span className="text-gradient-enhanced">Tools & Technologies</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalTools.map((tool, index) => (
              <div 
                key={tool.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 hover:bg-[#00ff9d]/5 transition-all duration-300 transform hover-3d group"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#00ff9d]">
                  <tool.Icon size={36} color={tool.color} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}