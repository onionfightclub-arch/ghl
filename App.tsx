
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BlogStrategies from './components/BlogStrategies';
import Recruitment from './components/Recruitment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BlogStrategies />
        <Recruitment />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
