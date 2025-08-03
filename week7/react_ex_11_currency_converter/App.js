// src/App.js
import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConverter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // a. Increment method
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // b. Say Hello method
  const sayHello = () => {
    alert("Hello! Have a great day 🌟");
  };

  // Combined handler
  const handleIncrease = () => {
    increment();
    sayHello();
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>🎯 Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to the Event App!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleClick}>OnPress</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
