import { submitTransaction } from "../services/api";
import "./components_css/CartPanel.css";

/**
 * CartPanel — right-hand "Detail Transaction" panel.
 * Shows cart items with quantity controls, financial totals, and Continue button.
 *
 * @param {Array} cartItems - current cart items from useCart hook
 * @param {Function} onIncrease - increase item quantity
 * @param {Function} onDecrease - decrease item quantity
 * @param {Function} onRemove - remove item completely
 * @param {Function} onReset - clear entire cart
 * @param {number} subtotal
 * @param {number} tax
 * @param {number} discount
 * @param {number} total
 */
function CartPanel({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onReset,
  subtotal,
  tax,
  discount,
  total,
}) {
  async function handleContinue() {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      await submitTransaction({
        cart: cartItems,
        subtotal,
        tax,
        discount,
        total,
        paymentMethod: "Credit Card",
      });
      alert("Transaction completed successfully!");
      onReset();
    } catch (error) {
      alert("Failed to submit transaction. Please try again.");
    }
  }

  return (
    <aside className="cart-panel">
      <div className="cart-panel__header">
        <h2 className="cart-panel__title">Detail Transaction</h2>
        <button className="cart-panel__reset-btn" onClick={onReset}>
          🗑 Reset Order
        </button>
      </div>

      <div className="cart-panel__items">
        {cartItems.length === 0 && (
          <p className="cart-panel__empty">No items added yet.</p>
        )}

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item__image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/60x60?text=?";
              }}
            />
            <div className="cart-item__details">
              <div className="cart-item__top-row">
                <span className="cart-item__name">{item.name}</span>
                <button
                  className="cart-item__delete-btn"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  🗑
                </button>
              </div>
              <span className="cart-item__category">{item.category}</span>
              <div className="cart-item__bottom-row">
                <div className="cart-item__qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => onDecrease(item.id)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-value">
                    {String(item.quantity).padStart(2, "0")}
                  </span>
                  <button
                    className="qty-btn qty-btn--add"
                    onClick={() => onIncrease(item.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="cart-item__row-total">
                  Total ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-panel__promo">
        <span>🏷 Promo New User (10%)</span>
        <button className="promo-change-btn">Change Promo</button>
      </div>

      <div className="cart-panel__summary">
        <div className="summary-row">
          <span>Sub-Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (12%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discount</span>
          <span className="summary-discount">-${discount.toFixed(2)}</span>
        </div>
        <div className="summary-row summary-row--total">
          <span>Total Payment</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="cart-panel__payment">
        <div className="payment-method">
          <span className="payment-icon">💳</span>
          <span>Credit Card</span>
        </div>
        <button className="change-method-btn">Change Method &rsaquo;</button>
      </div>

      <button className="cart-panel__continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </aside>
  );
}

export default CartPanel;
