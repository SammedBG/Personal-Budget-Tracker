import React from 'react';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className={t.type}>
              <span>{t.description}</span>
              <span>{t.amount.toFixed(2)}</span>
              <span>{t.category}</span>
              <span>{t.type}</span>
              <button onClick={() => deleteTransaction(t._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;