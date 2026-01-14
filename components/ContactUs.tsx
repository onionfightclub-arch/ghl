
import React from 'react';

const ContactUs: React.FC = () => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  return (
    <section id="contact" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest">
                <i className="fa-solid fa-headset"></i> Support Terminal
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Uplink</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Have questions about deployment or agency scaling? Our specialist operators are standing by to assist with your network integration.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-all shadow-lg">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Direct Frequency</p>
                    <p className="text-white font-bold text-lg">ops@ghl-elite.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-500/50 transition-all shadow-lg">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Digital HQ</p>
                    <p className="text-white font-bold text-lg">Global Cloud Network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[3rem] opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative glass-dark p-10 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <i className="fa-solid fa-comments text-3xl text-slate-600 group-hover:text-cyan-400 transition-colors"></i>
                </div>
                
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic">Instant Support Node</h4>
                <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed px-4">
                  For immediate technical assistance or onboarding queries, access our priority support channel through the main GoHighLevel platform.
                </p>

                <div className="grid grid-cols-1 gap-4 w-full">
                  <a 
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-white/5 hover:bg-white/10 text-white font-black text-sm rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                  >
                    <i className="fa-solid fa-circle-question text-cyan-400"></i>
                    Open Help Center
                  </a>
                  <a 
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] active:scale-95 text-slate-950 font-black text-sm rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest"
                  >
                    <i className="fa-solid fa-comment-dots"></i>
                    Launch Live Chat
                  </a>
                </div>

                <div className="mt-10 flex gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
