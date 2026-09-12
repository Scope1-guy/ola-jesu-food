import businessInfo from "../data/businessInfo";
import WhatsAppButton from "./WhatsAppButton";
import "./ContactSection.css";

function ContactSection({ showMap = true }) {
  return (
    <div className="contact-section">
      <div className="contact-details">
        <h3>Visit or Reach Us</h3>
        <ul className="contact-list">
          <li>
            <strong>Address:</strong> {businessInfo.address},{" "}
            {businessInfo.city}, {businessInfo.state}
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${businessInfo.phoneLink}`}>{businessInfo.phone}</a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href={`https://wa.me/${businessInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {businessInfo.phone}
            </a>
          </li>
        </ul>

        <h3>Opening Hours</h3>
        <ul className="contact-list">
          {businessInfo.openingHours.map((item) => (
            <li key={item.day}>
              <strong>{item.day}:</strong> {item.hours}
            </li>
          ))}
        </ul>

        <div className="contact-actions">
          <WhatsAppButton />
          <a
            href={businessInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Directions
          </a>
        </div>
      </div>

      {showMap && (
        <div className="contact-map">
          <iframe
            title={`${businessInfo.name} location on Google Maps`}
            src={businessInfo.googleMapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}

export default ContactSection;
