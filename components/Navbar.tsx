
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] rotate-3 group-hover:rotate-0 transition-transform">
            <i className="fa-solid fa-bolt-lightning text-xl"></i>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              GHL ELITE
            </span>
            <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-400/80 font-bold leading-none mt-1">Agency Growth Portal</p>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-400">
          <a href="#features" className="hover:text-cyan-400 transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition-colors relative group">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#blog-strategies" className="hover:text-cyan-400 transition-colors relative group">
            Strategies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:block text-slate-400 font-bold hover:text-white transition-colors"
          >
            LOGIN
          </a>
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative px-6 py-3 bg-cyan-500 text-slate-950 font-black rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden group"
          >
            <span className="relative z-10">START FREE TRIAL</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
