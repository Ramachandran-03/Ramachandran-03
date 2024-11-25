import React from 'react';
import { Wing, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Wing className="h-12 w-12 text-blue-500 rotate-[135deg] mb-4" />
            <p className="text-gray-400">
              Relican. Pioneering the future of electric mobility with luxury and sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Models</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">R7 Electric</a></li>
              <li><a href="#" className="hover:text-white">RX Electric</a></li>
              <li><a href="#" className="hover:text-white">R1000RR-e</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Relican. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}