
import React, { useEffect } from 'react';

interface LegalViewProps {
  type: 'privacy' | 'tos';
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const content = {
    privacy: {
      title: "Privacy Protocol",
      subtitle: "Data Encryption & Privacy Policy",
      lastUpdated: "October 24, 2024",
      sections: [
        {
          h: "1. Data Collection Node",
          p: "We collect minimal information necessary to facilitate your connection to the GoHighLevel ecosystem. This includes 'Operator Name' and 'Secure Email' provided during recruitment initialization."
        },
        {
          h: "2. Transmission Security",
          p: "All data transmitted through our support terminals is encrypted using industry-standard protocols. We do not store sensitive payment information; all financial transactions are handled securely by GoHighLevel's enterprise infrastructure."
        },
        {
          h: "3. Neural Analytics",
          p: "We use basic analytics to monitor network volume and conversion trends. This data is anonymized and used solely to optimize the GHL-AI Elite portal performance."
        },
        {
          h: "4. Third-Party Uplinks",
          p: "Our portal contains links to GoHighLevel (the 'Platform'). Once you leave our domain, your data is governed by the Platform's respective privacy protocols. We encourage you to review their documentation."
        }
      ]
    },
    tos: {
      title: "Service Protocol",
      subtitle: "Terms of Service & Usage Agreement",
      lastUpdated: "October 24, 2024",
      sections: [
        {
          h: "1. Operator Eligibility",
          p: "By accessing this portal, you confirm you are at least 18 cycles (years) of age and possess the legal authority to enter into binding agreements."
        },
        {
          h: "2. Affiliate Disclosure",
          p: "GHL-AI Elite is an independent affiliate portal. We provide marketing intelligence and strategy blueprints. We are not employees, agents, or partners of GoHighLevel. Use of our affiliate links provides us with recurring commission at no extra cost to you."
        },
        {
          h: "3. Strategy Usage",
          p: "The 'Elite Content Blueprints' and AI prompts provided are for individual operator use. Redistribution or resale of these proprietary frameworks is strictly prohibited under network law."
        },
        {
          h: "4. Earnings Disclaimer",
          p: "Success in the GoHighLevel affiliate ecosystem depends on your individual effort, niche selection, and execution. We do not guarantee specific financial outcomes or 'alpha' yields."
        }
      ]
    }
  };

  const active = content[type];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <button 
          onClick={onBack}
          className="group mb-12 flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors font-black uppercase text-xs tracking-widest"
        >
          <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i>
          Return to Command Center
        </button>

        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Legal Directive {type === 'privacy' ? 'v2.1' : 'v1.4'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              {active.title}
            </h1>
            <p className="text-xl text-slate-400 font-medium">
              {active.subtitle}
            </p>
            <div className="mt-8 pt-8 border-t border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest">
              Last Synced: {active.lastUpdated}
            </div>
          </header>

          <div className="space-y-12">
            {active.sections.map((section, idx) => (
              <div key={idx} className="glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
                  <span className="text-cyan-500/30 text-sm">0{idx + 1}</span>
                  {section.h}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {section.p}
                </p>
              </div>
            ))}
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-600 text-xs font-black uppercase tracking-[0.2em] mb-8">
              End of Transmission
            </p>
            <a 
              href="https://www.gohighlevel.com/?fp_ref=x6z16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              <i className="fa-solid fa-shield-check text-cyan-400"></i>
              Visit Platform Compliance
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
