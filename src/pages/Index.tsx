import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import StageCard from '../components/StageCard';
import PackageCarousel from '../components/PackageCarousel';
import AnimatedStats from '../components/AnimatedStats';
import QuizModal from '../components/quiz/QuizModal';

// Hand-drawn icon imports
import sunIcon from '@/assets/icons/sun.png';
import playIcon from '@/assets/icons/play.png';
import envelopeIcon from '@/assets/icons/envelope.png';
import gridIcon from '@/assets/icons/grid.png';
import starIcon from '@/assets/icons/star.png';
import heartIcon from '@/assets/icons/heart.png';

// Mundane section icons
import squiggleIcon from '@/assets/icons/squiggle.png';
import curvedArrowIcon from '@/assets/icons/curved-arrow.png';
import eyeIcon from '@/assets/icons/eye.png';
import smileyIcon from '@/assets/icons/smiley.png';

// Right for you section icons
import checkmarkIcon from '@/assets/icons/checkmark.png';
import checkmarkGoldIcon from '@/assets/icons/checkmark-gold.png';
import xMarkIcon from '@/assets/icons/x-mark.png';

// Video import
import animationVideo from '@/assets/animation_v1.mp4';

// Logo
import logoNav from '@/assets/logonav.svg';

// Hero image
import heroElephant from '@/assets/hero-elephant.png';

// Stage card elephant images
import elephantBuilder from '@/assets/elephant-builder.png';
import elephantCreator from '@/assets/elephant-creator.png';
import elephantArchitect from '@/assets/elephant-architect.png';

// Choose section elephant image
import elephantFiling from '@/assets/elephant-filing.png';

// Stats data for animated section
const statsData = [{
  endValue: 15,
  suffix: '+',
  value: '15+',
  label: 'Hours Saved Every Week',
  description: "That's 60+ hours monthly. 720+ hours yearly.\n\nOne full month of your life, every single year, returned to you."
}, {
  endValue: 20,
  suffix: '+',
  value: '20+',
  label: 'Tools Replaced',
  description: 'Calendar. Email marketing. CRM. Payments. Forms. Scheduling. Landing pages. Course hosting. Community.\n\nAll in one. One login. One system.'
}, {
  endValue: 300,
  suffix: '+',
  value: '300+',
  label: 'Dollars Saved Monthly',
  description: "When you add up subscriptions for separate tools (Calendly $15, MailChimp $30, Kajabi $149, Skool $99, website hosting $20, etc.), Mundayn costs less than the scattered stack you're replacing."
}, {
  endValue: 3,
  suffix: '+',
  value: '3+',
  label: 'Hours Returned Daily',
  description: 'The time you spend manually managing what should run automatically.\n\nThree hours you could spend creating. Teaching. Resting. Living.'
}];
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>;
const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>;
const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <div className="mundayn-faq__item">
      <button className="mundayn-faq__question" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className={`mundayn-faq__icon ${isOpen ? 'mundayn-faq__icon--open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`mundayn-faq__answer ${isOpen ? 'mundayn-faq__answer--open' : ''}`}>
        {answer}
      </div>
    </div>;
};
const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  
  // Handle scroll to packages section when navigating from other pages
  React.useEffect(() => {
    if (window.location.hash === '#packages') {
      setTimeout(() => {
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
          packagesSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);
  return <div className="mundayn-page">
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
      <header className="mundayn-hero">
        <div className="mundayn-hero__bg">
          <img src={heroElephant} alt="Elephant carrying boxes" className="mundayn-hero__bg-img" />
        </div>
        <div className="mundayn-hero__content">
          <div className="mundayn-hero__text-wrapper">
            <h1 className="mundayn-hero__title">
              Your Business, Running <span className="mundayn-hero__title-italic">Itself</span>
            </h1>
            <p className="mundayn-hero__subtitle">
              The only platform that delivers true all-in-one: the systems AND the setup.
              We handle the mundane so you can focus on the meaningful.
            </p>
          </div>
        </div>
      </header>

      {/* Three Stages Section */}
      <section className="mundayn-section mundayn-stages">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            <span className="mundayn-section__title-italic">Three</span> Different Stages
            <br />
            <span className="mundayn-section__title-italic">One</span> System That Grows With You
          </h2>
          <p className="mundayn-section__subtitle">Where Are You On Your Business Journey?</p>
          
          <div className="mundayn-stages__grid">
            <StageCard title="The Foundation" titleItalic="Builder" description="You're building from the ground up. Ready to install professional infrastructure before chaos catches up." bgColor="#58233f" image={elephantBuilder} />
            
            <StageCard title="The Impact" titleItalic="Creator" description="You're creating proven impact. Running everything from your phone. Ready to systematize and delegate." bgColor="#58233f" image={elephantCreator} />
            
            <StageCard title="The Flow" titleItalic="Architect" description="You've built courses, audience, offers. Now you're ready to connect them into predictable revenue flow." bgColor="#58233f" image={elephantArchitect} />
          </div>
        </div>
      </section>

      {/* Choose For You Section */}
      <section className="mundayn-section mundayn-choose">
        <div className="mundayn-container">
          <h2 className="mundayn-choose__header">
            Here's the thing: You don't need everything <span className="mundayn-choose__header-italic">Now</span>. 
            – You just need what's right for you <span className="mundayn-choose__header-italic">Today</span>.
          </h2>
          
          <div className="mundayn-choose__content">
            <div className="mundayn-choose__image">
              <img src={elephantFiling} alt="Elephant organizing files" />
            </div>
            <div className="mundayn-choose__info">
              <h3 className="mundayn-choose__title">
                Skip The 30-Minute Feature Hunt. <span className="mundayn-section__title-italic">We Choose</span> For You.
              </h3>
              <p className="mundayn-choose__desc">
                Most platforms make you dig through feature lists trying to figure out what you need.
                We ask 4 simple questions. You get your perfect package recommendation.
              </p>
              
              <p className="mundayn-choose__list-title">In 30 seconds you get:</p>
              <ul className="mundayn-choose__list">
                <li>
                  <img src={checkmarkGoldIcon} alt="" className="mundayn-choose__list-icon-img" />
                  Your perfect package match
                </li>
                <li>
                  <img src={checkmarkGoldIcon} alt="" className="mundayn-choose__list-icon-img" />
                  Clear pricing (only pay for what you need TODAY)
                </li>
                <li>
                  <img src={checkmarkGoldIcon} alt="" className="mundayn-choose__list-icon-img" />
                  Easy upgrade path as you grow
                </li>
                <li>
                  <img src={checkmarkGoldIcon} alt="" className="mundayn-choose__list-icon-img" />
                  Everything in one place
                </li>
              </ul>
              
              <p className="mundayn-choose__promise-title">Our promise:</p>
              <p className="mundayn-choose__promise-text">
                Start where you are TODAY. Upgrade only when you're ready. We're with you on the full journey—from first client to full community.
              </p>
              
              <button onClick={() => setQuizOpen(true)} className="mundayn-btn">
                SHOW ME MY PACKAGE    <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="mundayn-section mundayn-why">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            Why Mundayn is <span className="mundayn-section__title-italic">Different</span>
          </h2>
          
          <div className="mundayn-why__cards">
            {/* Left Panel */}
            <div className="mundayn-why__panel mundayn-why__panel--left">
              <div className="mundayn-why__inner">
                <div className="mundayn-why__headline">
                  <h3 className="mundayn-why__heading">
                    The<br />
                    Problem<br />
                    <span className="mundayn-section__title-italic">with All-<br />in-One</span>
                  </h3>
                </div>
                <div className="mundayn-why__copy">
                  <p>Most platforms give you software and wish you luck.</p>
                  <p>They hand you the tools—CRM, email marketing, course hosting, funnels, and say "figure it out."</p>
                  <p>You spend 30+ hours learning. Then two weeks setting up. Then months fixing what you did wrong.</p>
                  <p className="mundayn-why__bold">Here's what we learned after watching so many Impact Entrepreneurs struggle:</p>
                  <p>Software doesn't create transformation.<br />Implementation does.</p>
                  <p className="mundayn-why__bold">Features are just potential. Implementation is transformation.</p>
                </div>
              </div>
            </div>
            
            {/* Right Panel */}
            <div className="mundayn-why__panel mundayn-why__panel--right">
              <div className="mundayn-why__rightStack">
                <div className="mundayn-why__inner">
                  <div className="mundayn-why__headline">
                    <h3 className="mundayn-why__heading">
                      What<br />
                      <span className="mundayn-section__title-italic">True All-<br />in-One</span><br />
                      means
                    </h3>
                  </div>
                  <div className="mundayn-why__copy">
                    <div className="mundayn-why__block">
                      <p className="mundayn-why__label">THE TOOL</p>
                      <p className="mundayn-why__desc">One platform that replaces 15+ scattered apps you run today. Everything you need in one place. One login. Complete control.</p>
                    </div>
                    <div className="mundayn-why__block">
                      <p className="mundayn-why__label">THE SETUP<br />(Done-For-You Services)</p>
                      <p className="mundayn-why__desc">We implement it for you, built for your specific business. Your branding. Your client journey. Your workflows. Configured by us.</p>
                    </div>
                    <div className="mundayn-why__block">
                      <p className="mundayn-why__label">THE TRANSFORMATION</p>
                      <p className="mundayn-why__desc">Your business runs from day one, not "someday." Week 1, you're operating. Not learning. Operating.</p>
                    </div>
                  </div>
                </div>
                <a href="#offers" className="mundayn-why__cta-btn">
                  LEARN MORE ABOUT OUR ACTIONS <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feels Like Section */}
      <section className="mundayn-section mundayn-feels">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            This Is What It <span className="mundayn-section__title-italic">Feels</span> Like
          </h2>
          
          <div className="mundayn-feels__grid">
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={sunIcon} alt="Sun icon" /></div>
              <h3 className="mundayn-feels__card-title">Wake up to confirmation emails you never sent.</h3>
              <p className="mundayn-feels__card-text">
                Your booking system handled the mundane. Payments processed. Reminders sent. Client onboarded. You handle the meaningful: the actual session that creates transformation.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={playIcon} alt="Play icon" /></div>
              <h3 className="mundayn-feels__card-title">Your assistant manages operations while you create.</h3>
              <p className="mundayn-feels__card-text">
                Everything's documented. Workflows exist. Systems run without you explaining twice. They handle the mundane. You focus on your genius.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={envelopeIcon} alt="Envelope icon" /></div>
              <h3 className="mundayn-feels__card-title">Your Instagram followers become email subscribers.</h3>
              <p className="mundayn-feels__card-text">
                Your funnel works 24/7. Lead magnets get delivered magically. Opt-in sequences run with proper tagging. Leads get nurtured while you sleep ready to receive your gifts.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={gridIcon} alt="Grid icon" /></div>
              <h3 className="mundayn-feels__card-title">Courses sell themselves through systematic flow.</h3>
              <p className="mundayn-feels__card-text">
                Email sequence → landing page → checkout → course delivery → community access. One time setup. Infinite replay.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={starIcon} alt="Star icon" /></div>
              <h3 className="mundayn-feels__card-title">Your community thrives without you micromanaging.</h3>
              <p className="mundayn-feels__card-text">
                Members connect. Questions get answered. Value gets delivered. You show up to guide, not moderate.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><img src={heartIcon} alt="Heart icon" /></div>
              <h3 className="mundayn-feels__card-title">Evenings belong to your family again.</h3>
              <p className="mundayn-feels__card-text">
                No more client WhatsApp chat at 9pm. No more weekend admin marathons. Your business runs. You live.
              </p>
            </article>
          </div>
          
          <p className="mundayn-feels__tagline">
            This isn't about working <span className="mundayn-section__title-italic">harder</span>. It's about building <span className="mundayn-section__title-italic">smarter</span>.
          </p>
          <p className="mundayn-feels__savings">
            Save $300+ monthly by replacing 15+ tools. Reclaim 15 hours every week.
          </p>
          <div className="mundayn-feels__cta">
            <a href="#trial" className="mundayn-btn">
              Start Your Free Trial <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="mundayn-section mundayn-savings">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            $300 Saved. 15 Hours Reclaimed. <span className="mundayn-section__title-italic">Every Month.</span>
          </h2>
          
          <div className="mundayn-savings__video">
            <video autoPlay loop muted playsInline className="mundayn-savings__video-player">
              <source src={animationVideo} type="video/mp4" />
            </video>
          </div>
          
          <p className="mundayn-savings__text">
            Stop paying for tools that don't talk to each other.<br />
            One platform. One system.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="mundayn-section mundayn-packages" id="packages">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            Four Different Packages. One Complete System. We Set It Up <span className="mundayn-section__title-italic">For You</span>
          </h2>
          <p className="mundayn-section__subtitle">
            Start with what you need <span className="mundayn-section__title-italic">Today</span>. Upgrade as you grow.
          </p>
        </div>
        <PackageCarousel />
      </section>

      {/* About The Mundane Section */}
      <section className="mundayn-section mundayn-mundane">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            Let's Be <span className="mundayn-section__title-italic">Honest</span> About The Mundane
          </h2>
          
          <div className="mundayn-mundane__grid">
            <article className="mundayn-mundane__card mundayn-mundane__card--with-icon">
              <div className="mundayn-mundane__card-icon">
                <img src={squiggleIcon} alt="" />
              </div>
              <h3 className="mundayn-mundane__card-title">
                What you <span className="mundayn-mundane__card-title-italic">didn't</span> build your business to do:
              </h3>
              <ul className="mundayn-mundane__card-list">
                <li>Send booking confirmations at 11pm</li>
                <li>Update spreadsheets with client info</li>
                <li>Manually follow up on payments</li>
                <li>Answer the same questions 47 times</li>
                <li>Schedule social posts every morning</li>
                <li>Remember which client is at which stage</li>
              </ul>
              <p className="mundayn-mundane__card-highlight">These tasks are necessary. But they're mundane.</p>
            </article>
            
            <article className="mundayn-mundane__card mundayn-mundane__card--with-icon">
              <div className="mundayn-mundane__card-icon">
                <img src={curvedArrowIcon} alt="" />
              </div>
              <h3 className="mundayn-mundane__card-title">
                What the mundane <span className="mundayn-mundane__card-title-italic">steals</span> from you:
              </h3>
              <p className="mundayn-mundane__card-text"><strong>Time for the meaningful work:</strong></p>
              <ul className="mundayn-mundane__card-list">
                <li>Creating transformation for your clients</li>
                <li>Developing new programs and offers</li>
                <li>Teaching and facilitating</li>
                <li>Building real relationships</li>
                <li>Actually resting and recharging</li>
              </ul>
            </article>
            
            <article className="mundayn-mundane__card mundayn-mundane__card--with-icon">
              <div className="mundayn-mundane__card-icon">
                <img src={eyeIcon} alt="" />
              </div>
              <h3 className="mundayn-mundane__card-title">What mundane means:</h3>
              <p className="mundayn-mundane__card-text">
                We run the mundane operations so you can focus on meaningful impact.<br /><br />
                <strong>Booking?</strong> Automated.<br />
                <strong>Payments?</strong> Processed automatically.<br />
                <strong>Follow-ups?</strong> System handles it.<br />
                <strong>Client journey?</strong> Mapped and running.<br />
                <strong>Email nurture?</strong> Sending while you sleep.
              </p>
              <p className="mundayn-mundane__card-highlight">You focus on what only you can do. We handle everything else.</p>
            </article>
            
            <article className="mundayn-mundane__card mundayn-mundane__card--with-icon">
              <div className="mundayn-mundane__card-icon">
                <img src={smileyIcon} alt="" />
              </div>
              <h3 className="mundayn-mundane__card-title">The Name</h3>
              <p className="mundayn-mundane__card-text">
                That's why it's called Mundayn.<br />
                (Yes, it's a play on words. And yes, we're owning it.)<br /><br />
                We handle the mundane so you can create the meaningful.<br />
                Stop managing. Start creating.<br />
                Help others to transform.<br />
                Add value to the universe.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* The Real Numbers Section */}
      <section className="mundayn-section mundayn-numbers">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            The <span className="mundayn-section__title-italic">Real</span> Numbers
          </h2>
          
          <AnimatedStats stats={statsData} animationDuration={0.8} />
        </div>
      </section>

      {/* What Matters Section */}
      <section className="mundayn-section mundayn-matters">
        <div className="mundayn-container">
          <div className="mundayn-matters__content">
            <div>
              <h2 className="mundayn-matters__heading">
                But this isn't about <span className="mundayn-section__title-italic">software</span>
              </h2>
            </div>
            <div>
              <p className="mundayn-section__subtitle" style={{
              textAlign: 'left',
              marginBottom: '24px'
            }}>
                Here's what <span className="mundayn-section__title-italic">actually</span> matters:
              </p>
              <ul className="mundayn-matters__list">
                <li>Sundays with your family instead of catching up on client admin.</li>
                <li>Evenings that are yours instead of answering booking requests at 9 PM.</li>
                <li>Vacations without your phone because systems handle client flow.</li>
                <li>Delegation that actually works because everything's documented and accessible.</li>
                <li>Growth without burnout because your business runs while you create.</li>
              </ul>
              <div className="mundayn-matters__conclusion">
                <p>That's what systematic infrastructure creates. Not just efficiency. <strong>Freedom.</strong></p>
                <p><strong>Your business, running <span className="mundayn-section__title-italic">itself</span>.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Choice Section */}
      <section className="mundayn-section mundayn-choice">
        <div className="mundayn-container">
          <div className="mundayn-choice__grid">
            <article className="mundayn-choice__card bg-[#b14349]/[0.19]">
              <h2 className="mundayn-choice__card-title">What Package?</h2>
              <a href="#packages" className="mundayn-btn">
                Take The Assessment <ArrowIcon />
              </a>
              <p className="mundayn-choice__card-text" style={{
              marginTop: '24px'
            }}>
                Or start with Entrepreneur and upgrade as you grow. That's the beauty of the right foundation—you're never locked in, never stuck.
              </p>
            </article>
            
            <article className="mundayn-choice__card bg-[#280b21]">
              <h2 className="mundayn-choice__card-title" style={{
              color: '#DDD7C9'
            }}>Done-For-You?</h2>
              <a href="#offers" className="mundayn-btn">
                Learn More About Our Offers <ArrowIcon />
              </a>
              <p className="mundayn-choice__card-text text-[#ded8ca]" style={{
              marginTop: '24px'
            }}>
                Or start with Entrepreneur and upgrade as you grow. That's the beauty of the right foundation—you're never locked in, never stuck.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Is Mundayn Right For You Section */}
      <section className="mundayn-section mundayn-rightforyou">
        <div className="mundayn-container">
          <div className="mundayn-rightforyou__content">
            <h2 className="mundayn-rightforyou__title">Is Mundayn Right For You?</h2>
            
            <div className="mundayn-rightforyou__grid">
              <div className="mundayn-rightforyou__column mundayn-rightforyou__column--yes">
                <div className="mundayn-rightforyou__image mundayn-placeholder mundayn-placeholder--elephant">
                  <span>Elephant Image</span>
                </div>
                <h3 className="mundayn-rightforyou__column-title">This is for you if:</h3>
                
                <h4 className="mundayn-rightforyou__section-heading">You're hitting a ceiling that blocks your next level:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--check">
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Energy Ceiling: Can't delegate. Everything's manual. Business collapses without you.</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Income/Impact Ceiling: Offers exist but aren't connected. Inconsistent revenue. Can't scale systematically.</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Foundation Ceiling: Growing fast but need structure to support scale.</li>
                </ul>
                
                <h4 className="mundayn-rightforyou__section-heading">You're ready for implementation:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--check">
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Understand ROI and business investment</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Want to own your audience (email list), not rent from Instagram</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Ready to systematize and delegate with proper documentation</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Value your time enough to invest in infrastructure</li>
                </ul>
                
                <h4 className="mundayn-rightforyou__section-heading">You're commercially savvy:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--check">
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />See the value in expert setup vs. DIY struggle</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Understand that software without implementation is just potential</li>
                  <li><img src={checkmarkIcon} alt="" className="mundayn-rightforyou__icon" />Want transformation, not just tools</li>
                </ul>
              </div>
              
              <div className="mundayn-rightforyou__column mundayn-rightforyou__column--no">
                <div className="mundayn-rightforyou__image mundayn-placeholder mundayn-placeholder--elephant">
                  <span>Elephant Image</span>
                </div>
                <h3 className="mundayn-rightforyou__column-title">This isn't for you if:</h3>
                
                <h4 className="mundayn-rightforyou__section-heading">You're not ready for systematic infrastructure:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--x">
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Using purpose as excuse for not taking action</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Resist technology and systems ("That feels too corporate")</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Prefer staying in current operations rather than evolving</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Won't invest in business infrastructure</li>
                </ul>
                
                <h4 className="mundayn-rightforyou__section-heading">You're looking for shortcuts, not systems:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--x">
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Want shortcuts over infrastructure - looking for hacks, not systematic foundations</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Prioritize growth over foundation - trying to scale before systematizing basics</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Expect free solutions - not willing to invest in professional infrastructure</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Trial-hopping - sign up for 14 days, never implement, cancel, repeat elsewhere</li>
                </ul>
                
                <h4 className="mundayn-rightforyou__section-heading">You're content with current state:</h4>
                <ul className="mundayn-rightforyou__list mundayn-rightforyou__list--x">
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Happy running everything from your phone indefinitely</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Prefer managing multiple disconnected tools</li>
                  <li><img src={xMarkIcon} alt="" className="mundayn-rightforyou__icon" />Don't want to delegate or scale operations</li>
                </ul>
              </div>
            </div>
            
            <div className="mundayn-rightforyou__cta">
              <a href="#trial" className="mundayn-btn">
                Start Your Free Trial <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section className="mundayn-section mundayn-cta-cards">
        <div className="mundayn-container">
          <div className="mundayn-cta-cards__grid">
            <a href="/done-for-you" className="mundayn-cta-cards__card">
              <span className="mundayn-cta-cards__text">
                <span className="mundayn-cta-cards__italic">You</span> Create.<br />
                <span className="mundayn-cta-cards__italic">We</span> Implement.<br />
                <span className="mundayn-cta-cards__italic">You</span> Launch.
              </span>
            </a>
            <a href="/ecosystem" className="mundayn-cta-cards__card">
              <span className="mundayn-cta-cards__text">
                Your Business<br />
                Grows. Mundayn<br />
                <span className="mundayn-cta-cards__italic">Grows With You.</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mundayn-section mundayn-faq">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">Questions? Answered.</h2>
          
          <div className="mundayn-faq__list">
            <FaqItem question="How is this different from Kajabi, ClickFunnels, or other platforms?" answer={<>
                <p>Three ways:</p>
                <ol>
                  <li>True all-in-one: They specialize (Kajabi for courses, ClickFunnels for funnels). Mundayn does everything.</li>
                  <li>Setup included: They hand you software. We implement it for your specific business.</li>
                  <li>Ongoing partnership: They're software vendors. We're operational partners who grow with you.</li>
                </ol>
              </>} />
            <FaqItem question="What if I outgrow my package?" answer="Upgrade anytime. Your data stays. Your systems stay. You just unlock new features. Most people start with Entrepreneur or Creator and scale up as they grow. That's the design." />
            <FaqItem question="What if I'm not tech-savvy?" answer="That's exactly why DFY setup exists. You don't need to be technical. We build it, you use it. Plus, our training focuses on USING the system (clicking buttons, sending emails), not building it from scratch." />
            <FaqItem question="Do I need DFY setup or can I do it myself?" answer={<>
                <p>Both paths work:</p>
                <p>DIY: Free with trial. Takes 2-3 months. Best if you have time and enjoy technical setup.</p>
                <p>DFY: $599-$1,999. Takes max. 2-3 weeks. Best if you're hitting energy ceiling or want expert setup guaranteed to work.</p>
                <p>Most Impact Entrepreneurs choose DFY because time saved {'>'}{'>'}  money invested.</p>
              </>} />
            <FaqItem question="Can I migrate my existing content and contacts?" answer="Yes. We have migration tools for most platforms. If you choose DFY setup, we handle the entire migration—contacts, courses, automations, everything. Clean transition, zero data loss." />
            <FaqItem question="What's included in 'setup'?" answer={<>
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
              </>} />
            <FaqItem question="Is there a model for advanced entrepreneurs?" answer="Yes. If you're Visionary Entrepreneur with 100K+ audience, ready for COO partnership, we offer a partnership model that includes full operational buildout of Mundayn including management." />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mundayn-section mundayn-final-cta">
        <div className="mundayn-container">
          <h2 className="mundayn-final-cta__title">Ready To Get Your Life Back?</h2>
          <p className="mundayn-final-cta__subtitle">The Choice</p>
          
          <div className="mundayn-final-cta__grid">
            <article className="mundayn-final-cta__card">
              <p className="mundayn-final-cta__card-text">
                Choose your package. See how it feels to have systems running.
              </p>
              <div className="mundayn-final-cta__card-cta">
                <a href="#trial" className="mundayn-btn">
                  Start Your Free Trial <ArrowIcon />
                </a>
              </div>
            </article>
            
            <article className="mundayn-final-cta__card">
              <p className="mundayn-final-cta__card-text">
                We build it in one week. You launch with a system that actually works. Guaranteed.
              </p>
              <div className="mundayn-final-cta__card-cta">
                <a href="#offers" className="mundayn-btn">
                  Explore The Done-For-You Options <ArrowIcon />
                </a>
              </div>
            </article>
            
            <article className="mundayn-final-cta__card mundayn-final-cta__card--highlight">
              <h3 style={{
              fontSize: '24px',
              marginBottom: '16px'
            }}>Not ready yet?</h3>
              <p style={{
              fontSize: '16px',
              marginBottom: '16px'
            }}>
                Get the Systematic Business Blueprint free.<br />
                A 5-day email course that shows you:
              </p>
              <ul style={{
              fontSize: '14px',
              textAlign: 'left',
              paddingLeft: '20px',
              margin: '0 0 24px 0'
            }}>
                <li>How to identify which manual processes cost you the most</li>
                <li>The 3 automations every Impact Entrepreneur needs first</li>
                <li>When to DIY vs. when to delegate setup</li>
                <li>How to know which package fits your position</li>
              </ul>
              <input type="email" placeholder="Email Address" style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '40px',
              border: 'none',
              fontSize: '14px',
              marginBottom: '12px'
            }} />
              <a href="#" className="mundayn-btn" style={{
              width: '100%',
              justifyContent: 'center'
            }}>
                Get The Blueprint <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mundayn-footer">
        <div className="mundayn-footer__content">
          <div className="mundayn-footer__left">
            <div className="mundayn-footer__logo">
              <div className="mundayn-nav__logo-icon" style={{
              background: 'var(--mundayn-purple-dark)',
              color: 'var(--mundayn-gold)'
            }}>M</div>
              MUNDAYN
            </div>
            <p className="mundayn-footer__tagline">You Create. We Implement. You Launch.</p>
            <p className="mundayn-footer__copyright">© 2025 Mundayn. All rights reserved.</p>
          </div>
          <div className="mundayn-footer__right">
            <ul className="mundayn-footer__links">
              <li><a href="#packages">Find YOUR Package</a></li>
              <li><a href="#ecosystem">Ecosystem</a></li>
              <li><a href="#done-for-you">Done For You</a></li>
            </ul>
            <div className="mundayn-footer__contact">
              <p className="mundayn-footer__contact-label">Contact Us:</p>
              <p className="mundayn-footer__contact-email">care@mundayn.com</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Quiz Modal */}
      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </div>;
};
export default Index;