import React, { useState } from 'react';
import { Wing, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Wing className="h-12 w-12 text-blue-500 rotate-[135deg]" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#models" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Models</a>
                <a href="#innovation" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Innovation</a>
                <a href="#sustainability" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Sustainability</a>
                <a href="#shop" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Shop</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#models" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Models</a>
            <a href="#innovation" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Innovation</a>
            <a href="#sustainability" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Sustainability</a>
            <a href="#shop" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Shop</a>
          </div>
        </div>
      )}
    </nav>
  );
}