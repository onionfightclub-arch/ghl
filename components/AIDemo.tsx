
import React, { useState } from 'react';
import { generateMarketingCopy } from '../services/geminiService';
import { GeneratedCopy } from '../types';

const AIDemo: React.FC = () => {
  const [niche, setNiche] = useState('Real Estate');
  const [audience, setAudience] = useState('Agency Owners');
  const [goal, setGoal] = useState('Sign up for GoHighLevel');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedCopy | null>(null);

  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const copy = await generateMarketingCopy(niche, audience, goal);
      setResult(copy);
    } catch (error) {
      console.error(error);
      alert("Failed to generate AI copy. Please check your API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-8 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
             <div className="px-6 py-2 bg-[#020617] rounded-xl">
                <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Gemini-Powered Engine</span>
             </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">AI MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-text-cyan">LAB</span></h2>
          <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Experience the raw power of LLM-driven agency growth. Input your parameters and watch the future of copywriting unfold.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 glass-dark p-10 rounded-[3rem] border border-white/10 shadow-2xl relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[3rem] opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 space-y-8">
              <h4 className="text-2xl font-black mb-10 text-white flex items-center gap-3">
                <i className="fa-solid fa-sliders text-cyan-400"></i>
                SYSTEM INPUTS
              </h4>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-cyan-400 uppercase tracking-widest mb-3">Target Niche</label>
                  <input 
                    type="text" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white font-semibold"
                    placeholder="e.g. Dentists, Gyms, Realtors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-blue-400 uppercase tracking-widest mb-3">Avatar Definition</label>
                  <input 
                    type="text" 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white font-semibold"
                    placeholder="e.g. Freelancers, Local Business Owners"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-purple-400 uppercase tracking-widest mb-3">Conversion Goal</label>
                  <select 
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white font-semibold appearance-none cursor-pointer"
                  >
                    <option value="Sign up for GoHighLevel">SIGN UP FOR GOHIGHLEVEL</option>
                    <option value="SaaS Trial">COLLECT SAAS TRIALS</option>
                    <option value="Lead Magnet">PROMOTE LEAD MAGNET</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-slate-700 disabled:to-slate-800 text-slate-950 font-black text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.2)] flex items-center justify-center gap-4 active:scale-95"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    SYNTHESIZING...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-atom animate-spin-slow"></i>
                    GENERATE CAMPAIGN
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 min-h-[600px]">
            {result ? (
              <div className="glass-dark p-12 rounded-[3.5rem] border border-cyan-500/20 text-white animate-reveal relative shadow-2xl animate-glow-border">
                <div className="absolute top-0 right-0 p-8 flex gap-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                
                <div className="mb-10 flex items-center gap-4">
                  <div className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black tracking-widest uppercase">Verified Output</div>
                  <button 
                    onClick={() => {navigator.clipboard.writeText(`${result.headline}\n\n${result.body}\n\n${result.cta}`)}}
                    className="ml-auto text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                  >
                    <i className="fa-regular fa-copy text-lg"></i> Copy
                  </button>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h5 className="text-cyan-500 font-black uppercase text-[10px] tracking-widest">Headline Matrix</h5>
                    <p className="text-4xl font-black leading-tight tracking-tight text-white">{result.headline}</p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-blue-500 font-black uppercase text-[10px] tracking-widest">Engagement Content</h5>
                    <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap font-medium">{result.body}</p>
                  </div>
                  <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5">
                    <div className="space-y-1">
                      <h5 className="text-purple-500 font-black uppercase text-[10px] tracking-widest">Call to Action</h5>
                      <p className="text-white font-black text-2xl uppercase italic">{result.cta}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                       <a 
                         href={affiliateLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="px-6 py-3 bg-cyan-500 text-slate-950 font-black rounded-xl text-center shadow-lg hover:scale-105 transition-all text-sm uppercase"
                       >
                         Sign Up Now
                       </a>
                       <div className="p-4 rounded-2xl bg-white/5 border border-white/5 max-w-sm">
                          <p className="text-[10px] text-white font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                            <i className="fa-solid fa-shield-halved text-emerald-400"></i> Logic Strategy
                          </p>
                          <p className="text-slate-500 text-xs italic leading-relaxed">{result.strategy}</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full glass-dark border-2 border-dashed border-white/5 rounded-[3.5rem] flex flex-col items-center justify-center text-center p-20 group">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  <i className="fa-solid fa-microchip text-5xl text-slate-800 group-hover:text-cyan-500/50 transition-colors"></i>
                </div>
                <h4 className="text-2xl font-black text-white/20 mb-4 tracking-widest uppercase">System Idle</h4>
                <p className="text-slate-700 max-w-sm font-bold uppercase tracking-widest text-[10px]">Awaiting configuration on primary node. Input parameters to initialize synthesis.</p>
                
                {/* Visual tech accents */}
                <div className="mt-12 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-slate-800 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
