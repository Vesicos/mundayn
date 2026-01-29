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
      <section className="dfy-paths">
        <div className="mundayn-container">
          <h2 className="dfy-paths__title">
            2 Paths To The Same <span className="dfy-paths__title-italic">Destination</span>
          </h2>
          
          <div className="dfy-paths__grid">
            <article className="dfy-paths__card dfy-paths__card--light">
              <h3 className="dfy-paths__card-label">Path 1:</h3>
              <p className="dfy-paths__card-name">DIY Setup<br />(Included Free)</p>
              <ul className="dfy-paths__card-list">
                <li>You learn the platform</li>
                <li>You configure</li>
                <li>You troubleshoot</li>
                <li>Timeline: 2-3 months</li>
                <li>Best for: Tech-savvy, time-rich</li>
              </ul>
              <a href="#trial" className="dfy-paths__btn">
                Start Free Trial <ArrowIcon />
              </a>
            </article>
            
            <article className="dfy-paths__card dfy-paths__card--dark">
              <h3 className="dfy-paths__card-label">Path 2:</h3>
              <p className="dfy-paths__card-name">DFY Setup<br />(Recommended)</p>
              <ul className="dfy-paths__card-list">
                <li>We implement it for you</li>
                <li>Every automation running</li>
                <li>Our team, 2-3 weeks</li>
                <li>Timeline: 2-3 weeks</li>
                <li>Best for: Time-Savvy, Impact-Focused</li>
              </ul>
              <a href="#packages" className="dfy-paths__btn">
                Explore DFY Options <ArrowIcon />
              </a>
            </article>
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
      <section className="dfy-cost">
        <div className="dfy-cost__image mundayn-placeholder mundayn-placeholder--elephant">
          <span>Elephants Image</span>
        </div>
        <div className="dfy-cost__content">
          <h2 className="dfy-cost__title">
            The <span className="dfy-cost__title-italic">Real</span> Cost<br />
            Of DIY Setup
          </h2>
          
          <div className="dfy-cost__item">
            <h4>Time:</h4>
            <p>30-40 hours watching tutorials, configuring, and fixing what didn't work the first time (or fourth).</p>
          </div>
          
          <div className="dfy-cost__item">
            <h4>Mistakes:</h4>
            <p>Wrong automations. Broken email sequences, late bookings, confused clients.</p>
          </div>
          
          <div className="dfy-cost__item">
            <h4>Opportunity Cost:</h4>
            <p>Every week spent learning software is a week NOT growing your business.</p>
          </div>
          
          <div className="dfy-cost__item">
            <h4>Energy:</h4>
            <p>The cognitive load of "I still need to do X" every single day.</p>
          </div>
          
          <div className="dfy-cost__truth">
            <h4>Truth:</h4>
            <p>Most entrepreneurs underestimate how much DIY costs them—not in money, but in momentum.</p>
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
            Only 2-4 weeks to complete implementation (Realistic, not hype)
          </p>
          
          <div className="dfy-solution__grid">
            <article className="dfy-solution__step">
              <span className="dfy-solution__number">1</span>
              <h3>Discovery</h3>
              <p>We interview you to understand how your business works. What do you sell? Who do you serve?</p>
            </article>
            
            <article className="dfy-solution__step">
              <span className="dfy-solution__number">2</span>
              <h3>Build</h3>
              <p>Complete business and systems building experience: ready for clients, ready to scale.</p>
            </article>
            
            <article className="dfy-solution__step">
              <span className="dfy-solution__number">3</span>
              <h3>Launch</h3>
              <p>Training to use your new system. Plus ongoing support during first 45-90 days.</p>
            </article>
            
            <article className="dfy-solution__step dfy-solution__step--highlight">
              <span className="dfy-solution__number">4</span>
              <h3>Investment</h3>
              <p>Starting at $599. Most packages $999-$1,999.</p>
              <a href="#packages" className="dfy-solution__btn">
                See All Packages <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* The Guarantee Section */}
      <section className="dfy-guarantee">
        <div className="mundayn-container">
          <h2 className="dfy-guarantee__title">
            The <span className="dfy-guarantee__title-italic">Guarantee</span>
          </h2>
          <p className="dfy-guarantee__subtitle">Zero risk. Complete confidence.</p>
          
          <div className="dfy-guarantee__grid">
            <article className="dfy-guarantee__card">
              <h3>Money-Back<br />Promise:</h3>
              <p>If your DFY setup doesn't work as promised, we refund 100%. No questions asked.</p>
            </article>
            
            <article className="dfy-guarantee__card">
              <h3>45-Day<br />Support:</h3>
              <p>If something needs adjustments in your first 45 days—we fix it. Free.</p>
            </article>
            
            <article className="dfy-guarantee__card">
              <h3>Why we can<br />promise this:</h3>
              <p>We use the Mundayn system daily. We've built hundreds of them. And we don't fund them until it works.</p>
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
