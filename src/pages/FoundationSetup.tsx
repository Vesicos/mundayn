import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import fsHeroBg from '@/assets/fs-hero-bg.png';
import fsWhatWeDoElephant from '@/assets/fs-whatwedo-elephant.png';
import fsDiyPillow from '@/assets/fs-diy-pillow.png';
import fsSetupElephant from '@/assets/fs-setup-elephant.png';
import fsHorizontalBg from '@/assets/fs-horizontal-bg.png';
import iconCalendar from '@/assets/icons/fs-calendar.png';
import iconPayment from '@/assets/icons/fs-payment.png';
import iconContacts from '@/assets/icons/fs-contacts.png';
import iconEmail from '@/assets/icons/fs-email.png';
import iconBranding from '@/assets/icons/fs-branding.png';
import iconDomain from '@/assets/icons/fs-domain.png';
import iconIntegrations from '@/assets/icons/fs-integrations.png';
import iconDashboard from '@/assets/icons/fs-dashboard.png';
import implCheck from '@/assets/icons/fs-impl-check.png';
import implBranding from '@/assets/icons/fs-impl-branding.png';
import implCalendar from '@/assets/icons/fs-impl-calendar.png';
import implPayment from '@/assets/icons/fs-impl-payment.png';
import implContacts from '@/assets/icons/fs-impl-contacts.png';
import implEmail from '@/assets/icons/fs-impl-email.png';
import implDomain from '@/assets/icons/fs-impl-domain.png';
import implDashboard from '@/assets/icons/fs-impl-dashboard.png';
import guaranteeArrow from '@/assets/icons/fs-guarantee-arrow.png';
import guaranteeSquiggle from '@/assets/icons/fs-guarantee-squiggle.png';
import guaranteeSmiley from '@/assets/icons/fs-guarantee-smiley.png';
import guaranteeEye from '@/assets/icons/fs-guarantee-eye.png';
import checkYellow from '@/assets/icons/fs-check-yellow.png';
import xRed from '@/assets/icons/fs-x-red.png';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIconImg = () => (
  <img src={checkYellow} alt="" className="fs-list-icon" />
);

const XIconImg = () => (
  <img src={xRed} alt="" className="fs-list-icon" />
);

const PlayIcon = () => (
  <svg width="44" height="43" viewBox="0 0 44 43" fill="currentColor">
    <polygon points="10 5 38 21.5 10 38 10 5" />
  </svg>
);

const FaqItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
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
      {isOpen && (
        <div className="fs-faq__answer">
          {answer}
        </div>
      )}
    </div>
  );
};

const FoundationSetup = () => {
  return (
    <div className="mundayn-page fs-page">
      {/* Navigation */}
      <MobileNav />

      {/* Hero Section */}
      <header className="fs-hero">
        <div className="fs-hero__bg">
          <img src={fsHeroBg} alt="Foundation Setup" className="fs-hero__bg-img" />
        </div>
        <div className="fs-hero__content">
          <h1 className="fs-hero__title">We're Here to Help You Launch</h1>
          <p className="fs-hero__subtitle">
            Getting stuck on technical setup? Let us handle it for you.
          </p>
          <a href="#setup" className="fs-hero__cta">
            SET UP MY ACCOUNT FOR ME <ArrowIcon />
          </a>
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
            {/* Video/Elephant image placeholder */}
            <div className="fs-video__elephant-placeholder"></div>
            <div className="fs-video__play-btn">
              <PlayIcon />
            </div>
            <div className="fs-video__play-ring"></div>
          </div>
        </div>
      </section>

      {/* We Know How This Goes Section */}
      <section className="fs-know">
        <div className="mundayn-container">
          <h2 className="fs-know__title">We Know How This Goes</h2>
          
          <div className="fs-know__layout">
            <div className="fs-know__text">
              <p>You signed up for Mundayn excited to streamline your business.</p>
              <p>Maybe you logged in, looked around, started exploring the features.</p>
              <p>Then reality hit: There's a lot to configure.</p>
              <p>Calendar connections. Payment gateways. Email automations. Contact imports. Domain setup. Branding across every touchpoint.</p>
              <p>It's not that it's complicated—it's just time-consuming.</p>
              <p>And if you're like most business owners, you don't have 30-40 hours to spend figuring out software.</p>
              <p className="fs-know__text-bold">You have clients to serve. Programs to create.<br />A business to run.</p>
              <p className="fs-know__highlight">That's exactly why Foundation Setup exists.</p>
            </div>
            
            <div className="fs-know__grid">
              <div className="fs-know__grid-item">
                <img src={iconCalendar} alt="" className="fs-know__icon" />
                <span>Calendar Setup</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconPayment} alt="" className="fs-know__icon" />
                <span>Payment Gateway</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconContacts} alt="" className="fs-know__icon" />
                <span>Contact Import</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconEmail} alt="" className="fs-know__icon" />
                <span>Email Automation</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconBranding} alt="" className="fs-know__icon" />
                <span>Branding</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconDomain} alt="" className="fs-know__icon" />
                <span>Domain Connection</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconIntegrations} alt="" className="fs-know__icon" />
                <span>Integrations</span>
              </div>
              <div className="fs-know__grid-item">
                <img src={iconDashboard} alt="" className="fs-know__icon" />
                <span>Dashboard</span>
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
              <img src={fsWhatWeDoElephant} alt="What we do" className="fs-whatwedo__img" />
            </div>
            <div className="fs-whatwedo__content">
              <p className="fs-whatwedo__intro">Foundation Setup means you stop configuring and start operating.</p>
              <p className="fs-whatwedo__intro">Instead of spending weeks learning how to build your system, we build it for you in one week.</p>
              
              <p className="fs-whatwedo__label">One week from now:</p>
              <p className="fs-whatwedo__text">You log in to a Mundayn account that works. Everything configured. Your branding implemented everywhere. Automations tested and running. Payments processing. Calendar synced. Email sequences sending.</p>
              
              <p className="fs-whatwedo__bold">You don't learn how to build it. You learn how to use it.</p>
              <p className="fs-whatwedo__small">That's how our most successful members launch.</p>
            </div>
          </div>
          
          {/* DIY vs Foundation Setup Comparison */}
          <div className="fs-comparison">
            <div className="fs-comparison__card fs-comparison__card--diy">
              <h3 className="fs-comparison__title">DIY Confusion</h3>
              <ul className="fs-comparison__list">
                <li>Weeks of configuration</li>
                <li>Trial and error</li>
                <li>Learning curve</li>
                <li>Potential mistakes</li>
              </ul>
            </div>
            <div className="fs-comparison__card fs-comparison__card--setup">
              <h3 className="fs-comparison__title">Foundation Setup</h3>
              <ul className="fs-comparison__list fs-comparison__list--checks">
                <li><img src={checkYellow} alt="" className="fs-comparison__check" />One week to launch</li>
                <li><img src={checkYellow} alt="" className="fs-comparison__check" />Built right the first time</li>
                <li><img src={checkYellow} alt="" className="fs-comparison__check" />Zero mistakes</li>
                <li><img src={checkYellow} alt="" className="fs-comparison__check" />Start operating immediately</li>
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
          <p className="fs-implement__intro">When you choose Foundation Setup, here's what our team handles:</p>
          
          <h3 className="fs-implement__section-title">Your Complete System Configuration:</h3>
          
          <div className="fs-implement__grid">
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implCheck} alt="" className="fs-implement__icon" />
                <p>Everything your package includes—fully configured and tested</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implBranding} alt="" className="fs-implement__icon" />
                <p>Complete technical setup with your branding (colors, fonts, styling)</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implCalendar} alt="" className="fs-implement__icon" />
                <p>Calendar and booking system, fully automated</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implPayment} alt="" className="fs-implement__icon" />
                <p>Payment gateway and invoicing, ready to process</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implContacts} alt="" className="fs-implement__icon" />
                <p>Contact import with intelligent tagging system</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implEmail} alt="" className="fs-implement__icon" />
                <p>3-piece opt-in automation (lead magnet → welcome → nurture)</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implDomain} alt="" className="fs-implement__icon" />
                <p>Domain connection and all integrations</p>
              </div>
            </div>
            <div className="fs-implement__card">
              <div className="fs-implement__card-img"></div>
              <div className="fs-implement__card-overlay"></div>
              <div className="fs-implement__card-content">
                <img src={implDashboard} alt="" className="fs-implement__icon" />
                <p>Dashboard customized for your specific business</p>
              </div>
            </div>
          </div>
          
          {/* Personal Onboarding */}
          <div className="fs-onboarding">
            <h3 className="fs-onboarding__title">Plus Your Personal Onboarding:</h3>
            <ul className="fs-onboarding__list">
              <li>
                <img src={checkYellow} alt="" className="fs-onboarding__check" />
                <span>30-minute personalized video walkthrough of YOUR system</span>
              </li>
              <li>
                <img src={checkYellow} alt="" className="fs-onboarding__check" />
                <span>Custom tutorial library with recordings for your specific setup</span>
              </li>
              <li>
                <img src={checkYellow} alt="" className="fs-onboarding__check" />
                <span>Direct access to tutorials on every feature you'll actually use</span>
              </li>
              <li>
                <img src={checkYellow} alt="" className="fs-onboarding__check" />
                <span>Everything recorded so you can reference it anytime</span>
              </li>
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
              <p className="fs-provide__text">from form submission to fully operating system</p>
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
              <div className="fs-time__img-wrap">
                <img src={fsDiyPillow} alt="DIY Setup" className="fs-time__img" />
              </div>
              <div className="fs-time__img-wrap">
                <img src={fsSetupElephant} alt="Foundation Setup" className="fs-time__img" />
              </div>
            </div>
            
            <div className="fs-time__comparison">
              <div className="fs-time__path">
                <h4>DIY Setup Path:</h4>
                <ul>
                  <li><XIconImg /> <span>30-40 hours of configuration, testing, and troubleshooting</span></li>
                  <li><XIconImg /> <span>2-3 months before everything works the way you need it to</span></li>
                  <li><XIconImg /> <span>Learning curve with mistakes you'll need to fix later</span></li>
                  <li><XIconImg /> <span>Your business waits while you figure out technical details</span></li>
                </ul>
              </div>
              <div className="fs-time__path fs-time__path--setup">
                <h4>Foundation Setup Path:</h4>
                <ul>
                  <li><CheckIconImg /> <span>$599 one-time investment</span></li>
                  <li><CheckIconImg /> <span>One week to working system</span></li>
                  <li><CheckIconImg /> <span>Zero mistakes because we build it right the first time</span></li>
                  <li><CheckIconImg /> <span>You focus on business activities while we handle technical implementation</span></li>
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
              <p className="fs-guarantee__card-title">Your system works<br />perfectly from day one,<br />or we keep fixing it until it<br />does. Free. No time limit.</p>
              <img src={guaranteeSquiggle} alt="" className="fs-guarantee__icon" />
            </div>
            <div className="fs-guarantee__card">
              <p className="fs-guarantee__card-title">If we don't deliver what<br />we promised, 100%<br />money back. No<br />questions asked.</p>
              <img src={guaranteeArrow} alt="" className="fs-guarantee__icon" />
            </div>
            <div className="fs-guarantee__card">
              <p className="fs-guarantee__card-label">Why we can promise this:</p>
              <p className="fs-guarantee__card-text">We're Mundayn experts. We've built<br />this hundreds of times. We know<br />exactly how to make it work for your<br />specific business needs.</p>
              <img src={guaranteeEye} alt="" className="fs-guarantee__icon" />
            </div>
            <div className="fs-guarantee__card fs-guarantee__card--highlight">
              <p className="fs-guarantee__card-title"><strong>Plus: 45 days of free<br />adjustments.</strong> If something<br />needs tweaking in your first 45<br />days, we handle it. No charge.</p>
              <img src={guaranteeSmiley} alt="" className="fs-guarantee__icon" />
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
          
          <p className="fs-reaching__highlight"><strong>Foundation Setup</strong> is how we help you launch<br />successfully instead of struggling alone.</p>
          
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
                <li><CheckIconImg /> <span>One week to fully working system</span></li>
                <li><CheckIconImg /> <span>We handle all technical implementation</span></li>
                <li><CheckIconImg /> <span>You focus on your business, not software</span></li>
                <li><CheckIconImg /> <span>Start earning revenue immediately</span></li>
                <li><CheckIconImg /> <span>Launch with confidence</span></li>
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
          
          <div className="fs-next__grid">
            <div className="fs-next__step">
              <div className="fs-next__divider"></div>
              <div className="fs-next__content">
                <div className="fs-next__number">1</div>
                <h4 className="fs-next__heading">Form Submission</h4>
                <p className="fs-next__text">Complete a<br />simple 15-minute<br />onboarding form</p>
              </div>
            </div>
            <div className="fs-next__step">
              <div className="fs-next__divider"></div>
              <div className="fs-next__content">
                <div className="fs-next__number">2</div>
                <h4 className="fs-next__heading">Onboarding Call</h4>
                <p className="fs-next__text">We schedule your<br />30-minute<br />onboarding call</p>
              </div>
            </div>
            <div className="fs-next__step">
              <div className="fs-next__divider"></div>
              <div className="fs-next__content">
                <div className="fs-next__number">3</div>
                <h4 className="fs-next__heading">Implementation</h4>
                <p className="fs-next__text">Our team<br />implements<br />everything while<br />you focus on your<br />business</p>
              </div>
            </div>
            <div className="fs-next__step">
              <div className="fs-next__divider"></div>
              <div className="fs-next__content">
                <div className="fs-next__number">4</div>
                <h4 className="fs-next__heading">Walkthrough</h4>
                <p className="fs-next__text">One week later,<br />you receive your<br />personalized<br />walkthrough<br />video</p>
              </div>
            </div>
            <div className="fs-next__step">
              <div className="fs-next__divider"></div>
              <div className="fs-next__content">
                <div className="fs-next__number">5</div>
                <h4 className="fs-next__heading">Go Live</h4>
                <p className="fs-next__text">You log in to a<br />system that<br />works—and start<br />operating<br />immediately</p>
              </div>
            </div>
          </div>
          
          <p className="fs-next__message">No technical headaches. No configuration confusion.</p>
          <p className="fs-next__message-bold">Just a working system.</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="fs-final" id="setup">
        <div className="fs-final__bg">
          <img src={fsHorizontalBg} alt="Get Foundation Setup" className="fs-final__bg-img" />
        </div>
        <div className="fs-final__content">
          <h2 className="fs-final__title">Get Foundation Setup Now</h2>
          <p className="fs-final__text">$599 one-time investment. Setup starts immediately. Working system in one week.</p>
          <a href="#" className="fs-final__cta">
            GET FOUNDATION SETUP NOW <ArrowIcon />
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="fs-faq">
        <div className="mundayn-container">
          <h2 className="fs-faq__title">Questions? Answered.</h2>
          
          <div className="fs-faq__list">
            <FaqItem 
              question="How is this different from Kajabi, ClickFunnels, or other platforms?" 
              answer={<>
                <p>Three ways:</p>
                <ol>
                  <li>True all-in-one: They specialize (Kajabi for courses, ClickFunnels for funnels). Mundayn does everything.</li>
                  <li>Setup included: They hand you software. We implement it for your specific business.</li>
                  <li>Ongoing partnership: They're software vendors. We're operational partners who grow with you.</li>
                </ol>
              </>} 
            />
            <FaqItem 
              question="What if I outgrow my package?" 
              answer="Upgrade anytime. Your data stays. Your systems stay. You just unlock new features. Most people start with Entrepreneur or Creator and scale up as they grow. That's the design." 
            />
            <FaqItem 
              question="What if I'm not tech-savvy?" 
              answer="That's exactly why DFY setup exists. You don't need to be technical. We build it, you use it. Plus, our training focuses on USING the system (clicking buttons, sending emails), not building it from scratch." 
            />
            <FaqItem 
              question="Do I need DFY setup or can I do it myself?" 
              answer={<>
                <p>Both paths work:</p>
                <p>DIY: Free with trial. Takes 2-3 months. Best if you have time and enjoy technical setup.</p>
                <p>DFY: $599-$1,999. Takes max. 2-3 weeks. Best if you're hitting energy ceiling or want expert setup guaranteed to work.</p>
                <p>Most Impact Entrepreneurs choose DFY because time saved {'>'}{'>'}  money invested.</p>
              </>} 
            />
            <FaqItem 
              question="Can I migrate my existing content and contacts?" 
              answer="Yes. We have migration tools for most platforms. If you choose DFY setup, we handle the entire migration—contacts, courses, automations, everything. Clean transition, zero data loss." 
            />
            <FaqItem 
              question="What's included in 'setup'?" 
              answer={<>
                <p>Complete technical implementation:</p>
                <ul>
                  <li>System configuration and branding</li>
                  <li>All automations and workflows</li>
                  <li>Payment and invoicing setup</li>
                  <li>Calendar and scheduling</li>
                  <li>Client journey mapping with tagging</li>
                  <li>Email sequences and funnels (if your package includes them)</li>
                  <li>Testing and training</li>
                  <li>90-day support guarantee</li>
                </ul>
                <p>We build it. You use it. That's the partnership.</p>
              </>} 
            />
            <FaqItem 
              question="Is there a model for advanced entrepreneurs?" 
              answer="Yes. If you're Visionary Entrepreneur with 100K+ audience, ready for COO partnership, we offer a partnership model that includes full operational buildout of Mundayn including management." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FoundationSetup;
