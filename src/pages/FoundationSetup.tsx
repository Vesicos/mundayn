import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import logoNav from '@/assets/logonav.svg';
import Footer from '../components/Footer';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Icon components for feature grid
const CalendarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PaymentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ContactIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DomainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const BrandingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const IntegrationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FaqItem = ({ question }: { question: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="fs-faq__item">
      <button 
        className="fs-faq__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`fs-faq__icon ${isOpen ? 'fs-faq__icon--open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
    </div>
  );
};

const FoundationSetup = () => {
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
      <header className="fs-hero">
        <div className="fs-hero__content">
          <h1 className="fs-hero__title">
            We're Here to<br />
            <span className="fs-hero__title-italic">Help You Launch</span>
          </h1>
          <p className="fs-hero__subtitle">
            Getting stuck on technical setup? Let us handle it for you.
          </p>
          <a href="#setup" className="fs-hero__cta">
            SET UP MY ACCOUNT FOR ME <ArrowIcon />
          </a>
        </div>
        <div className="fs-hero__image">
          <div className="mundayn-placeholder mundayn-placeholder--elephant fs-hero__placeholder">
            <span>Elephant with headset</span>
          </div>
        </div>
      </header>

      {/* Video Message Section */}
      <section className="fs-video">
        <h2 className="fs-video__title">
          A message about the fastest way to get<br />
          your Mundayn account fully operational.
        </h2>
        <div className="fs-video__player">
          <div className="fs-video__placeholder">
            <div className="fs-video__play-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* We Know How This Goes Section */}
      <section className="fs-know">
        <div className="mundayn-container">
          <h2 className="fs-know__title">We Know How This Goes</h2>
          
          <div className="fs-know__content">
            <div className="fs-know__text">
              <p>You signed up for Mundayn excited to streamline your business.</p>
              <p>Maybe you logged in, looked around, started exploring the features.</p>
              <p>Then reality hit: There's a lot to configure.</p>
              <p>Calendar connections. Payment gateways. Email automations. Contact imports. Domain setup. Branding across every touchpoint.</p>
              <p>It's not that it's complicated—it's just time-consuming.</p>
              <p>And if you're like most business owners, you don't have 30-40 hours to spend figuring out software.</p>
              <p><strong>You have clients to serve. Programs to create.<br />A business to run.</strong></p>
              <p className="fs-know__highlight">That's exactly why Foundation Setup exists.</p>
            </div>
            
            <div className="fs-know__grid">
              <div className="fs-know__grid-item">
                <CalendarIcon />
                <span>Calendar Setup</span>
              </div>
              <div className="fs-know__grid-item">
                <PaymentIcon />
                <span>Payment Gateway</span>
              </div>
              <div className="fs-know__grid-item">
                <EmailIcon />
                <span>Email Automation</span>
              </div>
              <div className="fs-know__grid-item">
                <ContactIcon />
                <span>Contact Import</span>
              </div>
              <div className="fs-know__grid-item">
                <DomainIcon />
                <span>Domain Connection</span>
              </div>
              <div className="fs-know__grid-item">
                <BrandingIcon />
                <span>Branding</span>
              </div>
              <div className="fs-know__grid-item">
                <DashboardIcon />
                <span>Dashboard</span>
              </div>
              <div className="fs-know__grid-item">
                <IntegrationsIcon />
                <span>Integrations</span>
              </div>
            </div>
          </div>
          
          <div className="fs-know__cta-wrap">
            <a href="#setup" className="fs-know__cta">
              SET UP MY ACCOUNT FOR ME <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Here's What We Do Section */}
      <section className="fs-whatwedo">
        <div className="mundayn-container">
          <h2 className="fs-whatwedo__title">Here's What We Do</h2>
          
          <div className="fs-whatwedo__card">
            <div className="fs-whatwedo__image">
              <div className="mundayn-placeholder mundayn-placeholder--elephant fs-whatwedo__placeholder">
                <span>Elephant with boxes</span>
              </div>
            </div>
            <div className="fs-whatwedo__content">
              <p>Foundation Setup means you stop configuring and start operating.</p>
              <p>Instead of spending weeks learning how to build your system, we build it for you in one week.</p>
              
              <p className="fs-whatwedo__label">One week from now:</p>
              <p>You log in to a Mundayn account that works. Everything configured. Your branding implemented everywhere. Automations tested and running. Payments processing. Calendar synced. Email sequences sending.</p>
              
              <p className="fs-whatwedo__bold">You don't learn how to build it. You learn how to use it.</p>
              <p>That's how our most successful members launch.</p>
            </div>
          </div>
          
          {/* Comparison Cards */}
          <div className="fs-comparison">
            <div className="fs-comparison__card fs-comparison__card--diy">
              <h3 className="fs-comparison__title">DIY Confusion</h3>
              <ul className="fs-comparison__list">
                <li><XIcon /> Weeks of configuration</li>
                <li><XIcon /> Trial and error</li>
                <li><XIcon /> Learning curve</li>
                <li><XIcon /> Potential mistakes</li>
              </ul>
            </div>
            <div className="fs-comparison__card fs-comparison__card--setup">
              <h3 className="fs-comparison__title">Foundation Setup</h3>
              <ul className="fs-comparison__list">
                <li><CheckIcon /> One week to launch</li>
                <li><CheckIcon /> Built right the first time</li>
                <li><CheckIcon /> Zero mistakes</li>
                <li><CheckIcon /> Start operating immediately</li>
              </ul>
              <a href="#setup" className="fs-comparison__cta">
                YES, I WANT FOUNDATION SETUP <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Implement Section */}
      <section className="fs-implement">
        <div className="mundayn-container">
          <h2 className="fs-implement__title">What We Implement</h2>
          <p className="fs-implement__subtitle">When you choose Foundation Setup, here's what our team handles:</p>
          
          <h3 className="fs-implement__section-title">Your Complete System Configuration:</h3>
          
          <div className="fs-implement__grid">
            <div className="fs-implement__card">
              <CheckmarkIcon />
              <p>Everything your package includes—fully configured and tested</p>
            </div>
            <div className="fs-implement__card">
              <BrandingIcon />
              <p>Complete technical setup with your branding (colors, fonts, styling)</p>
            </div>
            <div className="fs-implement__card">
              <CalendarIcon />
              <p>Calendar and booking system, fully automated</p>
            </div>
            <div className="fs-implement__card">
              <PaymentIcon />
              <p>Payment gateway and invoicing, ready to process</p>
            </div>
            <div className="fs-implement__card">
              <ContactIcon />
              <p>Contact import with intelligent tagging system</p>
            </div>
            <div className="fs-implement__card">
              <EmailIcon />
              <p>3-piece opt-in automation (lead magnet → welcome → nurture)</p>
            </div>
            <div className="fs-implement__card">
              <DomainIcon />
              <p>Domain connection and all integrations</p>
            </div>
            <div className="fs-implement__card">
              <DashboardIcon />
              <p>Dashboard customized for your specific business</p>
            </div>
          </div>
          
          {/* Personal Onboarding */}
          <div className="fs-onboarding">
            <h3 className="fs-onboarding__title">Plus Your Personal Onboarding:</h3>
            <ul className="fs-onboarding__list">
              <li><CheckIcon /> 30-minute personalized video walkthrough of YOUR system</li>
              <li><CheckIcon /> Custom tutorial library with recordings for your specific setup</li>
              <li><CheckIcon /> Direct access to tutorials on every feature you'll actually use</li>
              <li><CheckIcon /> Everything recorded so you can reference it anytime</li>
            </ul>
          </div>
          
          {/* What You Provide / Timeline */}
          <div className="fs-provide">
            <div className="fs-provide__card">
              <h4 className="fs-provide__title">What you provide:</h4>
              <ul className="fs-provide__list">
                <li>Business information (15-minute form)</li>
                <li>Branding assets (logo, colors—or we guide you if needed)</li>
                <li>Domain access (we help if you need it)</li>
                <li>One 30-minute onboarding call</li>
              </ul>
            </div>
            <div className="fs-provide__card fs-provide__card--timeline">
              <h4 className="fs-provide__title">Timeline:</h4>
              <p className="fs-provide__highlight">One week</p>
              <p>from form submission to fully operating system</p>
              <a href="#setup" className="fs-provide__cta">
                YES, I WANT FOUNDATION SETUP <ArrowIcon />
              </a>
            </div>
          </div>
          
          <p className="fs-implement__price">
            Everything listed above + 45 days free support. <strong>$599 one-time.</strong>
          </p>
        </div>
      </section>

      {/* The Time Investment Section */}
      <section className="fs-time">
        <div className="mundayn-container">
          <div className="fs-time__card">
            <h2 className="fs-time__title">The Time Investment</h2>
            <p className="fs-time__subtitle">Let's be honest about what DIY setup actually costs:</p>
            <p className="fs-time__text">Your time is valuable. Every hour you spend configuring software is an hour you're not spending on revenue-generating activities.</p>
            
            <div className="fs-time__images">
              <div className="mundayn-placeholder mundayn-placeholder--elephant fs-time__placeholder">
                <span>Sad elephant</span>
              </div>
              <div className="mundayn-placeholder mundayn-placeholder--elephant fs-time__placeholder">
                <span>Happy elephant</span>
              </div>
            </div>
            
            <div className="fs-time__comparison">
              <div className="fs-time__path">
                <h4>DIY Setup Path:</h4>
                <ul>
                  <li><XIcon /> 30-40 hours of configuration, testing, and troubleshooting</li>
                  <li><XIcon /> 2-3 months before everything works the way you need it to</li>
                  <li><XIcon /> Learning curve with mistakes you'll need to fix later</li>
                  <li><XIcon /> Your business waits while you figure out technical details</li>
                </ul>
              </div>
              <div className="fs-time__path fs-time__path--setup">
                <h4>Foundation Setup Path:</h4>
                <ul>
                  <li><CheckIcon /> $599 one-time investment</li>
                  <li><CheckIcon /> One week to working system</li>
                  <li><CheckIcon /> Zero mistakes because we build it right the first time</li>
                  <li><CheckIcon /> You focus on business activities while we handle technical implementation</li>
                </ul>
              </div>
            </div>
            
            <div className="fs-time__value">
              <div className="fs-time__value-card">
                <p>At $100/hour (conservative estimate):</p>
                <p className="fs-time__value-calc">30 hours × $100 = $3,000</p>
                <p>in time value</p>
              </div>
              <div className="fs-time__value-card fs-time__value-card--highlight">
                <p className="fs-time__value-reclaim">You reclaim 30+ hours</p>
                <p>to spend on what actually grows your business.</p>
              </div>
            </div>
            
            <a href="#setup" className="fs-time__cta">
              RECLAIM MY TIME - SET UP MY ACCOUNT <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* The Guarantee Section */}
      <section className="fs-guarantee">
        <div className="mundayn-container">
          <h2 className="fs-guarantee__title">The Guarantee</h2>
          <p className="fs-guarantee__subtitle">We stand behind our work completely.</p>
          
          <div className="fs-guarantee__grid">
            <div className="fs-guarantee__card">
              <p>Your system works perfectly from day one, or we keep fixing it until it does. Free. No time limit.</p>
              <div className="fs-guarantee__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="M13 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="fs-guarantee__card">
              <p>If we don't deliver what we promised, 100% money back. No questions asked.</p>
              <div className="fs-guarantee__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div className="fs-guarantee__card">
              <p>Why we can promise this:</p>
              <p>We're Mundayn experts. We've built this hundreds of times. We know exactly how to make it work for your specific business needs.</p>
              <div className="fs-guarantee__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
            </div>
            <div className="fs-guarantee__card">
              <p><strong>Plus: 45 days of free adjustments.</strong> If something needs tweaking in your first 45 days, we handle it. No charge.</p>
              <div className="fs-guarantee__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
            </div>
          </div>
          
          <p className="fs-guarantee__note">You have zero risk. We have complete confidence in our ability to deliver.</p>
          
          <a href="#setup" className="fs-guarantee__cta">
            Get Foundation Setup - Zero Risk <ArrowIcon />
          </a>
          <p className="fs-guarantee__small">100% money-back guarantee. 45 days free support included.</p>
        </div>
      </section>

      {/* Why We're Reaching Out Section */}
      <section className="fs-reaching">
        <div className="mundayn-container">
          <h2 className="fs-reaching__title">Why We're Reaching Out</h2>
          
          <p className="fs-reaching__label">Here's the truth:</p>
          <p className="fs-reaching__text">Most people who sign up for platforms like Mundayn get excited about the possibilities—then get stuck in the technical setup phase.</p>
          <p className="fs-reaching__text">It's not your fault. Software companies hand you the tools and wish you luck. That's just how the industry works.</p>
          
          <p className="fs-reaching__bold">But we built Mundayn differently.</p>
          <p className="fs-reaching__text">We don't just give you software. We give you the option to have it implemented properly from the start.</p>
          <p className="fs-reaching__text">That's why we're reaching out.</p>
          <p className="fs-reaching__text">You invested in Mundayn because you wanted to systematize your business. We want to make sure you actually get there—not get stuck in configuration purgatory.</p>
          
          <p className="fs-reaching__highlight">Foundation Setup is how we help you launch successfully instead of struggling alone.</p>
          
          <a href="#setup" className="fs-reaching__cta">
            I'M READY TO LAUNCH PROPERLY <ArrowIcon />
          </a>
          <p className="fs-reaching__price">Foundation Setup: $599 one-time. Working system in one week.</p>
        </div>
      </section>

      {/* Your Two Options Section */}
      <section className="fs-options">
        <div className="mundayn-container">
          <h2 className="fs-options__title">Your Two Options</h2>
          <p className="fs-options__subtitle">You're at a decision point:</p>
          
          <div className="fs-options__grid">
            <div className="fs-options__card fs-options__card--diy">
              <h3>Option 1:<br />Keep Trying DIY</h3>
              <ul>
                <li>Continue spending hours configuring and testing</li>
                <li>Figure out automations through trial and error</li>
                <li>Hope you're not missing something critical</li>
                <li>Maybe have it working in 2-3 months</li>
                <li>Your business growth waits</li>
              </ul>
            </div>
            <div className="fs-options__card fs-options__card--setup">
              <h3 className="fs-options__gold">Option 2:<br />Foundation Setup</h3>
              <ul>
                <li><CheckIcon /> One week to fully working system</li>
                <li><CheckIcon /> We handle all technical implementation</li>
                <li><CheckIcon /> You focus on your business, not software</li>
                <li><CheckIcon /> Start earning revenue immediately</li>
                <li><CheckIcon /> Launch with confidence</li>
              </ul>
              <a href="#setup" className="fs-options__cta">
                CHOOSE FOUNDATION SETUP <ArrowIcon />
              </a>
              <p className="fs-options__note">Stop configuring. Start operating.</p>
            </div>
          </div>
          
          <p className="fs-options__text">Most of our successful members chose Option 2. Not because they couldn't do it themselves—but because their time is worth more than the technical work.</p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="fs-next">
        <div className="mundayn-container">
          <h2 className="fs-next__title">What Happens Next</h2>
          <p className="fs-next__subtitle">When you choose Foundation Setup, here's the process:</p>
          
          <div className="fs-next__step">
            <span className="fs-next__number">1</span>
            <div className="fs-next__content">
              <h4 className="fs-next__label">Form Submission</h4>
              <p>Complete a onboarding form</p>
              <p>We schedule your 30-minute onboarding call</p>
            </div>
          </div>
          
          <p className="fs-next__message">No technical headaches. No configuration confusion.</p>
          <p className="fs-next__message-bold">Just a working system.</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="fs-final">
        <div className="fs-final__bg">
          <div className="mundayn-placeholder mundayn-placeholder--elephant fs-final__placeholder">
            <span>Pink elephant</span>
          </div>
        </div>
        <div className="mundayn-container">
          <h2 className="fs-final__title">Get Foundation Setup Now</h2>
          <p className="fs-final__text">$599 one-time investment. Setup starts immediately. Working system in one week.</p>
          <a href="#setup" className="fs-final__cta">
            GET FOUNDATION SETUP NOW <ArrowIcon />
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="fs-faq">
        <div className="mundayn-container">
          <h2 className="fs-faq__title">Questions? Answered.</h2>
          
          <div className="fs-faq__list">
            <FaqItem question="How is this different from Kajabi, ClickFunnels, or other platforms?" />
            <FaqItem question="What if I outgrow my package?" />
            <FaqItem question="What if I'm not tech-savvy?" />
            <FaqItem question="Do I need DFY setup or can I do it myself?" />
            <FaqItem question="Can I migrate my existing content and contacts?" />
            <FaqItem question="What's included in 'setup'?" />
            <FaqItem question="Is there a model for advanced entrepreneurs?" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FoundationSetup;
