import { useEffect } from "react";
import businessInfo from "../data/businessInfo";
import ContactSection from "../components/ContactSection";

function Contact() {
  useEffect(() => {
    document.title = `Contact Us | ${businessInfo.name}`;
  }, []);

  return (
    <div className="section">
      <div className="container">
        <h1>Contact {businessInfo.name}</h1>
        <p className="section-intro">
          Have a question about a product, or want to know if we have
          something in stock? Reach us any of the ways below — WhatsApp is
          usually the fastest.
        </p>

        <ContactSection />
      </div>
    </div>
  );
}

export default Contact;
