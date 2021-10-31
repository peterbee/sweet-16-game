import './App.css';
import React, {useState} from 'react';

function getSubNumbers(num, length) {
  const digits = num.toString().split('').map(Number);
  const subLength = Math.min(length, digits.length - 1);
  if (length < 2) {
    return digits;
  }
  else {
    return [...Array(digits.length - subLength + 1).keys()].map(v => Number(digits.slice(v, v + subLength).join('')))
  }
}

function App() {
  const [target, updateTarget] = useState(16);
  const [currentValue, updateCurrentValue] = useState(1);
  const digits = getSubNumbers(currentValue, target.toString().length - 1);

  if (currentValue === target) updateTarget((p) => p + 16);

  return (
    <div className="App">
      <h3>Goal: {target}</h3>
      <h1 style={{background: "plum", border: "1px solid purple", borderWidth: "1px 0", color: "purple"}}>{currentValue}</h1>
      <h3>Add:&nbsp;
      {digits.map((v, i) => 
        <button key={i} onClick={() => updateCurrentValue(p => p + v)}>{v}</button>
      )}</h3>
      <h3>Subtract:&nbsp;
      {digits.map((v, i) => 
        <button key={i} onClick={() => updateCurrentValue(p => p - v)}>{v}</button>
      )}</h3>
    </div>
  );
}

export default App;
