'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/animations.css';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/img/project1.jpg",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/img/project2.jpg",
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    technologies: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/img/project3.jpg",
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    technologies: ["React", "GraphQL", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-5px] flex flex-col h-full"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 