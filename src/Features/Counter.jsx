import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Default step value

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count > 0 ? count - step : 0);
  const reset = () => setCount(0);

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStep(value > 0 ? value : 1); // Ensure step value is always positive
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="mb-4">
        <label className="text-lg mr-2">Step:</label>
        <input
          type="number"
          className="w-20 px-2 py-1 border rounded shadow"
          value={step}
          onChange={handleStepChange}
        />
      </div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
