
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BlogStrategies from './components/BlogStrategies';
import Recruitment from './components/Recruitment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LegalView from './components/LegalView';

type ViewType = 'landing' | 'privacy' | 'tos';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar onLogoClick={() => navigateTo('landing')} />
      <main>
        {currentView === 'landing' ? (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <BlogStrategies />
            <Recruitment />
            <ContactUs />
          </>
        ) : (
          <LegalView 
            type={currentView === 'privacy' ? 'privacy' : 'tos'} 
            onBack={() => navigateTo('landing')} 
          />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
