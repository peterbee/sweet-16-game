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
      <h1>Goal: {target}</h1>
      <div>{currentValue}</div>
      <h3>Add:</h3>
      {digits.map((v, i) => 
        <button key={i} onClick={() => updateCurrentValue(p => p + v)}>{v}</button>
      )}
      <h3>Subtract:</h3>
      {digits.map((v, i) => 
        <button key={i} onClick={() => updateCurrentValue(p => p - v)}>{v}</button>
      )}
    </div>
  );
}

export default App;
