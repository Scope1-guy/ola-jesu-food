import { Link } from "react-router-dom";
import businessInfo from "../data/businessInfo";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="brand-name footer-brand">{businessInfo.name}</div>
          <p className="footer-tagline">{businessInfo.tagline}</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href={`tel:${businessInfo.phoneLink}`}>{businessInfo.phone}</a>
            </li>
            <li>
              {businessInfo.city}, {businessInfo.country}
            </li>
            <li>
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Connect With Us</h3>
          <ul className="footer-social">
            <li>
              <a
                href={businessInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${businessInfo.name} on X (Twitter)`}
              >
                X
              </a>
            </li>
            <li>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${businessInfo.name} on Facebook`}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${businessInfo.name} on Instagram`}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          &copy; {year} {businessInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
