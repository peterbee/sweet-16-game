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
  const [selected, updateSelected] = useState(-1);
  const [mode, changeMode] = useState("normal");
  const digits = getSubNumbers(currentValue, target.toString().length - 1);

  if (currentValue === target) updateTarget(
    (p) => p + (mode === "normal" ? 16 : Math.ceil(Math.random() * p))
  );

  const changeValue = (direction = 1) => {
    const selectedValue = digits[selected];
    if (selectedValue) {
      updateCurrentValue(p => p + selectedValue * direction);
      updateSelected(-1);
    }
  }

  return (
    <div className="App">
      <div
        onClick={() => changeMode((p) => (p === "normal" ? "random" : "normal"))}
        style={{textTransform: "uppercase", position: "absolute", right: 10, top: 10}}
      >
        {mode}
      </div>
      <h3>Goal: {target}</h3>
      <h1 style={{background: "plum", border: "1px solid purple", borderWidth: "1px 0", color: "purple"}}>{currentValue}</h1>
      <div>{digits.map((v, i) => 
        <button key={i} className={selected === i ? 'selected' : ''} onClick={() => updateSelected(i)}>{v}</button>
      )}</div>
      {selected > -1 && 
      <>
        <button onClick={() => changeValue(1)}>+</button>
        <button onClick={() => changeValue(-1)}>&#8722;</button>
      </>}
    </div>
  );
}

export default App;
