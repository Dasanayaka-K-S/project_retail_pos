# 🛒 Retail POS — Point of Sale System

A full-stack Point of Sale web application built for the **Vector Vibe Full-Stack Developer Internship Assignment**.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js + Raw CSS |
| Backend | Python + Flask |
| Database | JSON File (`products.json`, `transactions.json`) |

---

## 📁 Project Structure

```
project_retail_pos/
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── components_css/
│       │   │   ├── AddProductModal.css
│       │   │   ├── CartPanel.css
│       │   │   ├── CheckoutModal.css
│       │   │   ├── Header.css
│       │   │   ├── ProductCard.css
│       │   │   └── Sidebar.css
│       │   ├── AddProductModal.jsx
│       │   ├── CartPanel.jsx
│       │   ├── CheckoutModal.jsx
│       │   ├── Header.jsx
│       │   ├── ProductCard.jsx
│       │   └── Sidebar.jsx
│       ├── hooks/
│       │   └── useCart.js
│       ├── pages/
│       │   ├── Dashboard.css
│       │   └── Dashboard.jsx
│       ├── services/
│       │   └── api.js
│       ├── App.css
│       ├── App.js
│       └── index.js
├── backend/
│   ├── routes/
│   │   ├── products.py
│   │   └── transactions.py
│   ├── app.py
│   └── requirements.txt
├── data/
│   └── products.json
└── README.md
```

---

## 🚀 Local Setup & Running

### ✅ Prerequisites

- **Node.js** v18+ → https://nodejs.org
- **Python** 3.8+ → https://python.org

---

### 1️⃣ Backend (Flask API)

Open a terminal and run:

```bash
cd project_retail_pos/backend
```

```bash
pip install -r requirements.txt
```

```bash
python app.py
```

✅ Flask server runs at: **http://localhost:5000**

---

### 2️⃣ Frontend (React App)

Open a **new terminal** and run:

```bash
cd project_retail_pos/frontend
```

```bash
npm install
```

```bash
npm start
```

✅ React app opens at: **http://localhost:3000**

---

> ⚠️ **Important:** Both terminals must be running at the same time for the app to work correctly!

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products from JSON file |
| `POST` | `/api/products` | Add a new product to inventory |
| `POST` | `/api/transactions` | Submit a completed transaction |

### POST `/api/products` — Request Body
```json
{
  "name": "Nike Air Max",
  "description": "Classic comfort shoe",
  "category": "Shoes",
  "price": 120.00,
  "stock": 50,
  "imageUrl": "https://example.com/image.png"
}
```

### POST `/api/transactions` — Request Body
```json
{
  "cart": [
    {
      "id": "prod_001",
      "name": "Nike Waffle Debut",
      "price": 80.00,
      "quantity": 2
    }
  ],
  "subtotal": 160.00,
  "tax": 19.20,
  "discount": 16.00,
  "total": 163.20,
  "paymentMethod": "Credit Card"
}
```

---

## ✨ Features

### 🖥️ Layout
- Dark sidebar navigation with SVG icons
- Professional top header with notification, settings, team avatars, New Access button, and profile
- Responsive 3-column product grid

### 🛒 Cart & Transactions
- Browse and filter products by category (All, Shoes, Clothing, Others)
- Search products by name in real-time
- Add items to cart with **+ Add to Cart** button
- Adjust quantity using **+** / **−** buttons — row total updates instantly
- Remove individual items with the trash icon
- Reset entire cart with **Reset Order** button
- Real-time financial summary:
  - Sub-Total
  - Tax (12%)
  - Discount (10% — Promo New User)
  - Total Payment
- **Continue** button submits transaction to Flask backend
- ✅ Professional **Payment Successful** popup after checkout

### ➕ Inventory Management
- Add new products via **Add Product** modal form
- New products saved to `products.json` via backend
- Form validation with error messages

---

## 🧩 Component Overview

| Component | Description |
|-----------|-------------|
| `Header.jsx` | Top navigation bar — icons, avatars, profile |
| `Sidebar.jsx` | Left dark nav panel with SVG icons |
| `ProductCard.jsx` | Individual product card with stock badge |
| `CartPanel.jsx` | Right-hand transaction detail panel |
| `CheckoutModal.jsx` | Payment success popup with transaction details |
| `AddProductModal.jsx` | Form popup to add new products |
| `useCart.js` | Custom hook — all cart state logic |
| `api.js` | All backend API call functions |

---

## 👨‍💻 Developed By

**K.S. Dasanayaka**
Full-Stack Developer Intern Assignment — Vector Vibe