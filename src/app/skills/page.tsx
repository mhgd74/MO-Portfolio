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
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between mb-1">
        <h3 className="font-bold text-white">{skill.name}</h3>
        <span className="text-[#00ff9d]">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-[#00ff9d] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 200}ms`
          }}
        ></div>
      </div>
    </div>
  );

  const renderSkillCategory = (category: SkillCategory, index: number) => (
    <div 
      key={category.title}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#00ff9d]/10"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
        <span className="w-1 h-6 bg-[#00ff9d] mr-3 rounded-full"></span>
        {category.title}
      </h2>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => renderSkillBar(skill, skillIndex))}
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-br from-black to-gray-900 transition-all duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent animate-fadeIn">
          My Skills
          <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-1 transform scale-x-0 animate-expandWidth"></div>
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
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <span className="w-1 h-6 bg-[#00ff9d] mr-3 rounded-full"></span>
            Tools & Technologies
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
            {technicalTools.map((tool, index) => (
              <div 
                key={tool.name}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-black/30 border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 transition-all duration-300 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear flex-shrink-0"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <tool.Icon size={28} color={tool.color} />
                <span className="text-xs text-gray-300 mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}