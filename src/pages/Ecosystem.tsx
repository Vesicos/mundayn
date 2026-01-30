import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import logoNav from '@/assets/logonav.svg';
import Footer from '../components/Footer';

// Import elephant images
import elephantStage1 from '@/assets/elephant-ecosystem-stage1.png';
import elephantStage2 from '@/assets/elephant-ecosystem-stage2.png';
import elephantStage3 from '@/assets/elephant-ecosystem-stage3.png';
import elephantStage4 from '@/assets/elephant-ecosystem-stage4.png';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface StageProps {
  stageNumber: number;
  stageLabel: string;
  title: string;
  subtitle: string;
  price?: string;
  whatYouGetText: string;
  boldText: { build: string; use: string };
  ctaText: string;
  ctaHref: string;
  image: string;
  isLast?: boolean;
}

const EcosystemStage = ({
  stageNumber,
  stageLabel,
  title,
  subtitle,
  price,
  whatYouGetText,
  boldText,
  ctaText,
  ctaHref,
  image,
}: StageProps) => {
  return (
    <article className="eco-stage">
      <div className="eco-stage__indicator">
        <span className="eco-stage__dot" />
      </div>
      
      <div className="eco-stage__content">
        <div className="eco-stage__header">
          <span className="eco-stage__label">STAGE {stageNumber}</span>
          {stageLabel && <span className="eco-stage__coming">{stageLabel}</span>}
        </div>
        
        <div className="eco-stage__title-row">
          <h2 className="eco-stage__title">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className="eco-stage__title-italic">{line}</span>
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          {price && (
            <span className="eco-stage__price">{price}</span>
          )}
        </div>
        
        <p className="eco-stage__subtitle">{subtitle}</p>
        
        <p className="eco-stage__what-label">What you get:</p>
        <p className="eco-stage__what-text">{whatYouGetText}</p>
        <p className="eco-stage__what-text">
          You don't learn how to <strong>{boldText.build}</strong>. You learn how to <strong>{boldText.use}</strong> it.
        </p>
        
        {ctaHref.startsWith('/') ? (
          <Link to={ctaHref} className="eco-stage__cta">
            {ctaText} <ArrowIcon />
          </Link>
        ) : (
          <a href={ctaHref} className="eco-stage__cta">
            {ctaText} <ArrowIcon />
          </a>
        )}
      </div>
      
      <div className="eco-stage__image">
        <img 
          src={image} 
          alt={`Stage ${stageNumber} - ${title}`} 
          className="eco-stage__img"
        />
      </div>
    </article>
  );
};

const Ecosystem = () => {
  return (
    <div className="mundayn-page">
      {/* Navigation */}
      <nav className="mundayn-nav">
        <Link to="/" className="mundayn-nav__logo">
          <img src={logoNav} alt="Mundayn" className="mundayn-nav__logo-img" />
        </Link>
        <ul className="mundayn-nav__links">
          <li><Link to="/">Product</Link></li>
          <li><Link to="/done-for-you">Done-For-You</Link></li>
          <li><Link to="/ecosystem">Ecosystem</Link></li>
        </ul>
        <a href="/#packages" className="mundayn-nav__cta">
          Start Your 14-Day Free Trial <ArrowIcon />
        </a>
      </nav>

      {/* Hero Section */}
      <header className="eco-hero">
        <h1 className="eco-hero__title">
          <span className="eco-hero__title-italic">Your Business Grows.</span><br />
          <span className="eco-hero__title-italic">Mundayn Grows With You.</span>
        </h1>
        <p className="eco-hero__subtitle">
          Setting up your system is step one. Running and evolving<br />
          your business is the ongoing journey.
        </p>
        <p className="eco-hero__text">
          That's why Mundayn isn't just a platform. It's an ecosystem.
        </p>
      </header>

      {/* Stages Timeline */}
      <section className="eco-stages">
        <div className="mundayn-container eco-stages__container">
          {/* Continuous vertical line */}
          <div className="eco-stages__timeline-line" />
          
          <EcosystemStage
            stageNumber={1}
            stageLabel=""
            title="Foundation"
            subtitle="Your Account, fully set up and running in one week."
            price="$599"
            whatYouGetText="One week from now, you log in to a Mundayn account that works. Everything configured. Your branding implemented. Automations tested. Payments processing. Calendar synced. Email sending."
            boldText={{ build: "build it", use: "use it" }}
            ctaText="LEARN ALL DETAILS"
            ctaHref="/foundation-setup"
            image={elephantStage1}
          />
          
          <EcosystemStage
            stageNumber={2}
            stageLabel=""
            title="Frameworks"
            subtitle="Your Account, fully set up and running in one week."
            price="$59"
            whatYouGetText="One week from now, you log in to a Mundayn account that works. Everything configured. Your branding implemented. Automations tested. Payments processing. Calendar synced. Email sending."
            boldText={{ build: "build it", use: "use it" }}
            ctaText="SUBMIT YOUR REQUEST"
            ctaHref="#frameworks"
            image={elephantStage2}
          />
          
          <EcosystemStage
            stageNumber={3}
            stageLabel="(COMING 2025)"
            title="On-Demand
Implementation"
            subtitle="Your Account, fully set up and running in one week."
            whatYouGetText="One week from now, you log in to a Mundayn account that works. Everything configured. Your branding implemented. Automations tested. Payments processing. Calendar synced. Email sending."
            boldText={{ build: "build it", use: "use it" }}
            ctaText="JOIN THE WAITLIST"
            ctaHref="#on-demand"
            image={elephantStage3}
          />
          
          <EcosystemStage
            stageNumber={4}
            stageLabel="(EARLY 2026)"
            title="Dedicated Support
Hours"
            subtitle="Your Account, fully set up and running in one week."
            whatYouGetText="One week from now, you log in to a Mundayn account that works. Everything configured. Your branding implemented. Automations tested. Payments processing. Calendar synced. Email sending."
            boldText={{ build: "build it", use: "use it" }}
            ctaText="JOIN THE WAITLIST"
            ctaHref="#support"
            image={elephantStage4}
            isLast
          />
        </div>
      </section>

      {/* The Ecosystem Belief Section */}
      <section className="eco-belief">
        <div className="mundayn-container">
          <h2 className="eco-belief__title">
            The Ecosystem <span className="eco-belief__title-italic">Belief</span>
          </h2>
          <p className="eco-belief__quote">
            "We don't just give you tools. We become your operational partner."
          </p>
          <p className="eco-belief__text">
            Start with Stage 1. Access more as you grow.
          </p>
          <a href="/foundation-setup" className="eco-belief__cta">
            LEARN ALL DETAILS <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ecosystem;
