# SmartEstate

This is a full-stack web application for managing and exploring real estate properties. It is built with React (frontend), Node.js (backend), and MySQL (database).

## Features

- User login and signup.
- Add, edit, delete, and view property details.
- Search and filter properties.
- Mobile-friendly design.

## Technologies Used

### Frontend
- **React.js**: For building the website's user interface.
- **Axios**: To connect the frontend with the backend.

### Backend
- **Node.js**: For running the server.
- **Express.js**: For creating API routes.
- **MySQL**: To store property and user information.
- **Sequelize**: To interact with the MySQL database.
- **dotenv**: To store secret keys and database details.

### Tools
- **Postman**: To test API endpoints.

## Prerequisites

Make sure you have:
- **Node.js** installed (version 14 or higher).
- **MySQL** installed and running.

## How to Set Up

1. **Clone the project**:
   ```bash
   git clone https://github.com/ambikad04/SmartEstate.git
   cd SmartEstate/Real-Estate-Website
   ```

2. **Install required libraries**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up the database**:
   - Create a database in MySQL (e.g., `real_estate_db`).
   - Update the `.env` file in the `backend` folder with these details:
     ```env
     DB_HOST=localhost
     DB_USER=your_mysql_username
     DB_PASSWORD=your_mysql_password
     DB_NAME=real_estate_db
     JWT_SECRET=your_secret_key
     PORT=5000
     ```

4. **Start the application**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the app**:
   - Open the frontend at `http://localhost:3000`.
   - Backend API is available at `http://localhost:5000`.

## Testing the API

You can use **Postman** to test the backend APIs. Import the provided Postman collection to test all endpoints.

## Project Structure

```
Real-Estate-Website/
│
├── backend/
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # App logic
│   ├── config/       # Config files
│   └── server.js     # Main server file
│
├── frontend/
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/ # Website components
│   │   ├── pages/      # Website pages
│   │   └── App.js      # Main React file
│   └── package.json   # Frontend dependencies
│
└── README.md
```

## Future Plans

- Add a payment system.
- Allow uploading images for properties.
- Real-time chat between users.

## Contact

For questions, contact **Ambika Das**:
- [GitHub Profile](https://github.com/ambikad04)
