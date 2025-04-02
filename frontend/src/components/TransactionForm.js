import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return; // Basic validation
    const transaction = {
      amount: parseFloat(amount),
      description,
      category,
      type,
    };
    addTransaction(transaction);
    setAmount('');
    setDescription('');
    setCategory('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        step="100"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Salary">Salary</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;