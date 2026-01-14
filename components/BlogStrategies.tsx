
import React from 'react';

const blogIdeas = [
  {
    title: "The Future of Agency Growth: Why GoHighLevel + AI is the Ultimate Power Couple",
    summary: "Explore how integrating Google Gemini with GoHighLevel transforms a standard CRM into an autonomous agency engine. This post positions the 'AI-First Agency' as the only way to survive in 2024.",
    prompts: [
      "Act as a SaaS thought leader. Write a 1,000-word blog post explaining the synergy between GoHighLevel's CRM and Gemini AI's generative capabilities.",
      "Generate a list of 10 specific use cases for AI within a GoHighLevel workflow, such as lead scoring and sentiment analysis.",
      "Write a catchy LinkedIn post promoting this article that targets frustrated agency owners looking for efficiency."
    ]
  },
  {
    title: "How to Build a $10k/Month Recurring Income as a GHL Affiliate using AI",
    summary: "A step-by-step blueprint for recruiting high-quality referrals. Focuses on using AI for personalized cold outreach and content distribution at scale.",
    prompts: [
      "Create a detailed 30-day roadmap for a new GoHighLevel affiliate to reach $10k MRR using AI tools for content creation.",
      "Write a series of 5 personalized cold email templates using Gemini to recruit digital marketing agencies to the GoHighLevel platform.",
      "Generate a script for a 60-second YouTube Short explaining the 40% recurring commission structure of GHL."
    ]
  },
  {
    title: "Hyper-Personalized Outreach: Using Gemini AI to Recruit High-Value Referrals",
    summary: "Learn how to move beyond generic templates. Use Gemini to analyze potential leads and craft high-converting, personalized messages that position GoHighLevel as the specific solution to their unique business challenges.",
    prompts: [
      "Analyze this company's website description: [Insert Text]. Identify their top 3 potential marketing inefficiencies and write a personalized email introducing GoHighLevel as the solution.",
      "Draft a DM for an agency owner. Reference a generic pain point like 'manual lead follow-up' and explain how GHL's AI features could automate that specific workflow for their niche.",
      "Create a 'Problem/Solution' matrix for the Real Estate industry and generate 5 punchy opening lines for cold outreach that mention AI-driven efficiency."
    ]
  },
  {
    title: "5 AI Automations Every GoHighLevel User Needs to Implement Today",
    summary: "A practical 'Quick Wins' guide. Demonstrates how to use the GHL API with Google AI Studio to automate database reactivation and smart lead responses.",
    prompts: [
      "Outline a GoHighLevel workflow that triggers a Gemini AI response when a lead asks a complex question via SMS.",
      "Write a 'Database Reactivation' email sequence for a local gym niche that uses AI personalization to increase conversion by 20%.",
      "Explain how to use Zapier to connect Google AI Studio (Gemini) to GoHighLevel for automated review responses."
    ]
  },
  {
    title: "Recruiting Agency Owners: The Psychological Trigger of 'The AI-Efficiency' Dream",
    summary: "A deep dive into sales psychology. Learn how to pitch GoHighLevel not as a tool, but as the foundation for an agency that runs itself using AI.",
    prompts: [
      "Analyze the top 5 pain points of agency owners in 2024 and map them to GoHighLevel + AI solutions.",
      "Write a persuasive sales page headline and sub-headline for an affiliate landing page focusing on 'Freedom through AI Automation'.",
      "Create a 'Day in the Life' story of an agency owner who switched to GHL + Gemini and cut their workload by 70%."
    ]
  },
  {
    title: "Beyond Chatbots: Using Gemini AI for Predictive Analytics in GoHighLevel",
    summary: "Advanced content for tech-savvy affiliates. Discusses using AI to predict client churn and optimize ad spend within the GHL dashboard.",
    prompts: [
      "Explain in simple terms how an agency can use Gemini AI to analyze GoHighLevel CRM data to predict which leads are most likely to close.",
      "Generate a technical tutorial outline for setting up an AI-driven dashboard within a GHL sub-account.",
      "Write a comparison article: 'Standard CRM vs. AI-Enhanced GHL: Why the Gap is Growing'."
    ]
  }
];

const BlogStrategies: React.FC = () => {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=x6z16";

  return (
    <section id="blog-strategies" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-dark border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <i className="fa-solid fa-crown"></i> ELITE CONTENT BLUEPRINTS
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Organic Funnel</span></h2>
          <p className="text-slate-400 text-xl font-medium">
            Proprietary content frameworks designed to convert cold traffic into lifetime recurring revenue using the power of AI.
          </p>
        </div>

        <div className="space-y-12">
          {blogIdeas.map((idea, idx) => (
            <div key={idx} className="group glass-dark border border-white/5 p-10 rounded-[3.5rem] hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-700 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-2/5">
                  <div className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-500/30 to-transparent font-black text-8xl mb-6 select-none">0{idx + 1}</div>
                  <h3 className="text-3xl font-black mb-6 group-hover:text-cyan-400 transition-colors leading-tight">
                    {idea.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                    {idea.summary}
                  </p>
                  <div className="flex gap-4">
                     <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400">Strategy Guide</span>
                     <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400">Prompt Ready</span>
                  </div>
                </div>
                
                <div className="lg:w-3/5 bg-slate-900/60 rounded-3xl p-8 border border-white/5 relative shadow-inner">
                  <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-cyan-500/30"></div>
                    GEMINI AI CORE PROMPTS
                  </h4>
                  <div className="space-y-6">
                    {idea.prompts.map((prompt, pIdx) => (
                      <div key={pIdx} className="relative group/prompt">
                        <div className="flex items-start gap-6 p-6 bg-[#020617]/50 rounded-2xl border border-white/5 group-hover/prompt:border-cyan-500/50 group-hover/prompt:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all">
                          <span className="text-cyan-500/30 font-black text-sm mt-1">#0{pIdx + 1}</span>
                          <p className="text-slate-300 text-sm italic leading-relaxed font-medium">"{prompt}"</p>
                          <button 
                            onClick={() => navigator.clipboard.writeText(prompt)}
                            className="ml-auto p-3 text-slate-600 hover:text-cyan-400 transition-colors bg-white/5 rounded-xl border border-white/5"
                            title="Copy Prompt"
                          >
                            <i className="fa-regular fa-copy text-lg"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_45px_rgba(37,99,235,0.5)] hover:scale-105 transition-all items-center gap-4 mx-auto group"
          >
            <i className="fa-solid fa-download group-hover:animate-bounce"></i>
            UNLOCK FULL GHL STRATEGY
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogStrategies;
