import { Link } from 'react-router-dom';
import footerLogo from '@/assets/footer-logo.png';
import bgFooter from '@/assets/bgfooter.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="mundayn-container">
        <div className="site-footer__card">
          <div className="site-footer__bg" style={{ backgroundImage: `url(${bgFooter})` }}></div>
          <div className="site-footer__tint"></div>
          <div className="site-footer__content">
            <div className="site-footer__brand">
              <img src={footerLogo} alt="Mundayn Logo" className="site-footer__logo" />
            </div>
            
            <nav className="site-footer__nav">
              <Link to="/#packages">Find YOUR Package</Link>
              <Link to="/done-for-you">Done For You</Link>
            </nav>
            
            <div className="site-footer__legal">
              <p className="site-footer__tagline">You Create. We Implement. You Launch.</p>
              <p className="site-footer__copyright">© 2025 Mundayn. All rights reserved.</p>
            </div>
            
            <div className="site-footer__contact">
              <p className="site-footer__contact-label">Contact Us:</p>
              <a href="mailto:support@care.mundayn.com" className="site-footer__email">support@care.mundayn.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
