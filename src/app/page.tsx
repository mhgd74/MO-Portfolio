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
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/img/grid.png')] bg-center opacity-5"></div>
          
          {/* Left Column - Welcome Text */}
          <div className="space-y-8 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear relative">
            {/* Decorative accent */}
            <div className="absolute -left-4 top-1/2 w-1 h-20 bg-gradient-to-b from-[#00ff9d] to-transparent rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent inline-block">Welcome to My Portfolio</span>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 mt-2 transform scale-x-0 animate-expandWidth"></div>
              <div className="text-xl text-gray-400 mt-4 font-normal">Crafting digital experiences with passion and precision</div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-[#00ff9d] text-black font-semibold rounded-lg hover:bg-[#00ff9d]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,157,0.5)] text-center"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View Projects
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border-2 border-[#00ff9d] text-[#00ff9d] font-semibold rounded-lg hover:bg-[#00ff9d]/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] text-center"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Creative Image Display */}
          <div className="relative transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '200ms' }}>
            {/* Floating elements - adjusted for mobile */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-[#00ff9d]/10 rounded-full blur-lg animate-float"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00ff9d]/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 right-0 w-24 h-1 bg-[#00ff9d]/20 rounded-full blur-sm rotate-45"></div>
            <div className="absolute top-1/3 left-0 w-1 h-20 bg-[#00ff9d]/20 rounded-full blur-sm"></div>
            
            {/* Main creative container */}
            <div className="relative h-[450px] w-full perspective-1000">
              {/* 3D rotating frame */}
              <div className="absolute inset-0 flex items-center justify-center transform-style-3d group cursor-pointer">
                {/* Decorative cube frame */}
                <div className="absolute w-full h-full border-2 border-[#00ff9d]/20 rounded-xl transform rotate-3 group-hover:rotate-6 transition-all duration-700 shadow-[0_0_15px_rgba(0,255,157,0.1)]"></div>
                <div className="absolute w-full h-full border-2 border-[#00ff9d]/10 rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-700 delay-100"></div>
                
                {/* Main image with mask */}
                <div className="relative w-[85%] h-[85%] overflow-hidden rounded-lg transform group-hover:scale-105 transition-all duration-700 z-10">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60 z-20 mix-blend-overlay group-hover:opacity-0 transition-all duration-700"></div>
                  
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 bg-[url('/img/grid.png')] bg-center opacity-20 group-hover:opacity-10 transition-all duration-700 z-10 animate-pulse-slow"></div>
                  
                  {/* Image */}
                  <div className="relative h-full w-full transform group-hover:scale-110 transition-all duration-700">
                    <Image
                      src="/img/1.png"
                      alt="Portfolio Preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  

                </div>
                
                {/* Floating tech icons - adjusted for mobile */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-black/80 rounded-full flex items-center justify-center border border-[#00ff9d]/30 shadow-[0_0_10px_rgba(0,255,157,0.2)] transform group-hover:rotate-12 transition-all duration-500 z-20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-black/80 rounded-full flex items-center justify-center border border-[#00ff9d]/30 shadow-[0_0_10px_rgba(0,255,157,0.2)] transform group-hover:-rotate-12 transition-all duration-500 z-20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#00ff9d] rounded-full animate-ping-slow opacity-70"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00ff9d] rounded-full animate-ping-slow opacity-70" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#00ff9d] rounded-full animate-ping-slow opacity-70" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mt-24 relative">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 bg-clip-text text-transparent inline-block">Services</span>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/0 mx-auto mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30 hover:shadow-[0_0_15px_rgba(0,255,157,0.1)] group" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#00ff9d]/10 rounded-lg mr-3 group-hover:bg-[#00ff9d]/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white relative inline-block group-hover:text-[#00ff9d] transition-colors duration-300">
                  <span>UI/UX Design</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ff9d] group-hover:w-full transition-all duration-300"></span>
                </h3>
              </div>
              <p className="text-gray-300">
                Creating intuitive and engaging user experiences through thoughtful design and user-centered approaches.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30 hover:shadow-[0_0_15px_rgba(0,255,157,0.1)] group" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#00ff9d]/10 rounded-lg mr-3 group-hover:bg-[#00ff9d]/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white relative inline-block group-hover:text-[#00ff9d] transition-colors duration-300">
                  <span>Frontend Development</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ff9d] group-hover:w-full transition-all duration-300"></span>
                </h3>
              </div>
              <p className="text-gray-300">
                Building responsive and performant web applications using modern technologies and best practices.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-[#00ff9d]/10 transform transition-all duration-700 opacity-0 translate-y-8 animate-appear hover:border-[#00ff9d]/30 hover:shadow-[0_0_15px_rgba(0,255,157,0.1)] group" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#00ff9d]/10 rounded-lg mr-3 group-hover:bg-[#00ff9d]/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white relative inline-block group-hover:text-[#00ff9d] transition-colors duration-300">
                  <span>Graphic Design</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ff9d] group-hover:w-full transition-all duration-300"></span>
                </h3>
              </div>
              <p className="text-gray-300">
                Crafting visually appealing designs that effectively communicate your brand&apos;s message and values.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff9d]/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
