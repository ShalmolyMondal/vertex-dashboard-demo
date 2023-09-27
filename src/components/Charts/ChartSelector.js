//import React, { useState } from 'react';

const ChartSelector = ({ handleChartTypeChange }) => {
  const handleChange = (e) => {
    const selectedChartType = e.target.value;
    handleChartTypeChange(selectedChartType);
  };

  return (
    <div className="font-bold font-xl mb-4">
      <label className="mr-2">Select Chart Type: </label>
      <select className="border p-4 rounded" onChange={handleChange}>
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="area">Area Chart</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default ChartSelector;
