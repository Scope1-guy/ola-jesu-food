import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import WhatsAppCTA from "../components/WhatsAppCTA";
import businessInfo from "../data/businessInfo";
import products, { categories } from "../data/products";
import "./Home.css";
import insideShop from "../assets/google/IMG-20260911-WA0021.jpg";

function Home() {
  // Set a descriptive page title for SEO and browser tabs.
  useEffect(() => {
    document.title = `${businessInfo.name} | Quality Foodstuff in ${businessInfo.city}, Nigeria`;
  }, []);

  // Show the first 5 products as a preview on the Home page.
  const featuredProducts = products.slice(0, 5);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Our Products</h2>
            <Link to="/products" className="link-arrow">
              View All Products
            </Link>
          </div>
          <p className="section-intro">
            We offer a variety of high-quality foodstuff to meet your needs.
          </p>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showLearnMore />
            ))}
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading">
            <h2>Shop by Category</h2>
          </div>
          <ul className="categories-list">
            {categories.map((category) => (
              <li key={category}>
                <Link to="/products" className="category-pill">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview-inner">
          <div className="about-preview-text">
            <h2>About Us</h2>
            <p>
              {businessInfo.name} is a trusted foodstuff store committed to
              providing high-quality, fresh and affordable food products to our
              customers in {businessInfo.city}. We believe in good food, great
              service, and building long-term relationships with our customers.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>

          <img
            className="about-preview-image"
            src={insideShop}
            alt={`Inside ${businessInfo.name}'s store showing bags of foodstuff`}
          />

          <div className="why-choose-us">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>High-quality, fresh products</li>
              <li>Affordable prices</li>
              <li>Friendly and helpful service</li>
              <li>Convenient location in {businessInfo.city}</li>
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}

export default Home;
