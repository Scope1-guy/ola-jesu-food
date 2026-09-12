import { useState } from "react";
import { NavLink } from "react-router-dom";
import businessInfo from "../data/businessInfo";
import WhatsAppButton from "./WhatsAppButton";
import "./Header.css";
import logo from "../assets/IMG-20260909-WA0007.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt={`${businessInfo.name} logo`}
            className="brand-logo"
          />
          <span className="brand-text">
            <span className="brand-name">{businessInfo.name}</span>
            <span className="brand-tagline">{businessInfo.tagline}</span>
          </span>
        </NavLink>

        <nav
          className={`main-nav ${menuOpen ? "main-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={closeMenu}>
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-whatsapp">
            <WhatsAppButton />
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
