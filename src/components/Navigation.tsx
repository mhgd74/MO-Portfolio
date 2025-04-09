'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '@/styles/animations.css';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation completion effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-enhanced ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-[#00ff9d]/20'
        : 'bg-transparent'
    } transition-all duration-300 ${className}`}>
      <div className="container-enhanced">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold relative group overflow-hidden">
            <span className="text-gradient-enhanced relative z-10 inline-block transform transition-all duration-300 group-hover:scale-110 px-1">
              Portfolio
              {isAnimationComplete && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/50 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              )}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`nav-link-enhanced ${
                isActive('/') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>Home</span>
            </Link>
            <Link 
              href="/about" 
              className={`nav-link-enhanced ${
                isActive('/about') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>About</span>
            </Link>
            <Link 
              href="/projects" 
              className={`nav-link-enhanced ${
                isActive('/projects') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>Projects</span>
            </Link>
            <Link 
              href="/services" 
              className={`nav-link-enhanced ${
                isActive('/services') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>Services</span>
            </Link>
            <Link 
              href="/skills" 
              className={`nav-link-enhanced ${
                isActive('/skills') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>Skills</span>
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link-enhanced ${
                isActive('/contact') 
                  ? 'text-white font-medium active' 
                  : 'text-gray-300'
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#00ff9d] focus:outline-none transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#00ff9d]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#00ff9d]' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 bg-black/90 backdrop-blur-xl border-b border-[#00ff9d]/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]' : 'max-h-0'}`}>
          <div className="py-6 space-y-2 px-2">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </div>
            </Link>
            <Link 
              href="/about" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </div>
            </Link>
            <Link 
              href="/projects" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/projects') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Projects
              </div>
            </Link>
            <Link 
              href="/services" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/services') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Services
              </div>
            </Link>
            <Link 
              href="/skills" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/skills') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Skills
              </div>
            </Link>
            <Link 
              href="/contact" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-[#00ff9d]/10 text-white border-l-2 border-[#00ff9d]' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5 hover:text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}