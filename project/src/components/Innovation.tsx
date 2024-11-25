import React from 'react';
import { Battery, Zap, Wind, Shield } from 'lucide-react';

const features = [
  {
    icon: <Battery className="h-8 w-8" />,
    title: 'Next-Gen Battery',
    description: 'Advanced solid-state technology offering unprecedented range and longevity.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Ultra-Fast Charging',
    description: '10-80% charge in just 18 minutes with our proprietary charging network.'
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: 'Aerodynamic Design',
    description: 'Industry-leading drag coefficient for maximum efficiency and range.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Advanced Safety',
    description: 'AI-powered safety systems with predictive collision avoidance.'
  }
];

export default function Innovation() {
  return (
    <section id="innovation" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Innovation at Its Core</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pushing the boundaries of what's possible in electric mobility through
            cutting-edge technology and sustainable innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}