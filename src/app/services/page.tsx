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
      className="card-enhanced h-full flex flex-col hover-3d"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-[#00ff9d]/10 rounded-lg border border-[#00ff9d]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(0,255,157,0.1)]">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold">
          <span className="text-gradient-enhanced">{service.title}</span>
        </h3>
      </div>
      
      <div className="h-px w-full bg-gradient-to-r from-[#00ff9d]/30 to-transparent mb-5"></div>
      
      <p className="text-gray-300 mb-6">{service.description}</p>
      
      <div className="mt-auto">
        <h4 className="text-white font-medium mb-3 flex items-center">
          <svg className="w-4 h-4 mr-2 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          What's included:
        </h4>
        <ul className="space-y-3">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start group transition-all duration-300 hover:translate-x-1">
              <span className="mr-3 text-[#00ff9d] flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
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
          <span className="text-gradient-enhanced relative inline-block">My Services</span>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-[#00ff9d] to-transparent mt-4 transform scale-x-0 animate-expandWidth"></div>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="transform transition-all duration-700 opacity-0 translate-y-8 animate-appear"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {renderService(service, index)}
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/30 backdrop-blur-md border border-[#00ff9d]/20 rounded-xl p-6 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '900ms' }}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient-enhanced">Need a custom service?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">Have a specific project in mind that requires a tailored approach? I offer custom solutions to meet your unique needs.</p>
            <a href="/contact" className="button-enhanced button-enhanced-primary inline-flex items-center">
              <span>Get in Touch</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 