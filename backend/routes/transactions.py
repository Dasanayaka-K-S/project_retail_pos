import json
from datetime import datetime
from flask import Blueprint, jsonify, request

transactions_bp = Blueprint("transactions", __name__)

TRANSACTIONS_FILE = "../data/transactions.json"


def read_transactions():
    """Read all saved transactions."""
    try:
        with open(TRANSACTIONS_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []


def write_transactions(transactions):
    """Save transactions to JSON file."""
    try:
        with open(TRANSACTIONS_FILE, "w", encoding="utf-8") as f:
            json.dump(transactions, f, indent=2)
        return True
    except IOError as e:
        print(f"Error writing transactions: {e}")
        return False


@transactions_bp.route("/transactions", methods=["POST"])
def create_transaction():
    """POST /api/transactions — save a completed transaction."""
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    if not data.get("cart") or len(data["cart"]) == 0:
        return jsonify({"error": "Cart is empty"}), 400

    transaction = {
        "id": f"txn_{datetime.now().strftime('%Y%m%d%H%M%S')}",
        "timestamp": datetime.now().isoformat(),
        "cart": data["cart"],
        "subtotal": data.get("subtotal", 0),
        "tax": data.get("tax", 0),
        "discount": data.get("discount", 0),
        "total": data.get("total", 0),
        "paymentMethod": data.get("paymentMethod", "Credit Card"),
    }

    # Log transaction to console as required by assignment
    print("\n--- NEW TRANSACTION ---")
    print(json.dumps(transaction, indent=2))
    print("----------------------\n")

    transactions = read_transactions()
    transactions.append(transaction)
    write_transactions(transactions)

    return jsonify({"message": "Transaction saved", "transaction": transaction}), 201
