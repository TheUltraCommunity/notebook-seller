# Notebook Seller Application

Welcome to the Notebook Seller Application! This application allows users to browse and purchase various kinds of notebooks. The backend is built using MongoDB and Express, while the frontend is developed with React and JavaScript.

## Features

- **Authentication**: Users can sign up and log in to their accounts to access additional features like adding items to their cart and making purchases.
- **Browse Notebooks**: Users can view a variety of notebooks available for sale.
- **Search**: Users can search for notebooks based on title, category, or other attributes.
- **Add to Cart**: Authenticated users can add notebooks to their shopping cart for later purchase.
- **Purchase**: Authenticated users can complete purchases using a secure payment gateway.

## Project Structure

The repository is organized into two folders:

- **backend**: Contains the server-side code built with Node.js, Express, and MongoDB. This folder handles data management, authentication, and communication with the database.
- **frontend**: Contains the client-side code built with React. This folder handles the user interface, interactions, and communication with the backend API.

## Setting Up the Project

### Backend


Fork the repository and clone it to your local machine. Then follow these steps to set up the backend:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/<your_username>/notebook-seller
   ```

2. **Navigate to the Backend Folder**:
   ```bash
   cd back-end
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the backend folder and define the following variables:
   ```env
   PORT=<port_number>
   MONGODB_URI=<mongodb_connection_string>
   JWT_SECRET=<secret_key_for_jwt>
   ```

5. **Run the Server**:
   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the Frontend Folder**:
   ```bash
   cd front-end
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the frontend folder and define the following variable:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:<backend_port>
   ```

4. **Run the Development Server**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and go to `http://localhost:3000` (or the port specified for the frontend).

## Contributors

- [Sidharth](https://github.com/psidh)

## License

This project is licensed under the [MIT License](LICENSE).
