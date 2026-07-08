from flask import Flask, render_template, request, redirect, session, jsonify, url_for, flash, send_from_directory
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

ENV_ADMIN_LOGIN = os.getenv("ADMIN_LOGIN")
ENV_ADMIN_PASS = os.getenv("ADMIN_PASS")

@app.route("/")
def index():
    return render_template(
        "index.html"
    )

@app.route("/admin", methods=['GET', 'POST'])
def admin():
    return render_template(
        "admin/admin.html"
    )

@app.route('/admin-login', methods=['POST'])
def admin_login():
    data = request.get_json()
    
    user_login = data.get('login')
    user_pass = data.get('password')
    
    # Verify credentials securely hidden from the client
    if user_login == ENV_ADMIN_LOGIN and user_pass == ENV_ADMIN_PASS:
        return jsonify({"success": True, "message": "Access Granted"}), 200
    else:
        return jsonify({"success": False, "message": "Invalid Credentials"}), 401

if __name__ == "__main__":
    app.run(
        debug=True
    )