
import React from 'react';

const Recruitment: React.FC = () => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  const handleInitAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you might save the data first. Here we redirect immediately to the affiliate link.
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="glass-dark rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative border border-white/5 shadow-2xl">
          {/* Background FX */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="flex-1 z-10 space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">Tier-2 Expansion Active</div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-tight">Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tier-2 Network</span></h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Activate the passive override. Earn an additional <span className="text-white font-black">5% monthly commission</span> from the volume of every referral you recruit. Build your own multi-level agency ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "fa-rocket", label: "Accelerated Onboarding" },
                { icon: "fa-brain", label: "Secret Prompt Vault" },
                { icon: "fa-users", label: "Private Community" },
                { icon: "fa-chart-line", label: "Scale Masterclass" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-all shadow-inner">
                    <i className={`fa-solid ${item.icon} text-cyan-400`}></i>
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg z-10">
            <div className="glass-dark p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
              
              <h4 className="text-3xl font-black text-white mb-4">JOIN THE ELITE</h4>
              <p className="text-slate-500 mb-10 text-sm font-bold uppercase tracking-widest">ENTER YOUR COORDINATES TO SECURE ACCESS</p>
              
              <form className="space-y-6" onSubmit={handleInitAccess}>
                <div>
                  <input 
                    type="text" 
                    placeholder="OPERATOR NAME" 
                    className="w-full px-6 py-5 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 outline-none transition-all text-white font-black placeholder:text-slate-700 uppercase text-sm tracking-widest"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="SECURE EMAIL" 
                    className="w-full px-6 py-5 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-white font-black placeholder:text-slate-700 uppercase text-sm tracking-widest"
                  />
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-lg rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95 uppercase tracking-tighter">
                  INITIALIZE ACCESS
                </button>
                <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
                  <i className="fa-solid fa-lock text-xs"></i>
                  <p className="text-[9px] text-center text-slate-400 uppercase font-black tracking-[0.3em]">
                    End-to-end encryption active
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
