 Food Delivery App
 
 A full-stack Food Delivery Web Application built with React.js, Node.js, Express, MongoDB, featuring user authentication, admin panel, 
 cart and Stripe payment integration. The app allows users to browse food items, place orders, and make payments online.

1.Features
 
- Responsive frontend website for browsing and ordering food.

- User authentication (Sign up / Login).

- Cart functionality and place order feature.

- Stripe payment integration for secure payments.

- Admin panel to manage food items and view orders.

- MongoDB Atlas integration for database management.

2.Tech Stack

- Frontend: React.js, React Router, Axios

- Backend: Node.js, Express.js

- Database: MongoDB Atlas

- Payment Gateway: Stripe

3.Project Structure

food-delivery-app/
│
├── frontend/          # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
├── backend/           # Node.js & Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

4.Setup & Installation

Navigate to frontend folder:
```bash
cd frontend
npm install
npm run dev
```

Navigate to backend folder:
```bash
cd backend
npm install
```
Create .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

STRIPE_SECRET_KEY=your_stripe_secret_key

JWT_SECRET=asdjKJH98sdfj2349dfSDFJ!@#your-secert-jwt

Start server:
```bash
npm run build
```
5.Usage

- Open frontend in browser: http://localhost:3000

- Browse food items, add to cart, and place orders

- Login as admin to manage food items and view orders

- Test Stripe payment integration during checkout

