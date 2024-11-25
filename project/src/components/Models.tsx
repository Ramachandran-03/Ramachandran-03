import React from 'react';

const models = [
  {
    name: 'R7 Electric',
    type: 'Luxury Sedan',
    range: '520',
    acceleration: '3.1',
    image: 'https://images.unsplash.com/photo-1697493743473-298637c27f12?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'RX Electric',
    type: 'Performance SUV',
    range: '480',
    acceleration: '3.5',
    image: 'https://images.unsplash.com/photo-1697493743473-298637c27f12?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'R1000RR-e',
    type: 'Electric Superbike',
    range: '380',
    acceleration: '2.8',
    image: 'https://images.unsplash.com/photo-1697493743473-298637c27f12?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Models() {
  return (
    <section id="models" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Our Electric Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.name} className="group relative overflow-hidden rounded-lg">
              <img 
                src={model.image} 
                alt={model.name}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-300 mb-4">{model.type}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Range</p>
                    <p className="font-bold">{model.range} km</p>
                  </div>
                  <div>
                    <p className="text-gray-400">0-100 km/h</p>
                    <p className="font-bold">{model.acceleration}s</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}