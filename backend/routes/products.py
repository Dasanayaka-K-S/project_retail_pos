import json
import uuid
from flask import Blueprint, jsonify, request

products_bp = Blueprint("products", __name__)

DATA_FILE = "../data/products.json"


def read_products():
    """Read all products from the JSON file."""
    try:
        with open(DATA_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading products: {e}")
        return []


def write_products(products):
    """Write products list back to the JSON file."""
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(products, f, indent=2)
        return True
    except IOError as e:
        print(f"Error writing products: {e}")
        return False


@products_bp.route("/products", methods=["GET"])
def get_products():
    """GET /api/products — return all products."""
    products = read_products()
    return jsonify(products), 200


@products_bp.route("/products", methods=["POST"])
def add_product():
    """POST /api/products — add a new product to inventory."""
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    required_fields = ["name", "description", "category", "price", "stock"]
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    new_product = {
        "id": f"prod_{uuid.uuid4().hex[:6]}",
        "name": data["name"],
        "description": data["description"],
        "category": data["category"],
        "price": float(data["price"]),
        "stock": int(data["stock"]),
        "imageUrl": data.get("imageUrl", ""),
    }

    products = read_products()
    products.append(new_product)

    if not write_products(products):
        return jsonify({"error": "Failed to save product"}), 500

    return jsonify(new_product), 201
