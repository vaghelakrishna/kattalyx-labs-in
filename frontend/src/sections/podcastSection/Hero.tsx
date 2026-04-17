import React, { useState, useEffect } from 'react';

const PodcastHero = () => {
  const [index, setIndex] = useState(0);

  // Podcast specific data: Mic shots, studio vibes, or guest clips
  const media = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1400&auto=format&fit=crop'
    },
    {
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-studio-microphone-43051-large.mp4'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1400&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % media.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#fcfcfc] overflow-hidden font-sans">

      {/* 1. TEXT SECTION - Left Centered */}
      <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-16 lg:left-20 z-10">
        <h1 className="text-[7vw] lg:text-[90px] font-bold leading-[0.82] tracking-[-0.05em] uppercase text-black">
          UNCUT VOICES <br />
          REDEFINING <br />
          THE NARRATIVE
        </h1>
      </div>

      {/* 2. MEDIA BOX - Bottom Right pinned */}
      <div className="absolute bottom-12 right-10 md:right-16 lg:right-20 w-[45%] max-w-[360px]">
        <div className="aspect-square md:aspect-video w-full h-full border border-gray-100 rounded-sm overflow-hidden bg-black shadow-2xl">
          {media[index].type === 'video' ? (
            <video
              key={media[index].url}
              src={media[index].url}
              autoPlay muted loop playsInline
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <img
              src={media[index].url}
              className="w-full h-full object-cover transition-opacity duration-700"
              alt="podcast episode"
            />
          )}

          {/* Subtle "LIVE" indicator for podcast feel */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
            <span className="text-[8px] font-bold text-white uppercase tracking-widest">On Air</span>
          </div>
        </div>
      </div>

      {/* 3. SCROLL TEXT - Bottom Left */}
      <div className="absolute bottom-10 left-10 md:left-16 lg:left-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
          Listen to episodes
        </span>
      </div>

    </div>
  );
};

export default PodcastHero;