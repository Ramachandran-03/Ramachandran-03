import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-tesla-model-s-driving-on-the-highway-2812/1080p.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              The Future is <span className="text-blue-500">Electric</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the perfect fusion of sustainable power and luxury with Relican's all-electric lineup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                Explore Models <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                Book Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}