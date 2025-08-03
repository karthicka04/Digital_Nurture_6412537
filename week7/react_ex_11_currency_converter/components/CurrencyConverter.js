
import React, { useState } from 'react';
import '../App.css';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid number in INR");
      return;
    }
    const converted = (rupees / 90).toFixed(2); 
    setEuro(converted);
  };

  return (
    <div className="convertor-box">
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in ₹:
          <input
            type="text"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount in €: {euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
