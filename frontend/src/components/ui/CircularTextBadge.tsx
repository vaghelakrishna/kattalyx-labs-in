import { motion } from "framer-motion";

interface CircularTextBadgeProps {
  text: string;
  size?: number;
}

const CircularTextBadge = ({ text, size = 120 }: CircularTextBadgeProps) => {
  const radius = size / 2 - 10;
  const viewBox = `0 0 ${size} ${size}`;

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 14,
        ease: "linear",
      }}
      style={{ width: size, height: size }}
      className="absolute inset-0 flex items-center justify-center"
    >
        <div className="bg-white/80 backdrop-blur rounded-full">
      <svg viewBox={viewBox} className="w-full h-full ">
        <defs>
          <path
            id="circlePath"
            d={`
              M ${size / 2}, ${size / 2}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
          />
        </defs>

        <text
          fill="#1f2937"
          fontSize="12"
          fontWeight="600"
          letterSpacing="3"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>

        {/* Center Dot */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="45"
          fill="#2563eb"
        />
      </svg>
      </div>
    </motion.div>
  );
};

export default CircularTextBadge;
