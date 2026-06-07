import { useState } from "react";
import { addProduct } from "../services/api";
import "./components_css/AddProductModal.css";

/**
 * AddProductModal — slide-over form for adding a new product to inventory.
 * Satisfies the "Interactive Form State" requirement from the assignment.
 *
 * @param {boolean} isOpen - controls visibility
 * @param {Function} onClose - closes the modal
 * @param {Function} onProductAdded - callback with the new product object
 */
function AddProductModal({ isOpen, onClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Shoes",
    price: "",
    stock: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.price || !formData.stock) {
      setError("Name, price, and stock are required.");
      return;
    }

    setLoading(true);
    try {
      const newProduct = await addProduct({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      });
      onProductAdded(newProduct);
      setFormData({
        name: "",
        description: "",
        category: "Shoes",
        price: "",
        stock: "",
        imageUrl: "",
      });
      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">Add New Product</h2>
          <button className="modal__close-btn" onClick={onClose}>✕</button>
        </div>

        {error && <p className="modal__error">{error}</p>}

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Product Name *</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Nike Air Max"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input form-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short product description"
              rows={2}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-input"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Shoes</option>
                <option>Clothing</option>
                <option>Others Product</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Price ($) *</label>
              <input
                className="form-input"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Stock *</label>
              <input
                className="form-input"
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              className="form-input"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="modal__actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
