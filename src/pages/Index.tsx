import '../styles/globals.css';
import '../styles/mundayn.css';

// Icon components for placeholders
const SunIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const MailIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
);

const GridIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HeartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Index = () => {
  return (
    <div className="mundayn-page">
      {/* Navigation */}
      <nav className="mundayn-nav">
        <a href="#" className="mundayn-nav__logo">
          <div className="mundayn-nav__logo-icon">M</div>
          MUNDAYN
        </a>
        <ul className="mundayn-nav__links">
          <li><a href="#product">Product</a></li>
          <li><a href="#done-for-you">Done-For-You</a></li>
          <li><a href="#ecosystem">Ecosystem</a></li>
        </ul>
        <a href="#trial" className="mundayn-nav__cta">
          Start Your 14-Day Free Trial <ArrowIcon />
        </a>
      </nav>

      {/* Hero Section */}
      <header className="mundayn-hero">
        <div className="mundayn-hero__bg mundayn-placeholder mundayn-placeholder--elephant">
          <span>Hero Background - Elephant Image</span>
        </div>
        <div className="mundayn-hero__content">
          <h1 className="mundayn-hero__title">
            Your Business, Running <span className="mundayn-hero__title-italic">Itself</span>
          </h1>
          <p className="mundayn-hero__subtitle">
            The only platform that delivers true all-in-one: the systems AND the setup.
            We handle the mundane so you can focus on the meaningful.
          </p>
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
            <article className="mundayn-stage-card">
              <div className="mundayn-stage-card__image mundayn-placeholder mundayn-placeholder--person">
                <span>Builder Image</span>
              </div>
              <div className="mundayn-stage-card__content">
                <h3 className="mundayn-stage-card__title">
                  The Foundation <span className="mundayn-stage-card__title-italic">Builder</span>
                </h3>
                <p className="mundayn-stage-card__text">
                  You're building from the ground up. Ready to install professional infrastructure before chaos catches up.
                </p>
              </div>
            </article>
            
            <article className="mundayn-stage-card">
              <div className="mundayn-stage-card__image mundayn-placeholder mundayn-placeholder--person">
                <span>Creator Image</span>
              </div>
              <div className="mundayn-stage-card__content">
                <h3 className="mundayn-stage-card__title">
                  The Impact <span className="mundayn-stage-card__title-italic">Creator</span>
                </h3>
                <p className="mundayn-stage-card__text">
                  You're creating proven impact. Running everything from your phone. Ready to systematize and delegate.
                </p>
              </div>
            </article>
            
            <article className="mundayn-stage-card">
              <div className="mundayn-stage-card__image mundayn-placeholder mundayn-placeholder--person">
                <span>Architect Image</span>
              </div>
              <div className="mundayn-stage-card__content">
                <h3 className="mundayn-stage-card__title">
                  The Flow <span className="mundayn-stage-card__title-italic">Architect</span>
                </h3>
                <p className="mundayn-stage-card__text">
                  You've built courses, audience, offers. Now you're ready to connect them into predictable revenue flow.
                </p>
              </div>
            </article>
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
            <div className="mundayn-choose__image mundayn-placeholder mundayn-placeholder--elephant">
              <span>Elephant with boxes image</span>
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
                  <span className="mundayn-choose__list-icon"><CheckIcon /></span>
                  Your perfect package match
                </li>
                <li>
                  <span className="mundayn-choose__list-icon"><CheckIcon /></span>
                  Clear pricing (only pay for what you need TODAY)
                </li>
                <li>
                  <span className="mundayn-choose__list-icon"><CheckIcon /></span>
                  Easy upgrade path as you grow
                </li>
                <li>
                  <span className="mundayn-choose__list-icon"><CheckIcon /></span>
                  Everything in one place
                </li>
              </ul>
              
              <p className="mundayn-choose__promise-title">Our promise:</p>
              <p className="mundayn-choose__promise-text">
                Start where you are TODAY. Upgrade only when you're ready. We're with you on the full journey—from first client to full community.
              </p>
              
              <a href="#packages" className="mundayn-btn">
                Show Me My Package <ArrowIcon />
              </a>
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
          
          <div className="mundayn-why__content">
            <div className="mundayn-why__left">
              <h3 className="mundayn-why__heading">
                The Problem with <span className="mundayn-section__title-italic">All-in-One</span>
              </h3>
              <div className="mundayn-why__text">
                <p>Most platforms give you software and wish you luck.</p>
                <br />
                <p>They hand you the tools—CRM, email marketing, course hosting, funnels, and say "figure it out."</p>
                <br />
                <p>You spend 30+ hours learning. Then two weeks setting up. Then months fixing what you did wrong.</p>
                <br />
                <p><strong>Here's what we learned after watching so many Impact Entrepreneurs struggle:</strong></p>
                <br />
                <p>Software doesn't create transformation. Implementation does.</p>
                <br />
                <p><strong>Features are just potential. Implementation is transformation.</strong></p>
              </div>
            </div>
            <div className="mundayn-why__right">
              <h3 className="mundayn-why__heading">
                What <span className="mundayn-section__title-italic">True All-in-One</span> means
              </h3>
              <div className="mundayn-why__text">
                <p className="mundayn-why__label">THE TOOL</p>
                <p className="mundayn-why__desc">One platform that replaces 15+ scattered apps you run today. Everything you need in one place. One login. Complete control.</p>
                
                <p className="mundayn-why__label">THE SETUP (Done-For-You Services)</p>
                <p className="mundayn-why__desc">We implement it for you, built for your specific business. Your branding. Your client journey. Your workflows. Configured by us.</p>
                
                <p className="mundayn-why__label">THE TRANSFORMATION</p>
                <p className="mundayn-why__desc">Your business runs from day one, not "someday." Week 1, you're operating. Not learning. Operating.</p>
              </div>
              <a href="#offers" className="mundayn-btn">
                Learn More About Our Offers <ArrowIcon />
              </a>
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
              <div className="mundayn-feels__card-icon"><SunIcon /></div>
              <h3 className="mundayn-feels__card-title">Wake up to confirmation emails you never sent.</h3>
              <p className="mundayn-feels__card-text">
                Your booking system handled the mundane. Payments processed. Reminders sent. Client onboarded. You handle the meaningful: the actual session that creates transformation.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><PlayIcon /></div>
              <h3 className="mundayn-feels__card-title">Your assistant manages operations while you create.</h3>
              <p className="mundayn-feels__card-text">
                Everything's documented. Workflows exist. Systems run without you explaining twice. They handle the mundane. You focus on your genius.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><MailIcon /></div>
              <h3 className="mundayn-feels__card-title">Your Instagram followers become email subscribers.</h3>
              <p className="mundayn-feels__card-text">
                Your funnel works 24/7. Lead magnets get delivered magically. Opt-in sequences run with proper tagging. Leads get nurtured while you sleep ready to receive your gifts.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><GridIcon /></div>
              <h3 className="mundayn-feels__card-title">Courses sell themselves through systematic flow.</h3>
              <p className="mundayn-feels__card-text">
                Email sequence → landing page → checkout → course delivery → community access. One time setup. Infinite replay.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><StarIcon /></div>
              <h3 className="mundayn-feels__card-title">Your community thrives without you micromanaging.</h3>
              <p className="mundayn-feels__card-text">
                Members connect. Questions get answered. Value gets delivered. You show up to guide, not moderate.
              </p>
            </article>
            
            <article className="mundayn-feels__card">
              <div className="mundayn-feels__card-icon"><HeartIcon /></div>
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
          
          <div className="mundayn-savings__logos">
            <div className="mundayn-savings__logo mundayn-savings__logo--crossed">Mailchimp</div>
            <div className="mundayn-savings__logo mundayn-savings__logo--crossed">Wix</div>
            <div className="mundayn-savings__logo mundayn-savings__logo--crossed">Typeform</div>
            <div className="mundayn-savings__logo mundayn-savings__logo--crossed">Kajabi</div>
            <div className="mundayn-savings__logo mundayn-savings__logo--crossed">Kartra</div>
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
          
          <div className="mundayn-packages__grid">
            <article className="mundayn-package-card">
              <div className="mundayn-package-card__icon">🏢</div>
              <h3 className="mundayn-package-card__name">Entrepreneur Package</h3>
              <p className="mundayn-package-card__price">$59/month</p>
              
              <p className="mundayn-package-card__section-title">What's inside:</p>
              <ul className="mundayn-package-card__list">
                <li>• Complete contact management</li>
                <li>• Text and Email marketing & automations</li>
                <li>• Scheduling with automated booking</li>
                <li>• Payment processing & invoicing</li>
                <li>• Forms, quizzes & surveys</li>
              </ul>
              
              <p className="mundayn-package-card__section-title">This is for you:</p>
              <p className="mundayn-package-card__list">Running a coaching, artist, or consulting business. Need professional operating backbone without complexity you don't need (yet).</p>
              
              <div className="mundayn-package-card__cta">
                <a href="#trial" className="mundayn-btn">
                  Start With Entrepreneur <ArrowIcon />
                </a>
              </div>
            </article>
            
            <article className="mundayn-package-card mundayn-package-card--featured">
              <div className="mundayn-package-card__icon">🌐</div>
              <h3 className="mundayn-package-card__name">Creator Package</h3>
              <p className="mundayn-package-card__price">$99/month</p>
              
              <p className="mundayn-package-card__section-title">Everything in Entrepreneur, PLUS:</p>
              <ul className="mundayn-package-card__list">
                <li>• Website & landing page builder</li>
                <li>• WordPress connection</li>
                <li>• Social media planner</li>
                <li>• and more</li>
              </ul>
              
              <p className="mundayn-package-card__section-title">This is for you:</p>
              <p className="mundayn-package-card__list">Creating content. Building audience. Need web presence management without hiring a team.</p>
              
              <div className="mundayn-package-card__cta">
                <a href="#trial" className="mundayn-btn">
                  Start With Creator <ArrowIcon />
                </a>
              </div>
            </article>
            
            <article className="mundayn-package-card">
              <div className="mundayn-package-card__icon">👑</div>
              <h3 className="mundayn-package-card__name">Leader Package</h3>
              <p className="mundayn-package-card__price">$149/month</p>
              
              <p className="mundayn-package-card__section-title">Everything in Creator, PLUS:</p>
              <ul className="mundayn-package-card__list">
                <li>• Community platform (Skool-comparable)</li>
                <li>• Course & membership hosting</li>
                <li>• Advanced automations</li>
                <li>• Team collaboration tools</li>
              </ul>
              
              <p className="mundayn-package-card__section-title">This is for you:</p>
              <p className="mundayn-package-card__list">Managing team community. Need enterprise-level infrastructure at startup cost.</p>
              
              <div className="mundayn-package-card__cta">
                <a href="#trial" className="mundayn-btn">
                  Start With Leader <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About The Mundane Section */}
      <section className="mundayn-section mundayn-mundane">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">
            Let's Be <span className="mundayn-section__title-italic">Honest</span> About The Mundane
          </h2>
          
          <div className="mundayn-mundane__grid">
            <article className="mundayn-mundane__card">
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
            
            <article className="mundayn-mundane__card">
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
            
            <article className="mundayn-mundane__card">
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
            
            <article className="mundayn-mundane__card">
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
          
          <div className="mundayn-numbers__grid">
            <article className="mundayn-number-card">
              <p className="mundayn-number-card__value">3+</p>
              <p className="mundayn-number-card__label">Hours Saved Every Week</p>
              <p className="mundayn-number-card__desc">That's 60+ hours monthly. 720+ hours yearly.</p>
            </article>
            
            <article className="mundayn-number-card">
              <p className="mundayn-number-card__value">$300+</p>
              <p className="mundayn-number-card__label">Monthly Savings</p>
              <p className="mundayn-number-card__desc">Replace 15+ scattered apps you pay for today.</p>
            </article>
            
            <article className="mundayn-number-card">
              <p className="mundayn-number-card__value">1</p>
              <p className="mundayn-number-card__label">Week to Launch</p>
              <p className="mundayn-number-card__desc">Done-For-You setup gets you operating fast.</p>
            </article>
            
            <article className="mundayn-number-card">
              <p className="mundayn-number-card__value">∞</p>
              <p className="mundayn-number-card__label">Scalability</p>
              <p className="mundayn-number-card__desc">Grow without changing platforms.</p>
            </article>
          </div>
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
              <p className="mundayn-section__subtitle" style={{ textAlign: 'left', marginBottom: '24px' }}>
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
            <article className="mundayn-choice__card">
              <h2 className="mundayn-choice__card-title">What Package?</h2>
              <a href="#packages" className="mundayn-btn">
                Take The Assessment <ArrowIcon />
              </a>
              <p className="mundayn-choice__card-text" style={{ marginTop: '24px' }}>
                Or start with Entrepreneur and upgrade as you grow. That's the beauty of the right foundation—you're never locked in, never stuck.
              </p>
            </article>
            
            <article className="mundayn-choice__card">
              <h2 className="mundayn-choice__card-title" style={{ color: 'var(--mundayn-gold)' }}>Done-For-You?</h2>
              <a href="#offers" className="mundayn-btn">
                Learn More About Our Offers <ArrowIcon />
              </a>
              <p className="mundayn-choice__card-text" style={{ marginTop: '24px' }}>
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
              <div className="mundayn-rightforyou__column">
                <div className="mundayn-rightforyou__image mundayn-placeholder mundayn-placeholder--elephant">
                  <span>Elephant Image</span>
                </div>
                <h3>This is for you if:</h3>
                
                <h4>You're hitting a ceiling that blocks your next level:</h4>
                <ul>
                  <li>Energy Ceiling: Can't delegate. Everything's manual. Business collapses without you.</li>
                  <li>Income/Impact Ceiling: Offers exist but aren't connected. Inconsistent revenue.</li>
                  <li>Foundation Ceiling: Growing fast but need structure to support scale.</li>
                </ul>
                
                <h4>You're ready for implementation:</h4>
                <ul>
                  <li>Understand ROI and business investment</li>
                  <li>Want to own your audience (email list), not rent from Instagram</li>
                  <li>Ready to systematize and delegate with proper documentation</li>
                  <li>Value your time enough to invest in infrastructure</li>
                </ul>
              </div>
              
              <div className="mundayn-rightforyou__column">
                <div className="mundayn-rightforyou__image mundayn-placeholder mundayn-placeholder--elephant">
                  <span>Elephant Image</span>
                </div>
                <h3>This isn't for you if:</h3>
                
                <h4>You're not ready for systematic infrastructure:</h4>
                <ul>
                  <li>Using purpose as excuse for not taking action</li>
                  <li>Resist technology and systems ("That feels too corporate")</li>
                  <li>Prefer staying in current operations rather than evolving</li>
                  <li>Won't invest in business infrastructure</li>
                </ul>
                
                <h4>You're looking for shortcuts, not systems:</h4>
                <ul>
                  <li>Want shortcuts over infrastructure - looking for hacks, not systematic foundations</li>
                  <li>Prioritize growth over foundation - trying to scale before systematizing basics</li>
                  <li>Expect free solutions - not willing to invest in professional infrastructure</li>
                  <li>Trial-hopping - sign up for 14 days, never implement, cancel, repeat elsewhere</li>
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

      {/* FAQ Section */}
      <section className="mundayn-section mundayn-faq">
        <div className="mundayn-container">
          <h2 className="mundayn-section__title">Questions? Answered.</h2>
          
          <div className="mundayn-faq__list">
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">How is this different from Kajabi, ClickFunnels, or other platforms?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">What if I outgrow my package?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">What if I'm not tech-savvy?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">Do I need DFY setup or can I do it myself?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">Can I migrate my existing content and contacts?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">What's included in 'setup'?</p>
            </div>
            <div className="mundayn-faq__item">
              <p className="mundayn-faq__question">Is there a model for advanced entrepreneurs?</p>
            </div>
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
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Not ready yet?</h3>
              <p style={{ fontSize: '16px', marginBottom: '16px' }}>
                Get the Systematic Business Blueprint free.<br />
                A 5-day email course that shows you:
              </p>
              <ul style={{ fontSize: '14px', textAlign: 'left', paddingLeft: '20px', margin: '0 0 24px 0' }}>
                <li>How to identify which manual processes cost you the most</li>
                <li>The 3 automations every Impact Entrepreneur needs first</li>
                <li>When to DIY vs. when to delegate setup</li>
                <li>How to know which package fits your position</li>
              </ul>
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '40px',
                  border: 'none',
                  fontSize: '14px',
                  marginBottom: '12px'
                }}
              />
              <a href="#" className="mundayn-btn" style={{ width: '100%', justifyContent: 'center' }}>
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
              <div className="mundayn-nav__logo-icon" style={{ background: 'var(--mundayn-purple-dark)', color: 'var(--mundayn-gold)' }}>M</div>
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
    </div>
  );
};

export default Index;
