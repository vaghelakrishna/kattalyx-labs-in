import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import * as Icons from 'lucide-react';
interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}
import "swiper/css";
import "swiper/css/effect-coverflow";

const DynamicIcon = ({ name, className, size }: DynamicIconProps) => {
  const Icon = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string; size?: number }>;
  return Icon ? <Icon className={className} size={size} /> : null;
};

const HeroSection = () => {
  const slides = [
    { id: 1, title: 'Graphic Design', category: 'Creative', iconName: 'Palette', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Web Development', category: 'Technology', iconName: 'Code', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Data Science', category: 'Analytics', iconName: 'BarChart3', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Digital Marketing', category: 'Business', iconName: 'TrendingUp', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'UI/UX Research', category: 'Design', iconName: 'Sparkles', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="w-full flex justify-center bg-white">
      {/* Constraints the entire section to 7xl width */}
      <section className="max-w-7xl w-full relative flex items-center justify-center overflow-hidden font-sans flex-col py-10 mt-24">

        {/* Heading Section - Updated for Online Classes */}
        <div className="text-center px-4 mb-16 max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A1128] tracking-tight leading-[1.1]">
            Master <span className="text-blue-600 italic font-serif font-medium">new-skills</span> with
            <br />
            top-tier mentors.
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Access world-class education from anywhere. Join interactive sessions,
            track your progress, and build a career you love.
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          initialSlide={2} // Keeps London centered
          slidesPerView={'auto'}
          allowTouchMove={true} // Prevents moving for a purely static presentation
          coverflowEffect={{
            rotate: 0,
            stretch: -70, // Increased stretch for tighter stacking like image_7d4f5d.png
            depth: 280,   // More depth to make side cards smaller like image_7d4ade.png
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full !overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="!w-[300px] md:!w-[360px]">
              <div className="relative aspect-[9/13] rounded-[45px] overflow-hidden shadow-2xl">

                {/* Background Image */}
                <img
                  src={slide.img}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={slide.title}
                />

                {/* Top Category Label - Fixed to use DynamicIcon and slide.category */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                  <DynamicIcon name={slide.iconName} className="text-white" size={14} />
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">
                    {slide.category}
                  </span>
                </div>

                {/* Bottom Info Card - Fixed to use slide.title */}
                <div className="absolute bottom-5 left-4 right-4 p-6 bg-white/70 backdrop-blur-3xl rounded-[35px] text-[#2D2D2D] shadow-lg">
                  <h3 className="text-xl font-bold flex items-center justify-between">
                    {slide.title} <span className="text-gray-400">&rsaquo;</span>
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    {/* Static info for presentation */}
                    <div className="bg-black/5 px-3 py-1 rounded-lg text-[10px] font-bold inline-flex items-center gap-1.5">
                      📚 12 Modules
                    </div>
                    <div className="bg-black/5 px-3 py-1 rounded-lg text-[10px] font-bold inline-flex items-center gap-1.5">
                      ✨ Expert Mentor
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HeroSection;