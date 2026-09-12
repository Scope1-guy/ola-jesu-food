import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import "./ProductCard.css";

function ProductCard({ product, showWhatsApp = true, showLearnMore = false }) {
  const enquiryMessage = `Hello, I'd like to enquire about your ${product.name}.`;

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={`${product.name} available at Mama Grace Foodstuff`}
        loading="lazy"
      />
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.unit && <p className="product-unit">{product.unit}</p>}
        {product.price && <p className="product-price">{product.price}</p>}

        {showLearnMore && (
          <Link to="/products" className="link-arrow">
            Learn More
          </Link>
        )}

        {showWhatsApp && !showLearnMore && (
          <WhatsAppButton message={enquiryMessage} label="Chat on WhatsApp" />
        )}
      </div>
    </article>
  );
}

export default ProductCard;
