import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="user-info">
        <p>Current Balance:</p>
        <p>User Transaction:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Sender:<br />
          <input
            type="text"
            value={sender}
            onChange={e => setSender(e.target.value)}
          />
        </label>
        <br />
        <label>
          Recipient:<br />
          <input
            type="text"
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:<br />
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
