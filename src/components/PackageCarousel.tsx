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

  return (
    <motion.div
      className="absolute w-[320px] md:w-[380px] lg:w-[420px] px-6 py-8 md:px-8 md:py-10"
      style={{
        backgroundColor: bgColor,
        borderRadius,
        boxShadow: shadow,
        zIndex,
        top: '50%',
        left: '50%',
        marginLeft: '-160px',
      }}
      initial={false}
      animate={{
        x,
        y: '-50%',
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
      <div className="mb-3 opacity-70">
        <Icon size={34} className="text-[#ED5D59]" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-[26px] text-[#ddd7c9] leading-tight tracking-tight mb-2">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {word}
            {i === 0 && <br />}
            {i > 0 && " "}
          </span>
        ))}
      </h3>

      {/* Price */}
      <p className="text-[#F5AD2D] font-semibold text-[16px] tracking-wide mb-4">
        {price}/MONTH
      </p>

      {/* Divider */}
      <div className="h-[1px] bg-[#ED5D59] mb-6" />

      {/* Features */}
      <div className="text-[#ddd7c9] text-[16px] leading-relaxed">
        <p className="font-bold mb-2">
          {previousPackage ? `Everything in ${previousPackage}, PLUS:` : "What's inside:"}
        </p>
        {features.map((feature, index) => (
          <p key={index} className="mb-1">• {feature}</p>
        ))}

        <p className="mt-4 font-bold mb-2">This is for you:</p>
        <p className="mb-4 opacity-90">{description}</p>

        <p className="mb-2">Apps you can cancel:</p>
        <ul className="list-disc pl-5">
          {apps.map((app, index) => (
            <li key={index} className="mb-1">{app}</li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="#trial"
          className="inline-flex items-center justify-center gap-3 bg-[#F5AD2D] text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#e6a02a] transition-colors w-full"
        >
          {buttonText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function NavigationArrow({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <motion.button
      className={`absolute z-20 top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'}`}
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
    const cardWidth = isMobile ? 320 : 420;

    if (isMobile) {
      if (relativeIndex === 0) {
        return { x: 0, scale: 1, opacity: 1, zIndex: 3, isCenter: true };
      }
      return { x: containerWidth * 2, scale: 0.8, opacity: 0, zIndex: 0, isCenter: false };
    }

    const sideGap = 40;

    switch (relativeIndex) {
      case 0:
        return { x: 0, scale: 1.05, opacity: 1, zIndex: 3, isCenter: true };
      case 1:
        return { x: cardWidth + sideGap, scale: 0.9, opacity: 0.6, zIndex: 2, isCenter: false };
      case packages.length - 1:
        return { x: -(cardWidth + sideGap), scale: 0.9, opacity: 0.6, zIndex: 2, isCenter: false };
      default:
        const direction = relativeIndex < packages.length / 2 ? 1 : -1;
        return { x: containerWidth * direction * 1.5, scale: 0.7, opacity: 0, zIndex: 1, isCenter: false };
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
    >
      {/* Cards wrapper with proper height for content */}
      <div className="relative flex items-center justify-center min-h-[700px] py-8">
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

        {/* Navigation arrows - positioned relative to cards */}
        <NavigationArrow direction="left" onClick={handlePrev} />
        <NavigationArrow direction="right" onClick={handleNext} />
      </div>

      {/* Edge gradient overlays */}
      <div className="absolute left-0 top-0 w-[150px] md:w-[200px] h-full z-10 pointer-events-none bg-gradient-to-r from-[#471D3C] via-[#471D3C]/70 to-transparent" />
      <div className="absolute right-0 top-0 w-[150px] md:w-[200px] h-full z-10 pointer-events-none bg-gradient-to-l from-[#471D3C] via-[#471D3C]/70 to-transparent" />
    </div>
  );
}
