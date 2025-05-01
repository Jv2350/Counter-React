import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  const addValue = () => {
    if (count < 100) setCount(count + 1);
    else alert("Maximum limit reached! Count cannot go above 100.");
  };

  const removeValue = () => {
    if (count > 0) setCount(count - 1);
    else alert("Minimum limit reached! Count cannot go below 0.");
  };

  const resetValue = () => {
    setCount(10);
  };

  const halfValue = () => {
    const newValue = count / 2;
    if (newValue < 0) {
      setCount(0);
      alert("Minimum limit reached! Count cannot go below 0.");
    } else setCount(newValue);
  };

  const doubleValue = () => {
    const newValue = count * 2;
    if (newValue > 100) {
      setCount(100);
      alert("Maximum limit reached! Count cannot go above 100.");
    } else setCount(newValue);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Simple Counter</h1>
      <h2 className="text-2xl font-semibold mb-4">Counter Value: {count}</h2>

      <div className="gap-4 flex flex-wrap justify-center">
        <button onClick={addValue} disabled={count >= 100}>
          Add Value
        </button>
        <button onClick={removeValue} disabled={count <= 0}>
          Remove Value
        </button>
        <button onClick={resetValue}>Reset Value</button>
        <button onClick={halfValue}>Half Value</button>
        <button onClick={doubleValue} disabled={count >= 100}>
          Double Value
        </button>
      </div>
    </>
  );
}

export default App;
