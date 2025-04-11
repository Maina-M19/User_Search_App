# User Search App

A full-stack web application that allows users to perform free-text searches by first name, last name, or SSN. Built as a coding assignment, this project utilizes React for the frontend and Flask for the backend.

---

## Features

- **Search Functionality**: Perform free-text searches by first name, last name, or SSN.
- **Responsive Design**: Ensures usability across various devices and screen sizes.
- **RESTful API**: Backend API built with Flask to handle search queries.

---

## Technologies Used

- **Frontend**:
  - React
  - JavaScript
  - HTML/CSS

- **Backend**:
  - Flask
  - Python 3
  - SQLite (or another database, if specified)

---

## Project Structure

```
User_Search_App/
├── backend/
│   ├── app.py
│   └── ... (other backend files)
├── frontend_react/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
├── README.md
└── requirements.txt
```

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Python 3 installed
- Git installed

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the Flask application:
   ```bash
   python app.py
   ```
   The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend_react
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```
   The frontend will be accessible at `http://localhost:3000`.

---

## Usage

1. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

2. **Perform a search**:
   - Enter a first name, last name, or SSN into the search bar.
   - Click the "Search" button to view matching results.

---

## API Endpoints

- `GET /api/search?query=<search_term>`: Retrieve users matching the search term.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

