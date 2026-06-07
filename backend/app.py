from flask import Flask
from flask_cors import CORS
from routes.products import products_bp
from routes.transactions import transactions_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(products_bp, url_prefix="/api")
app.register_blueprint(transactions_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
