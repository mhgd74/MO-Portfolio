import React from 'react';
import { FaPalette, FaPrint, FaAd, FaMobileAlt, FaLaptopCode, FaMobile } from 'react-icons/fa';
import '@/styles/animations.css';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      description: "Complete brand identity design, logos, print materials, and packaging",
      icon: <FaPalette className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "Brand Identity Design",
        "Logo Creation",
        "Print Design",
        "Product Packaging",
        "Marketing Materials"
      ]
    },
    {
      title: "Print Solutions",
      description: "Design and printing of brochures, catalogs, and business cards",
      icon: <FaPrint className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "Brochure Design",
        "Catalog Production",
        "Business Cards",
        "Advertising Boards",
        "Corporate Materials"
      ]
    },
    {
      title: "Advertising",
      description: "Digital and traditional advertising campaign management",
      icon: <FaAd className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "Campaign Strategy",
        "Digital Marketing",
        "Traditional Advertising",
        "Performance Tracking",
        "ROI Optimization"
      ]
    },
    {
      title: "Social Media",
      description: "Professional social media management with creative content",
      icon: <FaMobileAlt className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "Content Strategy",
        "Social Media Posts",
        "Engagement Management",
        "Analytics Reporting",
        "Community Building"
      ]
    },
    {
      title: "Web Design",
      description: "Modern responsive website design and development",
      icon: <FaLaptopCode className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Website Development",
        "Performance Optimization",
        "SEO Integration"
      ]
    },
    {
      title: "Mobile Apps",
      description: "Modern mobile applications for iOS and Android",
      icon: <FaMobile className="w-8 h-8 text-[#00ff9d]" />,
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Maintenance"
      ]
    }
  ];

  const renderService = (service: Service, index: number) => (
    <div 
      key={service.title} 
      className="bg-black dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 p-6 transform hover:-translate-y-2 h-full border border-[#00ff9d]/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-[#00ff9d]/10 rounded-lg">{service.icon}</div>
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{service.description}</p>
      <ul className="space-y-2 text-sm text-gray-400">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-[#00ff9d] text-xs">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-br from-black to-gray-900 transition-all duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent animate-fadeIn">
          My Services
          <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-1 transform scale-x-0 animate-expandWidth"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {renderService(service, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 