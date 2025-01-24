// src/components/Greeting.js

import React from 'react';

function Greeting({ name }) {
  // Get greeting based on time of day
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <h2 className="text-2xl text-green-600 mb-4">
      {name ? `${getTimeBasedGreeting()}, ${name}! Welcome to the Greeting App!` : 'Enter your name to receive a personalized greeting!'}
    </h2>
  );
}

export default Greeting;
