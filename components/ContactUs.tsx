
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

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
                Have questions about the GHL-AI Elite ecosystem? Our operators are standing by to assist with your deployment.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-all shadow-lg">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Direct Frequency</p>
                    <p className="text-white font-bold text-lg">ops@ghl-ai.elite</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-500/50 transition-all shadow-lg">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Digital HQ</p>
                    <p className="text-white font-bold text-lg">Silicon Valley, Cloud Node 7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[3rem] opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative glass-dark p-10 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] ml-2">Operator Name</label>
                    <div className="relative">
                      <i className="fa-solid fa-user absolute left-5 top-1/2 -translate-y-1/2 text-slate-600"></i>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-14 pr-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 outline-none transition-all text-white font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] ml-2">Secure Email</label>
                    <div className="relative">
                      <i className="fa-solid fa-at absolute left-5 top-1/2 -translate-y-1/2 text-slate-600"></i>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-14 pr-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-white font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] ml-2">Mission Intelligence</label>
                    <div className="relative">
                      <i className="fa-solid fa-message absolute left-5 top-6 text-slate-600"></i>
                      <textarea
                        required
                        rows={4}
                        placeholder="Transmission details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-14 pr-6 py-4 bg-slate-900/50 rounded-2xl border border-white/5 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 outline-none transition-all text-white font-semibold resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-[1.02] active:scale-95 disabled:grayscale text-slate-950 font-black text-lg rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3 uppercase tracking-tighter"
                  >
                    {status === 'idle' && (
                      <>
                        <i className="fa-solid fa-paper-plane"></i>
                        Transmit Message
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <div className="w-5 h-5 border-4 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        Encrypting...
                      </>
                    )}
                    {status === 'sent' && (
                      <>
                        <i className="fa-solid fa-check-double text-emerald-900"></i>
                        Transmission Success
                      </>
                    )}
                  </button>
                  
                  {status === 'sent' && (
                    <p className="text-center text-emerald-400 text-xs font-bold animate-pulse mt-4">
                      Message received. Operator will respond shortly.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
