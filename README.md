# MERN Stack Blogging Platform

## Overview

This is a full-stack Online Blogging Platform built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The platform allows administrators to create and manage blog posts, while users can explore blogs, like posts, and add comments.

The application also implements secure Authentication and Authorization to ensure proper access control for admins and users.


# Features

## Admin Features

* Admin login and authentication
* Create new blog posts
* Edit existing blog posts
* Delete blog posts
* Manage blog content efficiently

## User Features

* User registration and login
* Read blog posts
* Like blog posts
* Comment on blogs
* Responsive and user-friendly interface

## Security Features

* JWT-based Authentication
* Role-based Authorization
* Protected Routes
* Password Encryption using bcrypt
* Secure API handling

# Tech Stack

## Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication & Authorization

* JSON Web Token (JWT)
* bcrypt.js


# Project Structure

```bash
blog-platform/
│
├── client/                 # Frontend React Application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Backend Node.js Application
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── README.md
└── package.json
```

# Installation

## Clone the Repository

```bash
git clone https://github.com/Pratikjais1505/Blogging-Platform.git
cd blog-platform
```


# Backend Setup

bash
cd server
npm install


Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
npm start
```


# Frontend Setup

```bash
cd client
npm install
npm start
```


# API Functionalities

## Authentication APIs

* User Registration
* User Login
* JWT Token Verification

## Blog APIs

* Create Blog (Admin Only)
* Update Blog
* Delete Blog
* Fetch All Blogs
* Fetch Single Blog

## Interaction APIs

* Like Blog
* Add Comment
* Fetch Comments

# Authentication and Authorization

The project uses JWT Authentication for secure login and session management.

* Users must log in to like and comment on blogs.
* Only admins are authorized to create, update, or delete blog posts.
* Protected routes are implemented using middleware.
* Passwords are securely encrypted using bcrypt

# Database Models

## User Model

* Name
* Email
* Password
* Role (Admin/User)

## Blog Model

* Title
* Content
* Author
* Likes
* Comments
* Created At

## Comment Model

* User
* Blog
* Comment Text
* Timestamp

# Future Improvements

* Rich text editor for blogs
* Blog categories and tags
* Search and filter functionality
* User profile section
* Image upload support
* Dark mode support

# Advantages of the Project

* Secure authentication system
* Clean and responsive UI
* Efficient CRUD operations
* Real-time user interaction through likes and comments
* Scalable MERN architecture

# Author

Pratik Kumar
B.Tech Student | MERN Stack Developer
