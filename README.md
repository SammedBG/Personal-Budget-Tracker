# Personal Budget Tracker - MERN Stack

A full-stack app to track income and expenses using MongoDB, Express.js, React, and Node.js. Add, view, and delete transactions, with a summary of totals.

## Features
- Add transactions (amount, description, category, type)
- View transaction list
- Delete transactions
- Summary of income, expenses, and balance

## Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## Prerequisites
- Node.js & npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Setup
1. **Clone Repo**: `git clone <repository-url> && cd personal-budget-tracker`
2. **Backend**:
   - `cd backend`
   - `npm install`
   - Create `.env`: `MONGO_URI=<your-mongo-uri> PORT=5000`
   - `node index.js` (runs on `http://localhost:5000`)
3. **Frontend**:
   - `cd client`
   - `npm install`
   - `npm start` (runs on `http://localhost:3000`)
4. **Test**: Open `http://localhost:3000`, add transactions, check summary

## Usage
- **Add**: Enter amount, description, category, type, click "Add Transaction"
- **View**: See all transactions in a list
- **Delete**: Click "Delete" next to a transaction
- **Summary**: View total income, expenses, and balance

## API
- `GET /api/transactions`: Fetch transactions
- `POST /api/transactions`: Add transaction (`{ "amount": 50, "description": "Groceries", "category": "Food", "type": "expense" }`)
- `DELETE /api/transactions/:id`: Delete transaction

## Troubleshooting
- **CORS**: Ensure `cors` is in `backend/index.js`
- **MongoDB**: Check `MONGO_URI` in `.env`
- **Model Errors**: Verify `Transaction` model in `backend/models/Transaction.js`

## Enhancements
- Edit transactions
- Add charts (e.g., Chart.js)
- Filter by category

## License
MIT

