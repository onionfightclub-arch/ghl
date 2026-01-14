
import React from 'react';

const steps = [
  {
    number: "01",
    color: "text-cyan-400",
    glow: "shadow-cyan-400/50",
    title: "Secure Node",
    description: "Integrate with our elite affiliate network and activate your high-level dashboard and AI workspace."
  },
  {
    number: "02",
    color: "text-blue-400",
    glow: "shadow-blue-400/50",
    title: "Synthesize Content",
    description: "Launch the AI Lab to engineer hyper-personalized campaigns tailored to your target niche's DNA."
  },
  {
    number: "03",
    color: "text-purple-400",
    glow: "shadow-purple-400/50",
    title: "Automate Growth",
    description: "Deploy autonomous systems to hunt leads, nurture prospects, and scale conversions 24/7/365."
  },
  {
    number: "04",
    color: "text-pink-400",
    glow: "shadow-pink-400/50",
    title: "Harvest Alpha",
    description: "Monitor your compounding 40% recurring revenue stream as your digital empire expands."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-purple-400 font-black uppercase tracking-[0.4em] text-xs mb-6">Mission Protocol</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6">The Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Autonomy</span></h3>
          <p className="text-slate-400 text-lg font-medium">Four stages of digital evolution from affiliate to empire builder.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className={`w-20 h-20 glass-dark border border-white/10 rounded-3xl flex items-center justify-center text-3xl font-black ${step.color} mb-8 shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative`}>
                  <div className={`absolute inset-0 bg-current opacity-10 blur-xl rounded-full ${step.glow}`}></div>
                  <span className="relative z-10">{step.number}</span>
                </div>
                <h4 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
