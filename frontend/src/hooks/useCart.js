import { useState } from "react";

/**
 * useCart — manages all cart state logic.
 * Keeps components clean by centralizing add, remove, and quantity updates.
 */
export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Add a product to the cart.
   * If the product already exists, increase its quantity by 1.
   */
  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  /**
   * Increase quantity of a cart item by 1.
   */
  function increaseQty(productId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  /**
   * Decrease quantity of a cart item by 1.
   * Removes the item if quantity reaches 0.
   */
  function decreaseQty(productId) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  /**
   * Remove an item from the cart completely.
   */
  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  /**
   * Clear all items from the cart.
   */
  function resetCart() {
    setCartItems([]);
  }

  // Financial calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const TAX_RATE = 0.12;
  const DISCOUNT_RATE = 0.10;
  const tax = subtotal * TAX_RATE;
  const discount = subtotal * DISCOUNT_RATE;
  const total = subtotal + tax - discount;

  return {
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
  };
}
