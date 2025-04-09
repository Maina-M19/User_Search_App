import requests
from models.user_model import User
from config import DUMMY_API_URL

def fetch_users():
    res = requests.get(DUMMY_API_URL)
    res.raise_for_status()
    data = res.json()["users"]
    users = []
    for u in data:
        users.append(User(
            u["id"], u["firstName"], u["lastName"],
            u["email"], u.get("ssn", str(u["id"]).zfill(9)), u["image"]
        ))
    return users

# def fetch_users():
#     # Temporary hardcoded fallback users
#     return [
#         User(1, "John", "Doe", "john.doe@example.com", "123456789", "https://robohash.org/1.png"),
#         User(2, "Jane", "Smith", "jane.smith@example.com", "987654321", "https://robohash.org/2.png"),
#         User(3, "Alice", "Brown", "alice.brown@example.com", "456123789", "https://robohash.org/3.png"),
#     ]