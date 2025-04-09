from flask import Blueprint, jsonify, request
from services.user_service import search_users, get_user_by_id, get_user_by_email

bp = Blueprint("routes", __name__)

@bp.route("/users/search")
def search():
    query = request.args.get("q", "")
    if len(query) < 3:
        return jsonify({"error": "Please enter at least 3 characters"}), 400
    return jsonify(search_users(query))

@bp.route("/users/<int:uid>")
def user_by_id(uid):
    user = get_user_by_id(uid)
    return jsonify(user) if user else (jsonify({"error": "User not found"}), 404)

@bp.route("/users/email/<email>")
def user_by_email(email):
    user = get_user_by_email(email)
    return jsonify(user) if user else (jsonify({"error": "User not found"}), 404)