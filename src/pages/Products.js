import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import businessInfo from "../data/businessInfo";
import products, { categories } from "../data/products";
import "./Products.css";

const ALL = "All";

function Products() {
  useEffect(() => {
    document.title = `Our Products | ${businessInfo.name}`;
  }, []);

  // Track which category the visitor has selected. Starts on "All".
  const [activeCategory, setActiveCategory] = useState(ALL);

  const visibleProducts =
    activeCategory === ALL
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="section">
      <div className="container">
        <h1>Our Products</h1>
        <p className="section-intro">
          Browse everything {businessInfo.name} has in stock. Tap "Chat on
          WhatsApp" on any item to ask about price, quantity or availability.
        </p>

        <div className="category-filter" role="group" aria-label="Filter products by category">
          <CategoryCard
            name={ALL}
            active={activeCategory === ALL}
            onSelect={() => setActiveCategory(ALL)}
          />
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              active={activeCategory === category}
              onSelect={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found in this category yet.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
