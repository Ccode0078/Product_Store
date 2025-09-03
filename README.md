# Product Store 🛒

A modern, full-stack e-commerce application built with the MERN stack, featuring a clean user interface and robust backend functionality for product management.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?logo=mongodb)

## 🌟 Features

- **Product Management**: Create, read, update, and delete products with ease
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Instant product updates without page refreshes
- **Modern UI**: Clean and intuitive user interface
- **RESTful API**: Well-structured backend API endpoints
- **Database Integration**: Efficient data storage and retrieval with MongoDB

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling library

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ccode0078/Product_Store.git
   cd Product_Store
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Start the application**
   
   Backend (from backend directory):
   ```bash
   npm start
   ```
   
   Frontend (from frontend directory):
   ```bash
   npm start
   ```

6. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser



## 🏗️ Project Structure

```
Product_Store/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
└── README.md
```

## 🔥 Key Highlights

- **Full CRUD Operations**: Complete product lifecycle management
- **Modern Development Practices**: Clean code architecture and best practices
- **Scalable Design**: Built with growth and maintainability in mind
- **User-Centric**: Intuitive interface focused on user experience
- **Performance Optimized**: Efficient data handling and smooth interactions

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch single product |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update existing product |
| DELETE | `/api/products/:id` | Delete product |

## 💡 What I Learned

This project demonstrates proficiency in:

- **Full-stack Development**: End-to-end application development
- **Modern JavaScript**: ES6+ features and best practices
- **React Ecosystem**: Component-based architecture and state management
- **Backend Development**: RESTful API design and implementation
- **Database Design**: Schema design and data modeling
- **Problem Solving**: Implementing CRUD operations and user interactions

## 🎯 Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Payment integration
- Product categories and filtering
- Image upload capabilities
- Advanced search functionality

---

⭐ **If you found this project interesting, please consider giving it a star!**
