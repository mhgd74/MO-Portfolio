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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-[#00ff9d]/20'
        : 'bg-transparent'
    } transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold relative group">
            <span className="gradient-text relative z-10 inline-block transform transition-transform duration-300 group-hover:scale-110 px-1">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff9d] to-[#00b8ff] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`nav-link ${
                isActive('/') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>Home</span>
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${
                isActive('/about') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>About</span>
            </Link>
            <Link 
              href="/projects" 
              className={`nav-link ${
                isActive('/projects') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>Projects</span>
            </Link>
            <Link 
              href="/services" 
              className={`nav-link ${
                isActive('/services') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>Services</span>
            </Link>
            <Link 
              href="/skills" 
              className={`nav-link ${
                isActive('/skills') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>Skills</span>
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${
                isActive('/contact') 
                  ? 'text-white font-medium' 
                  : 'text-gray-300'
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 space-y-4">
            <Link 
              href="/" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/about') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/projects') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/services') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/skills" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/skills') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className={`block px-4 py-2 rounded-lg ${
                isActive('/contact') 
                  ? 'bg-[#00ff9d]/10 text-white' 
                  : 'text-gray-300 hover:bg-[#00ff9d]/5'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}