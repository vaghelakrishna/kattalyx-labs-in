
import { Marquee } from "./ui/marquee"
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Zapier",
    img: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
  },
  {
    name: "HubSpot",
    img: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
  },
  {
    name: "Zoom",
    img: "https://cdn.worldvectorlogo.com/logos/zoom-communications.svg",
  },
  {
    name: "Google Meet",
    img: "https://cdn.worldvectorlogo.com/logos/google-meet-icon.svg",
  },
  {
    name: "Zendesk",
    img: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
  },
  {
    name: "Intercom",
    img: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
  },
  {
    name: "Notion",
    img: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
  },
  {
    name: "Slack",
    img: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    name: "Asana",
    img: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
  },
  {
    name: "Microsoft Teams",
    img: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg",
  },
];



const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
}: {
  img: string
  name: string
}) => {
  return (
    <div className="h-20 w-48 flex items-center justify-center">
      <img
        src={img}
        alt={name}
        className="h-8 object-contain transition duration-300 "
      />
    </div>
  )
}


export function MarqueeDemo() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 mb-2"
        >
          OUR PARTNERS
        </motion.span>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Our Trusted <ZScribbleUnderline text="Partners" />
        </h2>

        <p className="max-w-2xl text-gray-500 text-sm md:text-base">
          We collaborate with industry leaders and organizations to bring you
          the best resources, expertise, and opportunities for success.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </>
  )
}





const ZScribbleUnderline = ({ text, color = "#FACC15" }: { text: string; color?: string }) => (
  <span className="relative inline-block px-1">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-3 left-0 w-[105%] h-6 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      {/* Animated Main Stroke */}
      <motion.path
        d="M2 10 C 10 10, 25 8, 30 10 C 10 15, 5 18, 40 14 C 70 12, 90 12, 98 12"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
      />

      {/* Background 'Ink' Fill (Optional: Animates slightly after) */}
      {/* <motion.path
        d="M2 10 Q 15 8, 25 10 L 5 15 Q 20 18, 40 14 L 98 12"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3, // Slight stagger for the messy effect
          ease: "easeInOut",
        }}
      /> */}
    </svg>
  </span>
);

