'use client';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiTypescript, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si";

export default function About() {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 size={32} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={32} /> },
    { name: 'JavaScript', icon: <FaJs size={32} /> },
    { name: 'TypeScript', icon: <SiTypescript size={32} /> },
    { name: 'React', icon: <FaReact size={32} /> },
    { name: 'Next.js', icon: <TbBrandNextjs size={32} /> },
    { name: 'Tailwind CSS', icon: <TbBrandTailwind size={32} /> },
    { name: 'Git', icon: <FaGitAlt size={32} /> },
    { name: 'Figma', icon: <FaFigma size={32} /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={32} /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator size={32} /> },
    { name: 'XD', icon: <SiAdobexd size={32} /> },
  ];

  return (
    <div className="flex-1 flex items-center justify-center h-full gradient-bg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="glass p-6 rounded-xl">
          <h1 className="section-title">About Me</h1>
          <p className="text-gray-300 mb-8">
            I am a passionate UI/UX designer and frontend developer with a strong focus on creating beautiful, functional, and user-friendly interfaces. My expertise lies in combining design principles with technical implementation to deliver exceptional digital experiences.
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-black/50 p-4 rounded-xl border border-[#00ff9d]/20 hover-glow hover-lift flex flex-col items-center justify-center gap-2"
                >
                  <div className="text-[#00ff9d]">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="bg-black/50 p-4 rounded-xl border border-[#00ff9d]/20 hover-glow">
                <h3 className="text-lg font-bold text-white">UI/UX Designer & Frontend Developer</h3>
                <p className="text-gray-300">Freelance</p>
                <p className="text-gray-400 text-sm">2020 - Present</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Creating responsive and interactive user interfaces</li>
                  <li>Implementing modern design principles and best practices</li>
                  <li>Collaborating with clients to deliver tailored solutions</li>
                </ul>
              </div>
              
              <div className="bg-black/50 p-4 rounded-xl border border-[#00ff9d]/20 hover-glow">
                <h3 className="text-lg font-bold text-white">Graphic Designer</h3>
                <p className="text-gray-300">Various Agencies</p>
                <p className="text-gray-400 text-sm">2018 - 2020</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Designing marketing materials and brand assets</li>
                  <li>Creating visual content for social media</li>
                  <li>Working with clients to establish brand identity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}