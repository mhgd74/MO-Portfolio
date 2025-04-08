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
      type: "design",
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
      type: "design",
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
      type: "design",
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
    <div key={project.title} className="glass-effect rounded-xl overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#00ff9d]/20 text-white hover:bg-[#00ff9d]/30 transition-colors duration-300"
              aria-label="View Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#00ff9d]/20 text-white hover:bg-[#00ff9d]/30 transition-colors duration-300"
                aria-label="View on GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#00ff9d]/20 text-white hover:bg-[#00ff9d]/30 transition-colors duration-300"
                aria-label="View on Behance"
              >
                <FaBehance className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">My Projects</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Web Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map(renderProject)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 gradient-text">Design Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map(renderProject)}
          </div>
        </section>
      </div>
    </main>
  );
}