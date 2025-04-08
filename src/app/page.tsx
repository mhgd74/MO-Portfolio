'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center h-full gradient-bg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass p-6 rounded-xl">
            <h1 className="section-title">Welcome to My Portfolio</h1>
            <p className="text-gray-300 mb-6">
              I am a UI/UX designer and frontend developer passionate about creating beautiful, functional, and user-friendly interfaces. With expertise in modern web technologies and design principles, I help bring your digital vision to life.
            </p>
            <div className="flex gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] to-[#00b8ff] rounded-xl transform rotate-3 opacity-20"></div>
            <div className="relative glass p-4 rounded-xl transform -rotate-3">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/img/1.png"
                  alt="Portfolio Preview"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl hover-glow hover-lift">
            <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
            <p className="text-gray-300">
              Creating intuitive and engaging user experiences through thoughtful design and user-centered approaches.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl hover-glow hover-lift">
            <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
            <p className="text-gray-300">
              Building responsive and performant web applications using modern technologies and best practices.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl hover-glow hover-lift">
            <h3 className="text-xl font-bold text-white mb-3">Graphic Design</h3>
            <p className="text-gray-300">
              Crafting visually appealing designs that effectively communicate your brand's message and values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
