import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';
import logoNav from '@/assets/logonav.svg';
import Footer from '../components/Footer';
import dfyHeroElephant from '@/assets/dfy-hero-elephant.png';
import elephantTruthBg from '@/assets/elephant-truth-bg.png';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const DoneForYou = () => {
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
      <header className="dfy-hero">
        <div className="dfy-hero__bg">
          <img src={dfyHeroElephant} alt="Elephant carrying boxes" className="dfy-hero__image" />
        </div>
        <div className="dfy-hero__content">
          <h1 className="dfy-hero__title">
            Your Business,<br />
            Running From <span className="dfy-hero__title-italic">Day One</span>
          </h1>
          <p className="dfy-hero__subtitle">
            Most platforms hand you software.<br />
            We hand you a system that works.
          </p>
          <p className="dfy-hero__week">Week 1: You're operating.</p>
          <p className="dfy-hero__tagline">Not learning. Operating.</p>
          <a href="#packages" className="dfy-hero__btn">
            SEE HOW IT WORKS <ArrowIcon />
          </a>
        </div>
      </header>

      {/* 2 Paths Section */}
      <section className="two-paths">
        <div className="mundayn-container">
          <h2 className="two-paths__title">
            2 Paths To The Same <span className="two-paths__title-italic">Destination</span>
          </h2>
          
          <div className="two-paths__wrap">
            <div className="two-paths__panel two-paths__panel--left">
              <div className="two-paths__top">
                <div className="two-paths__left-col">
                  <div className="two-paths__h1">Path 1:</div>
                  <div className="two-paths__sub">DIY Setup<br />(Included Free)</div>
                </div>
                <div className="two-paths__right-col">
                  <p className="two-paths__quote">"I have time to set this up myself"</p>
                  <ul className="two-paths__list">
                    <li>Free with trial</li>
                    <li>2–3 months to full implementation</li>
                    <li>Tutorials and support included</li>
                    <li>Best if you enjoy technical setup</li>
                  </ul>
                </div>
              </div>
              <a href="#trial" className="two-paths__btn">
                Start Free Trial (DIY) <ArrowIcon />
              </a>
            </div>
            
            <div className="two-paths__divider" aria-hidden="true"></div>
            
            <div className="two-paths__panel two-paths__panel--right">
              <div className="two-paths__top">
                <div className="two-paths__left-col">
                  <div className="two-paths__h1">Path 2:</div>
                  <div className="two-paths__sub">DFY Setup<br />(Recommended)</div>
                </div>
                <div className="two-paths__right-col">
                  <p className="two-paths__quote">"I need this working NOW"</p>
                  <ul className="two-paths__list">
                    <li>One week to complete system</li>
                    <li>Expert implementation guaranteed</li>
                    <li>You focus on business, we handle tech</li>
                    <li>Best if you're hitting energy ceiling</li>
                  </ul>
                </div>
              </div>
              <a href="#packages" className="two-paths__btn">
                Get Done-For-You Quote <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Honest Truth Section */}
      <section className="dfy-truth">
        <div className="dfy-truth__bg">
          <img src={elephantTruthBg} alt="" className="dfy-truth__bg-image" />
        </div>
        <div className="dfy-truth__content">
          <div className="dfy-truth__inner">
            <h2 className="dfy-truth__title">
              The Honest <span className="dfy-truth__title-italic">Truth</span>
            </h2>
            <p className="dfy-truth__text">Most people don't fully implement the tools they buy.</p>
            <p className="dfy-truth__text dfy-truth__text--bold">That's not your fault.</p>
            <p className="dfy-truth__text">That's human nature meeting complexity.</p>
            <p className="dfy-truth__text dfy-truth__text--bold">That's why DFY exists.</p>
            <a href="#trial" className="dfy-truth__btn">
              Start Free Trial (DIY) <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* The Real Cost of DIY Setup Section */}
      <section className="split-card">
        <div className="split-card__wrap">
          <div className="split-card__card">
            <div className="split-card__media">
              <div className="mundayn-placeholder mundayn-placeholder--elephant split-card__img">
                <span>Elephants Image</span>
              </div>
            </div>
            
            <div className="split-card__divider" aria-hidden="true"></div>
            
            <div className="split-card__content">
              <div className="split-card__top">
                <h2 className="split-card__title">
                  The <span className="split-card__title-italic">Real</span> Cost<br />
                  Of DIY Setup
                </h2>
                
                <div className="split-card__items">
                  <div className="split-card__item">
                    <h4>Time:</h4>
                    <p>30-40 hours learning, configuring, testing<br />(At your hourly rate: $3,000-$6,000 of your time)</p>
                  </div>
                  
                  <div className="split-card__item">
                    <h4>Mistakes:</h4>
                    <p>Incorrect setup = broken automations, lost leads, frustrated clients</p>
                  </div>
                  
                  <div className="split-card__item">
                    <h4>Opportunity:</h4>
                    <p>Every week spent learning software = a week NOT creating or selling</p>
                  </div>
                  
                  <div className="split-card__item">
                    <h4>Energy:</h4>
                    <p>The cognitive load of "figuring it out" drains what you need for your actual work</p>
                  </div>
                </div>
                
                <div className="split-card__truth">
                  <h4>Truth:</h4>
                  <p>Smart entrepreneurs always chose to invest ~$500 or more to save 40 hours and $6,000 of their time. Always.</p>
                </div>
              </div>
              
              <a href="#packages" className="split-card__btn">
                Get Done-For-You Quote <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The DFY Solution Section */}
      <section className="dfy-solution" id="packages">
        <div className="mundayn-container">
          <h2 className="dfy-solution__title">
            The DFY Solution
          </h2>
          <p className="dfy-solution__subtitle">
            Only <span className="dfy-solution__subtitle-italic">ONE</span> week to complete implementation (Realistic, not hype)
          </p>
          
          <div className="dfy-solution__grid">
            <article className="dfy-solution__step">
              <div className="dfy-solution__divider" />
              <div className="dfy-solution__content">
                <span className="dfy-solution__number">1</span>
                <h3 className="dfy-solution__label">Discovery</h3>
                <ul className="dfy-solution__list">
                  <li>Live Discovery Call</li>
                  <li>Understanding your business</li>
                  <li>Design your architecture</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-solution__step">
              <div className="dfy-solution__divider" />
              <div className="dfy-solution__content">
                <span className="dfy-solution__number">2</span>
                <h3 className="dfy-solution__label">Build</h3>
                <ul className="dfy-solution__list">
                  <li>Configure all features</li>
                  <li>Complete technical setup</li>
                  <li>Import your data</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-solution__step">
              <div className="dfy-solution__divider" />
              <div className="dfy-solution__content">
                <span className="dfy-solution__number">3</span>
                <h3 className="dfy-solution__label">Launch</h3>
                <ul className="dfy-solution__list">
                  <li>Train you on using it (not building)</li>
                  <li>Hand off a working system</li>
                  <li>45-day support included</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-solution__step">
              <div className="dfy-solution__divider" />
              <div className="dfy-solution__content">
                <span className="dfy-solution__number">4</span>
                <h3 className="dfy-solution__label">Investment</h3>
                <p className="dfy-solution__price">Starting at $499 <span className="dfy-solution__price-strike">One-Time Fee</span></p>
                <a href="#packages" className="dfy-solution__btn">
                  Save My Costs <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* The Guarantee Section */}
      <section className="dfy-guarantee">
        <div className="dfy-guarantee__wrap">
          <div className="dfy-guarantee__header">
            <h2 className="dfy-guarantee__title">
              The <span className="dfy-guarantee__title-italic">Guarantee</span>
            </h2>
            <p className="dfy-guarantee__subtitle">Zero risk. Complete confidence.</p>
          </div>
          
          <div className="dfy-guarantee__grid">
            <article className="dfy-guarantee__card">
              <h3 className="dfy-guarantee__card-title">
                Money-Back<br /><span className="dfy-guarantee__card-title-italic">Promise:</span>
              </h3>
              <p className="dfy-guarantee__card-body">
                If your DFY setup doesn't work as promised, we refund 100%. No questions asked.
              </p>
            </article>
            
            <article className="dfy-guarantee__card">
              <h3 className="dfy-guarantee__card-title">
                45-Day<br /><span className="dfy-guarantee__card-title-italic">Support:</span>
              </h3>
              <p className="dfy-guarantee__card-body">
                If something needs adjustment in your first 45 days, we fix it. Free.
              </p>
            </article>
            
            <article className="dfy-guarantee__card">
              <h3 className="dfy-guarantee__card-title">
                Why we <span className="dfy-guarantee__card-title-italic">can</span><br /><span className="dfy-guarantee__card-title-italic">promise</span> this:
              </h3>
              <p className="dfy-guarantee__card-body">
                We are the Mundayn experts. We know exactly how to build it right. And we don't hand it off until it works.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What DFY Actually Includes Section */}
      <section className="dfy-includes">
        <div className="mundayn-container">
          <h2 className="dfy-includes__title">
            What DFY <span className="dfy-includes__title-italic">Actually</span> Includes
          </h2>
          <p className="dfy-includes__subtitle">
            When we say "DFY offers," here's what that means:
          </p>
          
          <div className="dfy-includes__grid">
            <article className="dfy-includes__card dfy-includes__card--tl">
              <div className="dfy-includes__overlay" />
              <div className="dfy-includes__content">
                <h3 className="dfy-includes__heading">
                  Your System, Ready<br />
                  <span className="dfy-includes__heading-italic">Complete Implementation</span>
                </h3>
                <p className="dfy-includes__label">What We Build:</p>
                <ul className="dfy-includes__list">
                  <li>CRM with intelligent tagging</li>
                  <li>Automated booking and payments</li>
                  <li>Email sequences and follow-ups</li>
                  <li>Calendar and scheduling</li>
                  <li>Everything tested and working</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-includes__card dfy-includes__card--tr">
              <div className="dfy-includes__overlay" />
              <div className="dfy-includes__content">
                <h3 className="dfy-includes__heading">
                  Your Brand, Everywhere<br />
                  <span className="dfy-includes__heading-italic">Presence without a design team</span>
                </h3>
                <p className="dfy-includes__label">What We Implement:</p>
                <ul className="dfy-includes__list">
                  <li>Your colors, fonts, and visual identity</li>
                  <li>Branded email templates</li>
                  <li>Client-facing forms and pages</li>
                  <li>Professional look across every touchpoint</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-includes__card dfy-includes__card--bl">
              <div className="dfy-includes__overlay" />
              <div className="dfy-includes__content">
                <h3 className="dfy-includes__heading">
                  Your Client Journey, Mapped<br />
                  <span className="dfy-includes__heading-italic">From stranger to client</span>
                </h3>
                <p className="dfy-includes__label">What We Architect:</p>
                <ul className="dfy-includes__list">
                  <li>Lead magnet delivery automation</li>
                  <li>Welcome and nurture sequences</li>
                  <li>Proper tagging at every stage</li>
                  <li>Smart pathways based on behavior</li>
                  <li>Dashboard where you see everything</li>
                </ul>
              </div>
            </article>
            
            <article className="dfy-includes__card dfy-includes__card--br">
              <div className="dfy-includes__overlay" />
              <div className="dfy-includes__content">
                <h3 className="dfy-includes__heading">
                  Your Launch, Supported<br />
                  <span className="dfy-includes__heading-italic">We don't disappear after handoff</span>
                </h3>
                <p className="dfy-includes__label">What We Guarantee:</p>
                <ul className="dfy-includes__list">
                  <li>Training on using your system (not building it)</li>
                  <li>45 days of free adjustments</li>
                  <li>Direct access to your implementation specialist</li>
                  <li>System works perfectly from day one</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Your Business One Week From Now Section */}
      <section className="dfy-future">
        <div className="mundayn-container">
          <h2 className="dfy-future__title">
            Your Business, One Week From <span className="dfy-future__title-italic">Now:</span>
          </h2>
          
          <div className="dfy-future__content">
            <p>You wake up to confirmation emails you didn't send. Booking system handled everything. Payment processed. Welcome sequence delivered. Client onboarded and ready for their session.</p>
            <p>You open your dashboard. Everything's organized. Tagged properly. Following up automatically.</p>
            <p>You spend your morning doing the work you actually built this business to do. This isn't someday. This is one week from now. That's what DFY creates.</p>
          </div>
          
          <a href="#start" className="mundayn-btn">
            Jump to DFY Packages <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DoneForYou;
