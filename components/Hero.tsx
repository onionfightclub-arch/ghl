
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"></span>
              ALL-IN-ONE AGENCY AUTOMATION
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.05] tracking-tighter text-white">
              Own the <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text-cyan">Future</span> of Marketing
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              GoHighLevel is the vessel. <span className="text-white font-bold">Advanced AI</span> is the engine. Join the elite network transforming agencies into autonomous wealth machines.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <a 
                href="https://www.gohighlevel.com/?fp_ref=x6z16"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <i className="fa-solid fa-rocket group-hover:animate-bounce"></i>
                  SIGN UP FOR GOHIGHLEVEL
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-10 opacity-50">
              <div className="flex items-center gap-3">
                 <i className="fa-solid fa-bolt-lightning text-cyan-400 text-2xl"></i>
                 <span className="font-bold text-sm tracking-widest text-white">ULTRA FAST</span>
              </div>
              <div className="flex items-center gap-3">
                 <i className="fa-solid fa-brain text-purple-400 text-2xl"></i>
                 <span className="font-bold text-sm tracking-widest text-white">AI DRIVEN</span>
              </div>
              <div className="flex items-center gap-3">
                 <i className="fa-solid fa-infinity text-blue-400 text-2xl"></i>
                 <span className="font-bold text-sm tracking-widest text-white">SCALABLE</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-[60px] rounded-full animate-float"></div>
            <div className="relative z-10 glass-dark p-3 rounded-[2.5rem] border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img 
                 src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" 
                 alt="Futuristic Dashboard" 
                 className="rounded-[2rem] border border-white/5 object-cover h-[500px] w-full"
               />
               <div className="absolute bottom-10 left-10 right-10 p-6 glass-dark rounded-2xl border border-white/10 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-1">Network Volume</p>
                      <p className="text-3xl font-black text-white">$4.2M+</p>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-bold text-sm flex items-center gap-1">
                        <i className="fa-solid fa-arrow-trend-up"></i> +24%
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                    <div className="w-[75%] h-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
