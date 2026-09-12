import { Link } from "react-router-dom";
import businessInfo from "../data/businessInfo";
import "./Hero.css";
import foodstuffImage from "../assets/IMG_4388.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Welcome to {businessInfo.name}</p>
          <h1>Quality Foodstuff at Affordable Prices</h1>
          <p className="hero-description">
            We sell a wide range of foodstuff including garri, amala flour, rice
            and more, straight from {businessInfo.city}. Fresh, quality and
            always available.
          </p>
          <Link to="/products" className="btn btn-primary">
            Shop Our Products
          </Link>
        </div>

        <img
          className="hero-image"
          src={foodstuffImage}
          alt="Assorted fresh foodstuff including garri, rice and beans at Mama Grace Foodstuff"
        />
      </div>

      <div className="hero-highlights">
        <div className="container hero-highlights-inner">
          <span>Fresh &amp; Quality Products</span>
          <span>Affordable Prices</span>
          <span>Reliable &amp; Trustworthy</span>
          <span>Local &amp; Fast Service in {businessInfo.city}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
