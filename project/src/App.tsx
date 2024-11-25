import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Innovation from './components/Innovation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Models />
      <Innovation />
      <Footer />
    </div>
  );
}

export default App;