'use client';

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import '../styles/custom-scrollbar.css';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white custom-scrollbar">
      <div className="flex-1 flex items-center justify-center h-full gradient-bg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 custom-scrollbar">
            <div className="glass p-6 rounded-xl">
              <h1 className="section-title">Get in Touch</h1>
              <p className="text-gray-300 mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover-lift">
                  <div className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Email</h3>
                    <p className="text-gray-300">mh.gd@yandex.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover-lift">
                  <div className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Phone</h3>
                    <p className="text-gray-300">(+20) 0111-56-36-06-3</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg text-white mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/mostafa7mdy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20 text-[#00ff9d] hover-glow"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a 
                      href="https://www.instagram.com/m0stafa_7amdy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20 text-[#00ff9d] hover-glow"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a 
                      href="https://github.com/mhgd74" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20 text-[#00ff9d] hover-glow"
                      aria-label="GitHub"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href="https://www.behance.net/MostafaHamdy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-3 rounded-full border border-[#00ff9d]/20 text-[#00ff9d] hover-glow"
                      aria-label="Behance"
                    >
                      <SiBehance size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h2 className="section-title">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-field w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="input-field w-full"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}