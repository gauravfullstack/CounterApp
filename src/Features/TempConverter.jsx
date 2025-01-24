import React, { useState } from 'react';

const TemperatureConverter = () => {
  // State for the input temperature and selected unit
  const [temp, setTemp] = useState('');
  const [unit, setUnit] = useState('Celsius');

  // Convert temperature based on selected unit
  const convertTemperature = () => {
    let celsius, fahrenheit, kelvin;

    if (unit === 'Celsius') {
      celsius = parseFloat(temp);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (unit === 'Fahrenheit') {
      fahrenheit = parseFloat(temp);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
    } else if (unit === 'Kelvin') {
      kelvin = parseFloat(temp);
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
    }

    return { celsius, fahrenheit, kelvin };
  };

  // Handle input change for temperature
  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  // Handle unit selection change
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const { celsius, fahrenheit, kelvin } = convertTemperature();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-4">Temperature Converter</h1>

      <div className="mb-4">
        <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">Temperature:</label>
        <input
          type="number"
          id="temperature"
          value={temp}
          onChange={handleTempChange}
          placeholder="Enter Temperature"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="unit" className="block text-sm font-medium text-gray-700">Select Unit:</label>
        <select
          id="unit"
          value={unit}
          onChange={handleUnitChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>

      {temp && (
        <div className="mt-6">
          <h2 className="text-xl font-medium">Converted Temperatures:</h2>
          <p className="mt-2 text-gray-800">{temp} {unit} is:</p>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-600">{celsius.toFixed(2)} °C (Celsius)</li>
            <li className="text-gray-600">{fahrenheit.toFixed(2)} °F (Fahrenheit)</li>
            <li className="text-gray-600">{kelvin.toFixed(2)} K (Kelvin)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
