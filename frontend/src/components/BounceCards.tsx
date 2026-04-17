import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


 
interface CardItem {
  image: string;
  date: string;
  title: string;
}

interface BounceCardsProps {
  className?: string;
  cards: CardItem[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
}

const transformStyles = [
  "translate(-260px, 50px) rotate(-14deg)",
  "translate(-130px, 25px) rotate(-7deg)",
  "translate(0px, 0px) rotate(0deg)",
  "translate(130px, 25px) rotate(7deg)",
  "translate(260px, 50px) rotate(14deg)"
];

export default function BounceCards({
  className = "",
  cards,
  containerWidth = 700,
  containerHeight = 320,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.6)"
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);
useEffect(() => {
  if (!isMobile || !sliderRef.current) return;

  const slider = sliderRef.current;
  let index = 0;

  const interval = setInterval(() => {
    index++;
    if (index >= cards.length) index = 0;

    slider.scrollTo({
      left: slider.clientWidth * 0.8 * index,
      behavior: "smooth"
    });
  }, 3000);

  return () => clearInterval(interval);
}, [isMobile, cards.length]);


  useEffect(() => {
    if (!containerRef.current || hasAnimated || isMobile) return;


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const ctx = gsap.context(() => {
              gsap.fromTo(
                ".card",
                { scale: 0, y: 80, opacity: 0 },
                {
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  stagger: animationStagger,
                  ease: easeType,
                  delay: animationDelay,
                  onComplete: () => {
                    cards.forEach((_, i) => {
                      gsap.to(`.card-${i}`, {
                        transform: transformStyles[i],
                        duration: 0.8,
                        ease: "power3.out"
                      });
                    });
                  }
                }
              );
            }, containerRef);

            return () => ctx.revert();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [cards, animationDelay, animationStagger, easeType, hasAnimated, isMobile]);

  return (
    <>
     {isMobile ? (
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto flex gap-4 px-4 snap-x snap-mandatory scrollbar-hide"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[75%] snap-center relative group"
            style={{
              height: 300,
              borderRadius: 24,
              overflow: "hidden",
              border: "6px solid #f5f5dc",
              background: "#000"
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs opacity-70">
                {card.date}
              </span>
              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    ) : (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute group`}
          style={{
            width: 220,
            height: 280,
            borderRadius: 28,
            overflow: "hidden",
            border: "8px solid #f5f5dc",
            background: "#000",
            boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
            transform: transformStyles[idx]
          }}
        >
          {/* IMAGE */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/65 transition-colors duration-500" />

          {/* CONTENT */}
          <div className="
            absolute inset-0 flex flex-col items-center justify-center
            text-center px-6
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          ">
            <span className="text-white/70 text-xs mb-1">
              {card.date}
            </span>

            <h3 className="text-white text-lg font-semibold leading-tight">
              {card.title}
            </h3>
          </div>

          {/* DEPTH ON HOVER */}
          <style >{`
            .group:hover {
              z-index: 20;
              box-shadow: 0 40px 80px rgba(0,0,0,0.65);
            }
          `}</style>
        </div>
      ))}
    </div>
     )}
  </>
  );
}
