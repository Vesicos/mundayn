import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoNav from '@/assets/logonav.svg';
import logoIcon from '@/assets/logo-icon.svg';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Product' },
    { to: '/done-for-you', label: 'Done-For-You' },
    { to: '/ecosystem', label: 'Ecosystem' },
    { to: '/foundation-setup', label: 'Foundation Setup' },
  ];

  return (
    <nav className={`mundayn-nav ${open ? 'mundayn-nav--menu-open' : ''}`}>
      {/* Desktop: Link to home */}
      <Link to="/" className="mundayn-nav__logo mundayn-nav__logo-desktop">
        <img src={logoNav} alt="Mundayn" className="mundayn-nav__logo-img mundayn-nav__logo-full" />
      </Link>

      {/* Mobile: Open menu sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="mundayn-nav__logo mundayn-nav__logo-mobile" aria-label="Open menu">
            <img src={logoIcon} alt="Mundayn" className="mundayn-nav__logo-img mundayn-nav__logo-icon" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="mobile-menu">
          <div className="mobile-menu__header">
            <img src={logoNav} alt="Mundayn" className="mobile-menu__logo" />
          </div>
          <nav className="mobile-menu__nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-menu__link ${location.pathname === link.to ? 'mobile-menu__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="/#packages" className="mobile-menu__cta" onClick={() => setOpen(false)}>
            Start Your 14-Day Free Trial <ArrowIcon />
          </a>
        </SheetContent>
      </Sheet>

      <ul className="mundayn-nav__links">
        <li><Link to="/">Product</Link></li>
        <li><Link to="/done-for-you">Done-For-You</Link></li>
        <li><Link to="/ecosystem">Ecosystem</Link></li>
      </ul>
      <a href="/#packages" className="mundayn-nav__cta">
        Start Your 14-Day Free Trial <ArrowIcon />
      </a>
    </nav>
  );
};

export default MobileNav;
