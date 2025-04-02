import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summery';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.log(err));
  }, []);

  // Add a transaction
  const addTransaction = (transaction) => {
    axios.post('http://localhost:5000/api/transactions', transaction)
      .then(res => setTransactions([...transactions, res.data]))
      .catch(err => console.log(err));
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/api/transactions/${id}`)
      .then(() => setTransactions(transactions.filter(t => t._id !== id)))
      .catch(err => console.log(err));
  };

  // Calculate totals
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expenses;

  return (
    <div className="App">
      <h1>Personal Budget Tracker</h1>
      <Summary income={income} expenses={expenses} balance={balance} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;