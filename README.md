# 🛒 Retail POS — Point of Sale System

A full-stack Point of Sale web application built for the Vector Vibe Internship Assignment.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js + Raw CSS |
| Backend | Python + Flask |
| Database | JSON File |

---

## 📁 Project Structure

```
project_retail_pos/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── components_css/
│   │   │   │   ├── AddProductModal.css
│   │   │   │   ├── CartPanel.css
│   │   │   │   ├── ProductCard.css
│   │   │   │   └── Sidebar.css
│   │   │   ├── AddProductModal.jsx
│   │   │   ├── CartPanel.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── hooks/
│   │   │   └── useCart.js
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── routes/
│       ├── products.py
│       └── transactions.py
├── data/
│   └── products.json
└── README.md
```

---

## 🚀 Local Setup & Running

### Prerequisites
- Node.js v18+ — https://nodejs.org
- Python 3.8+ — https://python.org

---

### 1️⃣ Backend (Flask)

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

✅ Flask will run at: **http://localhost:5000**

---

### 2️⃣ Frontend (React)

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

✅ React will run at: **http://localhost:3000**

---

> ⚠️ **Important:** Both terminals must be running at the same time!

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add a new product |
| POST | `/api/transactions` | Submit a transaction |

### POST /api/products — Request Body
```json
{
  "name": "Nike Air Max",
  "description": "Classic comfort shoe",
  "category": "Shoes",
  "price": 120.00,
  "stock": 50,
  "imageUrl": "https://..."
}
```

### POST /api/transactions — Request Body
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

- 📦 Browse products in a 3-column grid
- 🔍 Search and filter products by category
- 🛒 Add items to cart with one click
- ➕➖ Adjust quantity with + / - buttons
- 🗑️ Remove items from cart
- 💰 Real-time financial summary (Sub-Total, Tax 12%, Discount 10%, Total)
- ➕ Add new products via modal form
- ✅ Submit completed transactions to backend

---

## 👨‍💻 Developed By

Internship Practical Assignment — Vector Vibe