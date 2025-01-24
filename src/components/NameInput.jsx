// src/components/NameInput.js

import React, { useState } from 'react';

function NameInput({ name, onNameChange }) {
  const [input, setInput] = useState(name);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onNameChange(value); // Lift state to the parent
  };

  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={input}
      onChange={handleInputChange}
      className="p-3 text-lg border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default NameInput;
