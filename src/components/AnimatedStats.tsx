import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface StatItem {
  value: string;
  endValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  animationDuration?: number;
}

function AnimatedStatCard({
  stat,
  isVisible,
  animationDuration,
  delay
}: {
  stat: StatItem;
  isVisible: boolean;
  animationDuration: number;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible || hasAnimated.current || !stat.endValue) return;
    
    hasAnimated.current = true;
    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = stat.endValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (animationDuration * 1000), 1);
      
      // Calculate current count based on progress with easing
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutProgress * (endValue - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    // Delay the animation start
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [isVisible, animationDuration, stat.endValue, delay]);

  const displayValue = stat.endValue 
    ? `${stat.prefix || ''}${isVisible ? count : 0}${stat.suffix || ''}`
    : stat.value;

  return (
    <motion.article
      className="mundayn-number-card"
      initial={{ opacity: 0, y: 80 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: animationDuration, 
        ease: "easeOut",
        delay: delay
      }}
    >
      <div className="mundayn-number-card__divider" />
      <div className="mundayn-number-card__content">
        <p className="mundayn-number-card__value">{displayValue}</p>
        <p className="mundayn-number-card__label">{stat.label}</p>
        <p className="mundayn-number-card__desc">{stat.description}</p>
      </div>
    </motion.article>
  );
}

export default function AnimatedStats({ 
  stats, 
  animationDuration = 1.8 
}: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Set up intersection observer to detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="mundayn-numbers__grid"
    >
      {stats.map((stat, index) => (
        <AnimatedStatCard
          key={index}
          stat={stat}
          isVisible={isVisible}
          animationDuration={animationDuration}
          delay={index * 0.3} // Stagger: 0s, 0.3s, 0.6s, 0.9s
        />
      ))}
    </div>
  );
}
