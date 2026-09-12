import WhatsAppButton from "./WhatsAppButton";
import "./WhatsAppCTA.css";

function WhatsAppCTA() {
  return (
    <section className="whatsapp-cta">
      <div className="container whatsapp-cta-inner">
        <p className="whatsapp-cta-text">
          Need to make an enquiry or ask a question? Click the button below to
          chat with us on WhatsApp.
        </p>
        <WhatsAppButton variant="outline" />
      </div>
    </section>
  );
}

export default WhatsAppCTA;
