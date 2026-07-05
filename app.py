from flask import Flask, render_template, request, redirect, session, jsonify, url_for, flash, send_from_directory
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template(
        "index.html"
    )

@app.route("/admin")
def admin():
    return render_template(
        "admin/admin.html"
    )

if __name__ == "__main__":
    app.run(
        debug=True
    )