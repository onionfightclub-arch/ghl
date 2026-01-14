
import React from 'react';

const Recruitment: React.FC = () => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  return (
    <section className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="glass-dark rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative border border-white/5 shadow-2xl">
          {/* Background FX */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="flex-1 z-10 space-y-10 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">Enterprise Mode Active</div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-tight">Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Agency Ecosystem</span></h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Activate your platform control center. Secure your <span className="text-white font-black">free trial</span> and unlock the volume of the world's most powerful marketing automation tool. Build your own autonomous agency ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "fa-rocket", label: "Accelerated Onboarding" },
                { icon: "fa-brain", label: "Secret Prompt Vault" },
                { icon: "fa-users", label: "Private Community" },
                { icon: "fa-chart-line", label: "Scale Masterclass" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group justify-center lg:justify-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-all shadow-inner">
                    <i className={`fa-solid ${item.icon} text-cyan-400`}></i>
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg z-10">
            <div className="glass-dark p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative text-center group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition-colors"></div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-8 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              
              <h4 className="text-3xl font-black text-white mb-4">READY TO SCALE?</h4>
              <p className="text-slate-500 mb-10 text-sm font-bold uppercase tracking-widest leading-relaxed">
                Skip the queue. Initialize your high-level dashboard and start building your agency portfolio today.
              </p>
              
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xl rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] active:scale-95 uppercase tracking-tighter"
              >
                SIGN UP FOR GOHIGHLEVEL
              </a>
              
              <div className="flex items-center justify-center gap-2 mt-8 opacity-40">
                <i className="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                <p className="text-[10px] text-center text-slate-400 uppercase font-black tracking-[0.3em]">
                  Instant Activation Enabled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
