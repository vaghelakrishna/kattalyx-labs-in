import React from 'react';

const categories = [
  { id: 1, title: 'Podcast Charts', color: 'bg-[#1e3264]', img: 'https://placehold.co/200x200/png?text=Chart', size: 'col-span-2 row-span-2' },
  { id: 2, title: 'Horror', color: 'bg-[#e8115b]', img: 'https://placehold.co/200x200/png?text=Horror', size: 'col-span-1 row-span-1' },
  { id: 3, title: 'Self-help', color: 'bg-[#27856a]', img: 'https://placehold.co/200x200/png?text=Mind', size: 'col-span-1 row-span-2' },
  { id: 4, title: 'Technology', color: 'bg-[#777777]', img: 'https://placehold.co/200x200/png?text=Tech', size: 'col-span-1 row-span-1' },
  { id: 5, title: 'Bollywood', color: 'bg-[#8d67ab]', img: 'https://placehold.co/200x200/png?text=Desi', size: 'col-span-2 row-span-1' },
  { id: 6, title: 'True Crime', color: 'bg-[#503750]', img: 'https://placehold.co/200x200/png?text=Crime', size: 'col-span-1 row-span-1' },
];

const OffsetGrid = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen p-8 text-white">
      <h2 className="text-3xl font-bold mb-10 tracking-tight italic">EXPLORE CATEGORIES</h2>

      {/* The "Chaos" Grid - Breaking the standard symmetry */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-6 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            className={`${cat.size} ${cat.color} group relative rounded-3xl p-6 overflow-hidden cursor-pointer 
            transition-all duration-500 hover:rotate-1 hover:scale-[0.98] border border-white/10`}
          >
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase leading-none tracking-tighter w-2/3">
                {cat.title}
              </h3>
              <p className="text-[10px] mt-2 opacity-60 font-mono tracking-widest uppercase">
                Collection / 0{cat.id}
              </p>
            </div>

            {/* Floating Image - Now with a glassmorphism border and different angle */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 
              transform translate-x-4 translate-y-4 
              group-hover:translate-x-0 group-hover:translate-y-0 
              transition-all duration-700 ease-in-out">
              <div className="relative w-full h-full p-1 bg-white/20 backdrop-blur-md rounded-2xl rotate-[-15deg] group-hover:rotate-0 shadow-2xl">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Number badge for that 'viby' look */}
            <div className="absolute top-6 right-6 text-xs font-mono opacity-40">
              #{i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffsetGrid;