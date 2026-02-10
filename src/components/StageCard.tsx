import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

interface StageCardProps {
  title: string;
  titleItalic: string;
  description: string;
  bgColor: string;
  hoverBgColor?: string;
  image?: string;
}

const StageCard = ({
  title,
  titleItalic,
  description,
  bgColor,
  hoverBgColor = "#F4E0BC",
  image
}: StageCardProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.article
      className="mundayn-stage-card"
      style={{ backgroundColor: bgColor }}
      {...(isMobile
        ? {
            whileInView: { scale: 1.02, backgroundColor: hoverBgColor },
            viewport: { amount: 0.6, margin: "-10% 0px -10% 0px" },
          }
        : {
            whileHover: { scale: 1.02, backgroundColor: hoverBgColor },
          }
      )}
      transition={{ duration: 0.3 }}
    >
      <div className="mundayn-stage-card__image-container">
        {image ? (
          <img 
            src={image} 
            alt={`${title} ${titleItalic}`} 
            className="mundayn-stage-card__image"
          />
        ) : (
          <div className="mundayn-stage-card__image-placeholder">
            <svg viewBox="0 0 100 100" fill="currentColor" opacity="0.3">
              <ellipse cx="50" cy="60" rx="35" ry="25" />
              <ellipse cx="25" cy="55" rx="12" ry="18" />
              <ellipse cx="75" cy="55" rx="12" ry="18" />
              <ellipse cx="50" cy="35" rx="20" ry="15" />
              <circle cx="42" cy="32" r="3" />
              <circle cx="58" cy="32" r="3" />
              <path d="M50 45 Q50 70 45 85" strokeWidth="6" stroke="currentColor" fill="none" />
            </svg>
          </div>
        )}
      </div>
      <div className="mundayn-stage-card__content">
        <h3 className="mundayn-stage-card__title">
          {title} <span className="mundayn-stage-card__title-italic">{titleItalic}</span>
        </h3>
        <p className="mundayn-stage-card__text">{description}</p>
      </div>
    </motion.article>
  );
};

export default StageCard;
