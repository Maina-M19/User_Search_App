"""
# Flask User Search API

## Description
REST API using Flask to fetch and search users from dummyjson.com and serve results from memory.

## Setup
```bash
pip install -r requirements.txt
python app.py
```

## Endpoints
- `/users/search?q=Joh`
- `/users/<id>`
- `/users/email/<email>`

## Docs
Visit: http://localhost:5000/apidocs/

## Testing
```bash
pytest test_app.py
```
"""