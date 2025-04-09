from utils.data_loader import fetch_users

USERS = fetch_users()
# print(USERS)

def search_users(query):
    q = query.lower()
    return [u.to_dict() for u in USERS if q in u.firstName.lower() or q in u.lastName.lower() or q in u.ssn.lower()]

def get_user_by_id(uid):
    # print(uid)
    return next((u.to_dict() for u in USERS if u.id == uid), None)

def get_user_by_email(email):
    return next((u.to_dict() for u in USERS if u.email.lower() == email.lower()), None)
