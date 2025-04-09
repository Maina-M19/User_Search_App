import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

def test_search_valid(client):
    response = client.get("/users/search?q=Joh")
    assert response.status_code == 200


def test_search_invalid(client):
    response = client.get("/users/search?q=Jo")
    assert response.status_code == 400


def test_get_user_by_id(client):
    response = client.get("/users/1")
    assert response.status_code in [200, 404]


def test_get_user_by_email(client):
    response = client.get("/users/email/karley.dach@jasper.info")
    assert response.status_code in [200, 404]