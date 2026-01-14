
import React from 'react';

const features = [
  {
    icon: "fa-solid fa-brain",
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/20",
    title: "AI Strategy Engine",
    description: "Harness Gemini-powered insights to pinpoint hyper-profitable niches for your agency outreach."
  },
  {
    icon: "fa-solid fa-chart-pie",
    color: "from-cyan-400 to-blue-600",
    shadow: "shadow-cyan-500/20",
    title: "Recurring Ecosystem",
    description: "Build a bulletproof portfolio with 40% monthly commissions that compound into financial freedom."
  },
  {
    icon: "fa-solid fa-microchip",
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
    title: "Omni-Automation",
    description: "Launch complex multi-channel sequences and landing pages using GHL's enterprise-grade infrastructure."
  },
  {
    icon: "fa-solid fa-fingerprint",
    color: "from-pink-500 to-purple-600",
    shadow: "shadow-pink-500/20",
    title: "White-Label SaaS",
    description: "Deploy your own software brand instantly. You own the customers, the data, and the profit."
  }
];

const Features: React.FC = () => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  return (
    <section id="features" className="py-32 relative bg-slate-950/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs mb-6">Technological Advantage</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-20 text-white tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">GHL-AI</span> Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] glass-dark border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/40 transition-all duration-500 relative overflow-hidden text-left">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-[0.03] group-hover:opacity-10 transition-opacity blur-3xl`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-2xl ${feature.shadow} group-hover:scale-110 transition-transform group-hover:rotate-3`}>
                <i className={feature.icon}></i>
              </div>
              <h4 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed font-medium">{feature.description}</p>
              
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">Learn More</span>
                <i className="fa-solid fa-arrow-right text-cyan-400"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
