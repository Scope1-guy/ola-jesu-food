import businessInfo from "../data/businessInfo";
import "./WhatsAppButton.css";

function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "solid",
}) {
  const text = message || businessInfo.whatsappDefaultMessage;

  const whatsappUrl = `https://wa.me/${
    businessInfo.whatsappNumber
  }?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn whatsapp-btn ${
        variant === "outline" ? "whatsapp-btn-outline" : "btn-whatsapp"
      }`}
      aria-label={`${label} (opens in a new tab)`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.2h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.08.81.82-3-.2-.31a8.24 8.24 0 0 1-1.27-4.4c0-4.55 3.71-8.26 8.28-8.26 2.21 0 4.29.86 5.85 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.23-8.27 8.23Zm4.53-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.55c.13.16 1.74 2.67 4.22 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.19.2-.58.2-1.08.14-1.19-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export default WhatsAppButton;
