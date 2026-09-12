import "./CategoryCard.css";

function CategoryCard({ name, active, onSelect }) {
  return (
    <button
      type="button"
      className={`category-card ${active ? "category-card-active" : ""}`}
      onClick={onSelect}
      aria-pressed={active}
    >
      {name}
    </button>
  );
}

export default CategoryCard;
