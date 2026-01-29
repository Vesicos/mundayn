import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/mundayn.css';

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
          <div className="mundayn-nav__logo-icon">M</div>
          MUNDAYN
        </Link>
        <ul className="mundayn-nav__links">
          <li><Link to="/">Product</Link></li>
          <li><Link to="/done-for-you">Done-For-You</Link></li>
          <li><a href="#ecosystem">Ecosystem</a></li>
        </ul>
        <a href="#start" className="mundayn-nav__cta">
          Start Your 14-Day Free Trial <ArrowIcon />
        </a>
      </nav>

      {/* Hero Section */}
      <header className="dfy-hero">
        <div className="dfy-hero__bg mundayn-placeholder mundayn-placeholder--elephant">
          <span>Elephant with boxes</span>
        </div>
        <div className="dfy-hero__content">
          <h1 className="dfy-hero__title">
            Your Business,<br />
            Running From <span className="dfy-hero__title-italic">Day One</span>
          </h1>
          <ul className="dfy-hero__list">
            <li>Not "some day when you configure it."</li>
            <li>Not "after you watch 47 tutorials."</li>
            <li>Not "once you hire someone to help."</li>
            <li>Not "maybe Thursday."</li>
          </ul>
          <a href="#packages" className="mundayn-btn">
            Jump to DFY Packages <ArrowIcon />
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
        <div className="mundayn-container">
          <h2 className="dfy-truth__title">
            The Honest <span className="dfy-truth__title-italic">Truth</span>
          </h2>
          <p className="dfy-truth__text">
            Most people don't fail because the tools are too hard.<br />
            That's not your fault.<br />
            But it <em>is</em> why you're still seeking something different.<br />
            That's why DFY exists.
          </p>
          <a href="#packages" className="mundayn-btn">
            Explore DFY Packages <ArrowIcon />
          </a>
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

      {/* What DFY Actually Includes Section */}
      <section className="dfy-includes">
        <div className="dfy-includes__wrap">
          <div className="dfy-includes__header">
            <h2 className="dfy-includes__title">
              What DFY <span className="dfy-includes__title-italic">Actually</span> Includes
            </h2>
            <p className="dfy-includes__subtitle">When we say "DFY offers," here's what that means:</p>
          </div>
          
          <div className="dfy-includes__grid">
            {/* Top-left card */}
            <article className="dfy-includes__card dfy-includes__card--tl">
              <div className="dfy-includes__card-overlay" />
              <div className="dfy-includes__card-content">
                <h3 className="dfy-includes__card-title">
                  Your System, Ready<br />
                  <span className="dfy-includes__card-title-italic">Complete Implementation</span>
                </h3>
                <h4 className="dfy-includes__card-label">What We Build:</h4>
                <ul className="dfy-includes__card-list">
                  <li>CRM with intelligent tagging</li>
                  <li>Automated booking and payments</li>
                  <li>Email sequences and follow-ups</li>
                  <li>Calendar and scheduling</li>
                  <li>Everything tested and working</li>
                </ul>
              </div>
            </article>
            
            {/* Top-right card */}
            <article className="dfy-includes__card dfy-includes__card--tr">
              <div className="dfy-includes__card-overlay" />
              <div className="dfy-includes__card-content">
                <h3 className="dfy-includes__card-title">
                  Your Brand, Everywhere<br />
                  <span className="dfy-includes__card-title-italic">Presence without a design team</span>
                </h3>
                <h4 className="dfy-includes__card-label">What We Implement:</h4>
                <ul className="dfy-includes__card-list">
                  <li>Your colors, fonts, and visual identity</li>
                  <li>Branded email templates</li>
                  <li>Client-facing forms and pages</li>
                  <li>Professional look across every touchpoint</li>
                </ul>
              </div>
            </article>
            
            {/* Bottom-left card */}
            <article className="dfy-includes__card dfy-includes__card--bl">
              <div className="dfy-includes__card-overlay" />
              <div className="dfy-includes__card-content">
                <h3 className="dfy-includes__card-title">
                  Your Client Journey, Mapped<br />
                  <span className="dfy-includes__card-title-italic">From stranger to client</span>
                </h3>
                <h4 className="dfy-includes__card-label">What We Architect:</h4>
                <ul className="dfy-includes__card-list">
                  <li>Lead magnet delivery automation</li>
                  <li>Welcome and nurture sequences</li>
                  <li>Proper tagging at every stage</li>
                  <li>Smart pathways based on behavior</li>
                  <li>Dashboard where you see everything</li>
                </ul>
              </div>
            </article>
            
            {/* Bottom-right card */}
            <article className="dfy-includes__card dfy-includes__card--br">
              <div className="dfy-includes__card-overlay" />
              <div className="dfy-includes__card-content">
                <h3 className="dfy-includes__card-title">
                  Your Launch, Supported<br />
                  <span className="dfy-includes__card-title-italic">We don't disappear after handoff</span>
                </h3>
                <h4 className="dfy-includes__card-label">What We Guarantee:</h4>
                <ul className="dfy-includes__card-list">
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

      {/* Package Cards Section */}
      <section className="dfy-packages">
        <div className="mundayn-container">
          <div className="dfy-packages__grid">
            <article className="dfy-packages__card">
              <h3>Your Better-Messy Capable Business Woman</h3>
              <p className="dfy-packages__includes">What You Get:</p>
              <ul>
                <li>CRM &amp; client management</li>
                <li>Automated email sequences</li>
                <li>1 lead magnet set-up/connection</li>
                <li>Calendar for scheduling</li>
                <li>Simple payment/invoicing</li>
                <li>Launch in 2 weeks</li>
              </ul>
            </article>
            
            <article className="dfy-packages__card">
              <h3>Your Level-It-Up I mean Creator Boss Mindset</h3>
              <p className="dfy-packages__includes">What You Get:</p>
              <ul>
                <li>One sales funnel or launch funnel</li>
                <li>Course or digital product setup</li>
                <li>Checkout &amp; payment integration</li>
                <li>Landing Page from templates</li>
                <li>In addition to all Entrepreneur</li>
              </ul>
            </article>
            
            <article className="dfy-packages__card">
              <h3>Your Core Mastery: Method, Mentorship, Mindset</h3>
              <p className="dfy-packages__includes">What You Get:</p>
              <ul>
                <li>Member portal for courses</li>
                <li>Private or group community space</li>
                <li>Client Journey Tagging Automation</li>
                <li>Checkout &amp; Affiliate System</li>
                <li>In addition to all Creator features</li>
              </ul>
            </article>
            
            <article className="dfy-packages__card">
              <h3>Your Genius Vision for Scaled Big Mindset Bold!</h3>
              <p className="dfy-packages__includes">What DFY Covers:</p>
              <ul>
                <li>Advanced funnel strategies</li>
                <li>Team workspace &amp; delegation</li>
                <li>Multiple product ecosystem</li>
                <li>Custom integration support</li>
                <li>Priority support &amp; faster turnaround</li>
              </ul>
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
      <footer className="mundayn-footer">
        <div className="mundayn-container">
          <div className="mundayn-footer__content">
            <div className="mundayn-footer__brand">
              <div className="mundayn-footer__logo">
                <div className="mundayn-nav__logo-icon">M</div>
                MUNDAYN
              </div>
              <p className="mundayn-footer__tagline">You Create. We Implement. You Launch.</p>
            </div>
            
            <div className="mundayn-footer__links">
              <div className="mundayn-footer__col">
                <a href="/">Find DFY Package</a>
                <a href="/">Ecosystem</a>
                <a href="/">Social Proof</a>
              </div>
              <div className="mundayn-footer__col">
                <a href="/">Contact us</a>
                <a href="/">Login to Mundayn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoneForYou;
