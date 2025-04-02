import React from 'react';

function Summary({ income, expenses, balance }) {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Income: <span className="income">{income.toFixed(2)}</span></p>
      <p>Expenses: <span className="expense">{expenses.toFixed(2)}</span></p>
      <p>Balance: <span className={balance >= 0 ? 'income' : 'expense'}>{balance.toFixed(2)}</span></p>
    </div>
  );
}

export default Summary;