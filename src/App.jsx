import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Magic Of Wires | Wiring Innovation Into Mobile.</title>
        <meta name="description" content="Magic Of Wires specializes in crafting bespoke mobile applications for iOS and Android. Turn your ideas into powerful, user-centric mobile experiences." />
        <meta property="og:title" content="Magic Of Wires | Mobile App Development Experts" />
        <meta property="og:description" content="Magic Of Wires specializes in crafting bespoke mobile applications for iOS and Android. Turn your ideas into powerful, user-centric mobile experiences." />
      </Helmet>
      <div className="bg-slate-900 text-white min-h-screen font-sans">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;