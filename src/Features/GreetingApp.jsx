import React, { useState, useEffect } from 'react';

function GreetingApp() {
  // Declare state variables
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  // Handle input change
  const handleInputChange = (event) => {
    setIsLoading(true); // Simulate loading state
    setName(event.target.value); // Directly update the name
    setTimeout(() => {
      setIsLoading(false); // Stop loading after a short delay
    }, 500); // Adjust the delay as needed
  };

  // Reset the name and localStorage
  const handleReset = () => {
    setName('');
    localStorage.removeItem('userName');
  };

  // Get greeting based on the time of day
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Personalized Greeting App</h1>

      {/* Input field for user's name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        className="p-3 text-lg border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading State */}
      {isLoading && (
        <div className="text-xl text-blue-600 mb-4">Loading...</div>
      )}

      {/* Display Greeting */}
      {name ? (
        <h2 className="text-2xl text-green-600 mb-4">{`${getTimeBasedGreeting()}, ${name}! Welcome to the Greeting App!`}</h2>
      ) : (
        <h2 className="text-xl text-gray-600 mb-4">Enter your name to receive a personalized greeting!</h2>
      )}

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
