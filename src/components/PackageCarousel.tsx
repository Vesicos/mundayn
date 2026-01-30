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
  zIndex: number;
  x: number;
  scale: number;
  opacity: number;
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
  zIndex,
  x,
  scale,
  opacity
}: PackageCardProps) {
  const bgColor = isCenter ? "#58233f" : "#2a0c22";
  const borderRadius = isCenter ? "8px" : "15px";
  const shadow = isCenter ? "0px 4px 23px 0px rgba(0,0,0,0.3)" : "none";

  // Calculate approximate card height based on content
  const cardHeight = 580;
  
  return (
    <motion.div
      className="absolute w-[300px] md:w-[340px] lg:w-[380px] px-5 py-6 md:px-6 md:py-8"
      style={{
        backgroundColor: bgColor,
        borderRadius,
        boxShadow: shadow,
        zIndex,
        left: '50%',
        top: '50%',
        height: '520px',
      }}
      initial={false}
      animate={{
        x: x - 190, // offset for left: 50% (half of max card width)
        y: -260, // offset for top: 50% (half of card height)
        scale,
        opacity
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }}
    >
      {/* Icon */}
      <div className="mb-2 opacity-70">
        <Icon size={28} className="text-[#ED5D59]" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-[22px] md:text-[24px] text-[#ddd7c9] leading-tight tracking-tight mb-1">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {word}
            {i === 0 && <br />}
            {i > 0 && " "}
          </span>
        ))}
      </h3>

      {/* Price */}
      <p className="text-[#F5AD2D] font-semibold text-[14px] tracking-wide mb-3">
        {price}/MONTH
      </p>

      {/* Divider */}
      <div className="h-[1px] bg-[#ED5D59] mb-4" />

      {/* Features */}
      <div className="text-[#ddd7c9] text-[13px] md:text-[14px] leading-relaxed">
        <p className="font-bold mb-1.5">
          {previousPackage ? `Everything in ${previousPackage}, PLUS:` : "What's inside:"}
        </p>
        {features.map((feature, index) => (
          <p key={index} className="mb-0.5">• {feature}</p>
        ))}

        <p className="mt-3 font-bold mb-1.5">This is for you:</p>
        <p className="mb-3 opacity-90">{description}</p>

        <p className="mb-1.5">Apps you can cancel:</p>
        <ul className="list-disc pl-4">
          {apps.map((app, index) => (
            <li key={index} className="mb-0.5">{app}</li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-5">
        <a
          href="#trial"
          className="inline-flex items-center justify-center gap-2 bg-[#F5AD2D] text-black font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-[#e6a02a] transition-colors w-full"
        >
          {buttonText}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function NavigationArrow({ direction, onClick, containerHeight }: { direction: 'left' | 'right'; onClick: () => void; containerHeight: number }) {
  return (
    <motion.button
      className={`absolute z-20 ${direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'}`}
      style={{ top: containerHeight / 2, transform: 'translateY(-50%)' }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === 'left' ? 'Previous package' : 'Next package'}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#3e1834] rounded-full">
        <span className="text-[#ED5D59] text-xl font-bold opacity-70">
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
  const [activeIndex, setActiveIndex] = useState(1); // Start with Creator (index 1)
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        setIsMobile(width < 900);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

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

  const getCardStyles = (index: number) => {
    const relativeIndex = (index - activeIndex + packages.length) % packages.length;
    const cardWidth = isMobile ? 300 : 380;

    if (isMobile) {
      if (relativeIndex === 0) {
        return { x: 0, scale: 1, opacity: 1, zIndex: 3, isCenter: true };
      }
      return { x: containerWidth * 2, scale: 0.8, opacity: 0, zIndex: 0, isCenter: false };
    }

    const sideGap = 35;

    switch (relativeIndex) {
      case 0:
        return { x: 0, scale: 1.02, opacity: 1, zIndex: 3, isCenter: true };
      case 1:
        return { x: cardWidth + sideGap, scale: 0.88, opacity: 0.55, zIndex: 2, isCenter: false };
      case packages.length - 1:
        return { x: -(cardWidth + sideGap), scale: 0.88, opacity: 0.55, zIndex: 2, isCenter: false };
      default:
        const direction = relativeIndex < packages.length / 2 ? 1 : -1;
        return { x: containerWidth * direction * 1.5, scale: 0.7, opacity: 0, zIndex: 1, isCenter: false };
    }
  };

  // Fixed card height that fits all content
  const cardContainerHeight = 600;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ overflow: 'visible' }}
    >
      {/* Cards container */}
      <div 
        className="relative w-full"
        style={{ height: `${cardContainerHeight}px`, overflow: 'visible' }}
      >
        {/* Package cards */}
        {packages.map((pkg, index) => {
          const styles = getCardStyles(index);
          return (
            <PackageCard
              key={index}
              {...pkg}
              isCenter={styles.isCenter}
              zIndex={styles.zIndex}
              x={styles.x}
              scale={styles.scale}
              opacity={styles.opacity}
            />
          );
        })}

        {/* Navigation arrows - vertically centered with cards */}
        <NavigationArrow direction="left" onClick={handlePrev} containerHeight={cardContainerHeight} />
        <NavigationArrow direction="right" onClick={handleNext} containerHeight={cardContainerHeight} />
      </div>

      {/* Edge gradient overlays */}
      <div className="absolute left-0 top-0 w-[100px] md:w-[150px] h-full z-10 pointer-events-none bg-gradient-to-r from-[#471D3C] to-transparent" />
      <div className="absolute right-0 top-0 w-[100px] md:w-[150px] h-full z-10 pointer-events-none bg-gradient-to-l from-[#471D3C] to-transparent" />
    </div>
  );
}
