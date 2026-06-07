const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

/**
 * Fetch all products from the backend.
 * @returns {Promise<Array>} list of product objects
 */
export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("fetchProducts error:", error);
    throw error;
  }
}

/**
 * Add a new product to the inventory.
 * @param {Object} productData - product fields
 * @returns {Promise<Object>} the created product
 */
export async function addProduct(productData) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Failed to add product");
    }
    return await response.json();
  } catch (error) {
    console.error("addProduct error:", error);
    throw error;
  }
}

/**
 * Submit a completed transaction to the backend.
 * @param {Object} transactionData - cart, totals, payment method
 * @returns {Promise<Object>} saved transaction response
 */
export async function submitTransaction(transactionData) {
  try {
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Failed to submit transaction");
    }
    return await response.json();
  } catch (error) {
    console.error("submitTransaction error:", error);
    throw error;
  }
}
