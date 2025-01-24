// src/container/MainComponent.js

import React, { useState, useEffect } from 'react';
import NameInput from '../components/NameInput';
import Greeting from '../components/Greeting';

function GreetingApp() {
  const [name, setName] = useState('');

  // Load name from localStorage when the app loads
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem('userName', name);
    }
  }, [name]);

  // Reset the name and localStorage
  const handleReset = () => {
    setName('');
    localStorage.removeItem('userName');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Personalized Greeting App</h1>

      {/* Pass the name state and the handleInputChange function to NameInput */}
      <NameInput name={name} onNameChange={setName} />

      {/* Pass the name state to Greeting */}
      <Greeting name={name} />

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
      >
        Reset
      </button>
    </div>
  );
}

export default GreetingApp;
