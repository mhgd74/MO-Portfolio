'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import '@/styles/animations.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Welcome Text */}
          <div className="space-y-8 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent">
              Welcome to My Portfolio
              <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-2 transform scale-x-0 animate-expandWidth"></div>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a UI/UX designer and frontend developer passionate about creating beautiful, functional, and user-friendly interfaces. With expertise in modern web technologies and design principles, I help bring your digital vision to life.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-[#00ff9d] text-black font-semibold rounded-lg hover:bg-[#00ff9d]/80 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border-2 border-[#00ff9d] text-[#00ff9d] font-semibold rounded-lg hover:bg-[#00ff9d]/10 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative group transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 rounded-xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>
            <div className="relative bg-black/20 p-4 rounded-xl shadow-lg transform -rotate-3 group-hover:-rotate-6 transition-all duration-500 border border-[#00ff9d]/10">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/img/1.png"
                  alt="Portfolio Preview"
                  fill
                  className="object-contain rounded-lg transform group-hover:scale-105 transition-all duration-500"
                  priority
                />
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-bold text-white mb-3 relative inline-block">
              <span>UI/UX Design</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
            </h3>
            <p className="text-gray-300">
              Creating intuitive and engaging user experiences through thoughtful design and user-centered approaches.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30" style={{ animationDelay: '600ms' }}>
            <h3 className="text-xl font-bold text-white mb-3 relative inline-block">
              <span>Frontend Development</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
            </h3>
            <p className="text-gray-300">
              Building responsive and performant web applications using modern technologies and best practices.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30" style={{ animationDelay: '800ms' }}>
            <h3 className="text-xl font-bold text-white mb-3 relative inline-block">
              <span>Graphic Design</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff9d]"></span>
            </h3>
            <p className="text-gray-300">
              Crafting visually appealing designs that effectively communicate your brand&apos;s message and values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
