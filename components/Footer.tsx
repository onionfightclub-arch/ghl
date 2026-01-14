
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'landing' | 'privacy' | 'tos') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  return (
    <footer className="bg-[#020617] pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <button 
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-3 mb-8 group text-left"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-bolt-lightning text-lg"></i>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">GHL-AI ELITE</span>
            </button>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
              Architecting the next generation of marketing autonomy. Leverage enterprise infrastructure and cutting-edge automation to scale without limits.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 border border-white/5"><i className="fa-brands fa-x-twitter text-xl"></i></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 hover:bg-purple-500 hover:text-slate-950 transition-all duration-300 border border-white/5"><i className="fa-brands fa-youtube text-xl"></i></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-slate-950 transition-all duration-300 border border-white/5"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
          </div>

          <div>
            <h5 className="font-black text-white mb-8 uppercase text-xs tracking-[0.4em] text-cyan-500">Infrastructure</h5>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Affiliate Node</a></li>
              <li><a href="#blog-strategies" onClick={() => onNavigate('landing')} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Strategy Core</a></li>
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Resource Link</a></li>
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Asset Library</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-white mb-8 uppercase text-xs tracking-[0.4em] text-purple-500">Protocol</h5>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors uppercase tracking-widest">Terminals</a></li>
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors uppercase tracking-widest">Module Pack</a></li>
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors uppercase tracking-widest">White-Label</a></li>
              <li><a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors uppercase tracking-widest">API Gateway</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-white mb-8 uppercase text-xs tracking-[0.4em] text-blue-500">Security</h5>
            <ul className="space-y-5 text-slate-500 text-sm font-bold">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-blue-400 transition-colors uppercase tracking-widest text-left">
                  Privacy Core
                </button>
              </li>
              <li><a href="#contact" onClick={() => onNavigate('landing')} className="hover:text-blue-400 transition-colors uppercase tracking-widest">Support Node</a></li>
              <li>
                <button onClick={() => onNavigate('tos')} className="hover:text-blue-400 transition-colors uppercase tracking-widest text-left">
                  Compliance
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">Uptime Monitor</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 text-center">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
            <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.5em] leading-loose">
              AFFILIATE DISCLOSURE: THE LINKS CONTAINED HEREIN MAY GENERATE SECONDARY REVENUE FOR THE OPERATOR AT NO ADDITIONAL COST TO THE END USER.
            </p>
          </div>
          <p className="text-slate-600 text-xs font-black tracking-widest uppercase">
            © 2024 GHL-AI ELITE. BUILT ON THE FOUNDATION OF GOHIGHLEVEL & ADVANCED AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
