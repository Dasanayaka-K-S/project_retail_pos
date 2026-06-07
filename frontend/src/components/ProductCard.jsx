import "./components_css/ProductCard.css";

/**
 * ProductCard — displays a single product in the browsing grid.
 * Matches the card layout in dashboard.png with stock badge and Add to Cart button.
 *
 * @param {Object} product - product data object
 * @param {Function} onAddToCart - callback when user clicks Add to Cart
 */
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <span className="product-card__stock-badge">{product.stock} Stock</span>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/200x160?text=No+Image";
          }}
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>

        <button
          className="product-card__add-btn"
          onClick={() => onAddToCart(product)}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
