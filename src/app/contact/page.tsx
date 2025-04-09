'use client';

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import '../styles/custom-scrollbar.css';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white custom-scrollbar relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00ff9d]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[#00ff9d]/2 rounded-full blur-3xl animate-ping-slow opacity-20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="flex-1 flex items-center justify-center h-full relative z-10">
        <div className="container-enhanced py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-appear">
            <span className="text-gradient-enhanced relative inline-block">Contact Me</span>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-[#00ff9d] to-transparent mt-4 transform scale-x-0 animate-expandWidth"></div>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 custom-scrollbar">

            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold relative inline-block">
                  <span className="text-gradient-enhanced">Get in Touch</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:translate-y-[-5px] transition-all duration-300 p-4 rounded-lg hover:bg-[#00ff9d]/5 border border-transparent hover:border-[#00ff9d]/20">
                  <div className="bg-black/50 p-3 rounded-lg border border-[#00ff9d]/20 shadow-[0_0_10px_rgba(0,255,157,0.1)] group-hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-[#00ff9d] transition-colors duration-300">Email</h3>
                    <a href="mailto:mh.gd@yandex.com" className="text-gray-300 hover:text-white transition-colors duration-300">mh.gd@yandex.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:translate-y-[-5px] transition-all duration-300 p-4 rounded-lg hover:bg-[#00ff9d]/5 border border-transparent hover:border-[#00ff9d]/20">
                  <div className="bg-black/50 p-3 rounded-lg border border-[#00ff9d]/20 shadow-[0_0_10px_rgba(0,255,157,0.1)] group-hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-[#00ff9d] transition-colors duration-300">Phone</h3>
                    <a href="tel:+2001115636063" className="text-gray-300 hover:text-white transition-colors duration-300">(+20) 0111-56-36-06-3</a>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-3 border border-[#00ff9d]/20">
                      <svg className="w-4 h-4 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold relative inline-block">
                      <span className="text-gradient-enhanced">Follow Me</span>
                    </h3>
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    <a 
                      href="https://www.facebook.com/mostafa7mdy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-4 rounded-lg border border-[#00ff9d]/20 text-[#00ff9d] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-300 backdrop-blur-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a 
                      href="https://www.instagram.com/m0stafa_7amdy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-4 rounded-lg border border-[#00ff9d]/20 text-[#00ff9d] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-300 backdrop-blur-sm"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a 
                      href="https://github.com/mhgd74" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-4 rounded-lg border border-[#00ff9d]/20 text-[#00ff9d] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-300 backdrop-blur-sm"
                      aria-label="GitHub"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href="https://www.behance.net/MostafaHamdy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/50 p-4 rounded-lg border border-[#00ff9d]/20 text-[#00ff9d] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-300 backdrop-blur-sm"
                      aria-label="Behance"
                    >
                      <SiBehance size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-enhanced transform transition-all duration-700 opacity-0 translate-y-8 animate-appear" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center mr-4 border border-[#00ff9d]/20">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold relative inline-block">
                  <span className="text-gradient-enhanced">Send a Message</span>
                </h2>
              </div>
              <form className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00ff9d] transition-colors duration-300">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-black/30 border border-[#00ff9d]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 border border-[#00ff9d]/0 rounded-lg group-focus-within:border-[#00ff9d]/30 pointer-events-none transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00ff9d] transition-colors duration-300">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-black/30 border border-[#00ff9d]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 border border-[#00ff9d]/0 rounded-lg group-focus-within:border-[#00ff9d]/30 pointer-events-none transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00ff9d] transition-colors duration-300">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-black/30 border border-[#00ff9d]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff9d]/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                      required
                    ></textarea>
                    <div className="absolute inset-0 border border-[#00ff9d]/0 rounded-lg group-focus-within:border-[#00ff9d]/30 pointer-events-none transition-all duration-300"></div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="button-enhanced button-enhanced-primary w-full flex items-center justify-center group"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}