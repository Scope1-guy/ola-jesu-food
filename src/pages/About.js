import { useEffect } from "react";
import businessInfo from "../data/businessInfo";
import WhatsAppButton from "../components/WhatsAppButton";
import "./About.css";
import storeFrontImage from "../assets/IMG-20260909-WA0025.jpg";

function About() {
  useEffect(() => {
    document.title = `About Us | ${businessInfo.name}`;
  }, []);

  return (
    <div className="section">
      <div className="container about-page">
        <h1>About {businessInfo.name}</h1>
        <p className="section-intro">
          Get to know the foodstuff store trusted by families across{" "}
          {businessInfo.city}, {businessInfo.country}.
        </p>

        <div className="about-grid">
          <img
            src={storeFrontImage}
            alt={`Storefront of ${businessInfo.name} in ${businessInfo.city}`}
          />

          <div>
            <h2>Who We Are</h2>
            <p>
              {businessInfo.name} is a foodstuff store based in{" "}
              {businessInfo.address}, {businessInfo.state}. We sell everyday
              staples such as garri, rice, amala flour and beans, sourced
              carefully and sold at fair, affordable prices.
            </p>

            <h2>What We Sell</h2>
            <p>
              Our shelves are stocked with garri, rice, amala flour, beans and a
              range of other foodstuff that Nigerian households rely on every
              day. Whatever you're preparing, we most likely have the
              ingredients you need.
            </p>

            <h2>Our Values</h2>
            <ul className="values-list">
              <li>Quality — we check every product before it reaches you</li>
              <li>Trust — honest pricing, every time</li>
              <li>
                Community — proudly serving {businessInfo.city} and beyond
              </li>
            </ul>

            <h2>Where to Find Us</h2>
            <p>
              Visit us at {businessInfo.address}, {businessInfo.city},{" "}
              {businessInfo.state}, or reach out on WhatsApp if you'd rather ask
              a question first.
            </p>

            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
