import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      description: "Complete brand identity design, logos, print materials, and packaging",
      icon: "🎨",
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
      icon: "🖨️",
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
      icon: "📢",
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
      icon: "📱",
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
      icon: "💻",
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
      icon: "📱",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Maintenance"
      ]
    }
  ];

  const renderService = (service: Service) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 transform hover:-translate-y-1 h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-3xl">{service.icon}</div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{service.description}</p>
      <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-xs">
            <span className="mr-2 text-blue-500 text-xs">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Services</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive design and development solutions to elevate your brand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index}>
              {renderService(service)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 