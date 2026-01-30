import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Globe, BookOpen, Users, LucideIcon } from 'lucide-react';

interface Package {
  title: string;
  price: string;
  icon: LucideIcon;
  previousPackage: string | null;
  features: string[];
  description: string;
  apps: string[];
  buttonText: string;
}

interface PackageCardProps extends Package {
  isCenter: boolean;
  position: 'left' | 'center' | 'right' | 'hidden';
}

function PackageCard({
  title,
  price,
  icon: Icon,
  previousPackage,
  features,
  description,
  apps,
  buttonText,
  isCenter,
  position
}: PackageCardProps) {
  const bgColor = isCenter ? "#58233f" : "#2a0c22";
  const borderRadius = isCenter ? "12px" : "12px";
  const shadow = isCenter ? "0px 8px 40px 0px rgba(0,0,0,0.4)" : "none";

  // Get transform and style based on position
  const getPositionStyles = () => {
    switch (position) {
      case 'center':
        return {
          x: 0,
          scale: 1.08,
          opacity: 1,
          zIndex: 3,
        };
      case 'left':
        return {
          x: -320, // Push left card far left so only right edge shows
          scale: 0.95,
          opacity: 1,
          zIndex: 1,
        };
      case 'right':
        return {
          x: 320, // Push right card far right so only left edge shows
          scale: 0.95,
          opacity: 1,
          zIndex: 1,
        };
      default:
        return {
          x: 0,
          scale: 0.8,
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  const posStyles = getPositionStyles();

  return (
    <motion.div
      className="absolute flex flex-col"
      style={{
        width: '380px',
        height: '620px',
        backgroundColor: bgColor,
        borderRadius,
        boxShadow: shadow,
        left: '50%',
        top: '50%',
      }}
      initial={false}
      animate={{
        x: `calc(-50% + ${posStyles.x}px)`,
        y: '-50%',
        scale: posStyles.scale,
        zIndex: posStyles.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }}
    >
      {/* Card content wrapper */}
      <div className="flex flex-col h-full px-7 py-8">
        {/* Icon */}
        <div className="mb-3 opacity-70">
          <Icon size={28} className="text-[#ED5D59]" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-[26px] text-[#ddd7c9] leading-tight tracking-tight mb-1">
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {word}
              {i === 0 && <br />}
              {i > 0 && " "}
            </span>
          ))}
        </h3>

        {/* Price */}
        <p className="text-[#F5AD2D] font-semibold text-[14px] tracking-wide mb-4">
          {price}/MONTH
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-[#ED5D59] mb-5" />

        {/* Features - flex-grow to push button down */}
        <div className="text-[#ddd7c9] text-[14px] leading-relaxed flex-grow">
          <p className="font-bold mb-2">
            {previousPackage ? `Everything in ${previousPackage}, PLUS:` : "What's inside:"}
          </p>
          {features.map((feature, index) => (
            <p key={index} className="mb-1">• {feature}</p>
          ))}

          <p className="mt-4 font-bold mb-2">This is for you:</p>
          <p className="mb-4 opacity-90">{description}</p>

          <p className="mb-2">Apps you can cancel:</p>
          <ul className="list-disc pl-4">
            {apps.map((app, index) => (
              <li key={index} className="mb-0.5">{app}</li>
            ))}
          </ul>
        </div>

        {/* CTA Button - pinned to bottom */}
        <div className="mt-auto pt-5">
          <a
            href="#trial"
            className="inline-flex items-center justify-center gap-2 bg-[#F5AD2D] text-black font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:bg-[#e6a02a] transition-colors w-full"
          >
            {buttonText}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Gradient fade overlay for side cards */}
      {position === 'left' && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-[12px]"
          style={{
            background: 'linear-gradient(to left, transparent 30%, rgba(71, 29, 60, 0.85) 100%)',
          }}
        />
      )}
      {position === 'right' && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-[12px]"
          style={{
            background: 'linear-gradient(to right, transparent 30%, rgba(71, 29, 60, 0.85) 100%)',
          }}
        />
      )}
    </motion.div>
  );
}

function NavigationArrow({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <motion.button
      className={`absolute z-20 top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-[15%]' : 'right-[15%]'}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === 'left' ? 'Previous package' : 'Next package'}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#3e1834]/80 rounded-full backdrop-blur-sm">
        <span className="text-[#ED5D59] text-xl font-bold">
          {direction === 'left' ? '←' : '→'}
        </span>
      </div>
    </motion.button>
  );
}

const packages: Package[] = [
  {
    title: "Entrepreneur Package",
    price: "$59",
    icon: Briefcase,
    previousPackage: null,
    features: [
      "Complete contact management",
      "Text- and Email marketing & automations",
      "Scheduling with automated booking",
      "Payment processing & invoicing",
      "Forms, quizzes & surveys"
    ],
    description: "Running a coaching, artist, or consulting business. Need professional operating backbone without complexity you don't need (yet).",
    apps: [
      "HubSpot/Zoho",
      "Mailchimp/Kit",
      "Zapier/Make",
      "Calendly/Acuity",
      "Typeform/JotForm"
    ],
    buttonText: "Start With Entrepreneur"
  },
  {
    title: "Creator Package",
    price: "$99",
    icon: Globe,
    previousPackage: "Entrepreneur",
    features: [
      "Website & landing page builder",
      "WordPress connection",
      "Social media planner",
      "and more"
    ],
    description: "Creating content. Building brand. Growing audience. Need web presence and social management without hiring a team.",
    apps: [
      "Wix/Squarespace",
      "Manychat/Buffer",
      "WordPress Hosting"
    ],
    buttonText: "Start With Creator"
  },
  {
    title: "Teacher Package",
    price: "$149",
    icon: BookOpen,
    previousPackage: "Creator",
    features: [
      "Course hosting & delivery",
      "Complete sales funnel builder",
      "Membership platform (Kajabi-comparable)",
      "and more"
    ],
    description: "Building community. Managing team. Running sophisticated sales processes. Need enterprise-level infrastructure without enterprise cost.",
    apps: [
      "Kajabi/Teachable",
      "Clickfunnels",
      "Tapfiliate"
    ],
    buttonText: "Start With Teacher"
  },
  {
    title: "Leader Package",
    price: "$198",
    icon: Users,
    previousPackage: "Teacher",
    features: [
      "Community platform (Skool-comparable)",
      "Sales pipeline management",
      "Team collaboration tools",
      "and more"
    ],
    description: "Building community. Managing team. Running sophisticated sales processes. Need enterprise-level infrastructure without enterprise cost.",
    apps: [
      "Skool/Circle",
      "Salesforce/Pipedrive",
      "Mighty Networks",
      "Asana/ClickUp"
    ],
    buttonText: "Start With Leader"
  }
];

export default function PackageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with Entrepreneur (index 0)
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % packages.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const getCardPosition = (index: number): 'left' | 'center' | 'right' | 'hidden' => {
    const relativeIndex = (index - activeIndex + packages.length) % packages.length;
    
    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === packages.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="relative w-full">
      {/* Clipping wrapper - this creates the "masked" effect */}
      <div 
        className="relative w-full mx-auto overflow-hidden"
        style={{ height: '680px' }}
      >
        {/* Cards container */}
        <div className="relative w-full h-full">
          {packages.map((pkg, index) => {
            const position = getCardPosition(index);
            return (
              <PackageCard
                key={index}
                {...pkg}
                isCenter={position === 'center'}
                position={position}
              />
            );
          })}
        </div>

        {/* Navigation arrows - inside the clipping wrapper */}
        <NavigationArrow direction="left" onClick={handlePrev} />
        <NavigationArrow direction="right" onClick={handleNext} />

        {/* Edge gradient overlays for premium fade effect */}
        <div className="absolute left-0 top-0 w-[120px] h-full z-10 pointer-events-none bg-gradient-to-r from-[#471D3C] to-transparent" />
        <div className="absolute right-0 top-0 w-[120px] h-full z-10 pointer-events-none bg-gradient-to-l from-[#471D3C] to-transparent" />
      </div>
    </div>
  );
}
