import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import logoNav from '@/assets/logonav.svg';

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
  description: string;
  whatYouGetLabel: string;
  bullets: string[];
  boldText: { build: string; use: string };
  ctaText: string;
  ctaHref: string;
  imagePlaceholder: string;
  isReversed?: boolean;
}

const EcosystemStage = ({
  stageNumber,
  stageLabel,
  title,
  subtitle,
  price,
  description,
  whatYouGetLabel,
  bullets,
  boldText,
  ctaText,
  ctaHref,
  imagePlaceholder,
  isReversed = false,
}: StageProps) => {
  return (
    <article className={`eco-stage ${isReversed ? 'eco-stage--reversed' : ''}`}>
      <div className="eco-stage__indicator">
        <span className="eco-stage__dot" />
        <span className="eco-stage__line" />
      </div>
      
      <div className="eco-stage__content">
        <div className="eco-stage__header">
          <span className="eco-stage__label">STAGE {stageNumber}</span>
          {stageLabel && <span className="eco-stage__coming">{stageLabel}</span>}
        </div>
        
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
        
        <p className="eco-stage__subtitle">{subtitle}</p>
        
        <p className="eco-stage__description">{description}</p>
        
        <p className="eco-stage__what-label">{whatYouGetLabel}</p>
        <p className="eco-stage__what-text">
          One week from now, you log in to a Mundayn account that works. Everything configured. Your branding implemented. Automations tested. Payments processing. Calendar synced. Email sending.
        </p>
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
        <div className="mundayn-placeholder mundayn-placeholder--elephant eco-stage__placeholder">
          <span>{imagePlaceholder}</span>
        </div>
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
        <a href="#trial" className="mundayn-nav__cta">
          Start Your 14-Day Free Trial <ArrowIcon />
        </a>
      </nav>

      {/* Hero Section */}
      <header className="eco-hero">
        <h1 className="eco-hero__title">
          Your Business Grows.<br />
          Mundayn <span className="eco-hero__title-italic">Grows With You.</span>
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
        <div className="mundayn-container">
          <EcosystemStage
            stageNumber={1}
            stageLabel=""
            title="Foundation"
            subtitle="Your Account, fully set up and running in one week."
            price="$599"
            description=""
            whatYouGetLabel="What you get:"
            bullets={[]}
            boldText={{ build: "build it", use: "use it" }}
            ctaText="LEARN ALL DETAILS"
            ctaHref="/foundation-setup"
            imagePlaceholder="Elephant with baby"
          />
          
          <EcosystemStage
            stageNumber={2}
            stageLabel=""
            title="Frameworks"
            subtitle="Your Account, fully set up and running in one week."
            price="$59"
            description=""
            whatYouGetLabel="What you get:"
            bullets={[]}
            boldText={{ build: "build it", use: "use it" }}
            ctaText="SUBMIT YOUR REQUEST"
            ctaHref="#frameworks"
            imagePlaceholder="Elephant looking in mirror"
          />
          
          <EcosystemStage
            stageNumber={3}
            stageLabel="(COMING 2025)"
            title="On-Demand\nImplementation"
            subtitle="Your Account, fully set up and running in one week."
            description=""
            whatYouGetLabel="What you get:"
            bullets={[]}
            boldText={{ build: "build it", use: "use it" }}
            ctaText="JOIN THE WAITLIST"
            ctaHref="#on-demand"
            imagePlaceholder="Elephant with boxes"
          />
          
          <EcosystemStage
            stageNumber={4}
            stageLabel="(EARLY 2026)"
            title="Dedicated Support\nHours"
            subtitle="Your Account, fully set up and running in one week."
            description=""
            whatYouGetLabel="What you get:"
            bullets={[]}
            boldText={{ build: "build it", use: "use it" }}
            ctaText="JOIN THE WAITLIST"
            ctaHref="#support"
            imagePlaceholder="Yellow elephant figurines"
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
          <a href="#learn" className="eco-belief__cta">
            LEARN ALL DETAILS <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mundayn-footer mundayn-footer--ecosystem">
        <div className="mundayn-container">
          <div className="mundayn-footer__content">
            <div className="mundayn-footer__brand">
              <div className="mundayn-footer__logo">
                <div className="mundayn-footer__logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8C20 8 12 12 12 20C12 28 20 32 20 32C20 32 28 28 28 20C28 12 20 8 20 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M14 16C14 16 17 14 20 14C23 14 26 16 26 16" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
                    <circle cx="24" cy="18" r="1.5" fill="currentColor"/>
                    <path d="M20 22C20 22 18 28 20 32" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="mundayn-footer__brand-name">MUNDAYN</span>
              </div>
              <p className="mundayn-footer__tagline">You Create. We Implement. You Launch.</p>
              <p className="mundayn-footer__legal">© 2025, Mundayn - All rights reserved</p>
            </div>
            
            <div className="mundayn-footer__links-wrap">
              <div className="mundayn-footer__col">
                <Link to="/">Find YOUR Package</Link>
                <Link to="/ecosystem">Ecosystem</Link>
                <Link to="/done-for-you">Done For You</Link>
              </div>
              <div className="mundayn-footer__col">
                <span className="mundayn-footer__col-label">Contact Us:</span>
                <a href="mailto:care@mundayn.com">care@mundayn.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ecosystem;
