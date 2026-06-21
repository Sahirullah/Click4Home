import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Click4Home is Pakistan's leading real estate platform, helping thousands of people find their dream homes with verified properties and trusted agents.</p>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h3>Contact Information</h3>
            <ul className="contact-info">
              <li>
                <span className="label">Email:</span>
                <a href="mailto:info@click4home.com">info@click4home.com</a>
              </li>
              <li>
                <span className="label">Phone:</span>
                <a href="tel:+923319179593">+92 331 9179593</a>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Click4Home. All rights reserved. | 
            <Link to="/">Privacy Policy</Link> | 
            <Link to="/">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
