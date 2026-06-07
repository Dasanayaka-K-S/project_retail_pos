import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import { useCart } from "../hooks/useCart";
import ProductCard from "../components/ProductCard";
import CartPanel from "../components/CartPanel";
import AddProductModal from "../components/AddProductModal";
import "./Dashboard.css";

const CATEGORIES = ["All Product", "Shoes", "Clothing", "Others Product"];

/**
 * Dashboard page — the main "Create Transaction" screen.
 * Matches the layout in dashboard.png:
 *   - Category filter tabs + search
 *   - 3-column product grid
 *   - Right-hand cart / transaction panel
 */
function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Product");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    resetCart,
    subtotal,
    tax,
    discount,
    total,
  } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Could not load products. Make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  function handleProductAdded(newProduct) {
    setProducts((prev) => [...prev, newProduct]);
  }

  // Count products per category for tab badges
  function getCategoryCount(category) {
    if (category === "All Product") return products.length;
    return products.filter((p) => p.category === category).length;
  }

  // Filter products by active category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Product" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="dashboard">
      <div className="dashboard__main">
        {/* Header */}
        <div className="dashboard__header">
          <h1 className="dashboard__page-title">Create Transaction</h1>
          <div className="dashboard__header-actions">
            <button
              className="add-product-btn"
              onClick={() => setShowModal(true)}
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Category tabs + Search */}
        <div className="dashboard__filters">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-tab ${activeCategory === cat ? "category-tab--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="category-tab__count">
                  {getCategoryCount(cat)}
                </span>
              </button>
            ))}
          </div>

          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product grid */}
        {loading && <p className="status-msg">Loading products...</p>}
        {error && <p className="status-msg status-msg--error">{error}</p>}

        {!loading && !error && (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
            {filteredProducts.length === 0 && (
              <p className="status-msg">No products found.</p>
            )}
          </div>
        )}
      </div>

      {/* Right cart panel */}
      <CartPanel
        cartItems={cartItems}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
        onReset={resetCart}
        subtotal={subtotal}
        tax={tax}
        discount={discount}
        total={total}
      />

      {/* Add product modal */}
      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onProductAdded={handleProductAdded}
      />
    </div>
  );
}

export default Dashboard;
