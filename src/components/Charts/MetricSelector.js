import React from "react";

const MetricSelector = ({ selectedMetrics, onMetricChange }) => {
  const metrics = ["CO2", "Temperature", "TVOC", "PM"]; // List of available metrics

  const handleMetricChange = (metric) => {
    // Toggle the selected state of the metric
    console.log("Selected Metric:", metric);
    if (selectedMetrics.includes(metric)) {
      onMetricChange(selectedMetrics.filter((item) => item !== metric));
    } else {
      onMetricChange([...selectedMetrics, metric]);
    }
  };

  return (
    <div className="ml-3 font-bold text-sm">
      <h3>Select Metrics:</h3>
      {metrics.map((metric) => (
        <label key={metric} className="flex items-center">
          <input
            type="checkbox"
            value={metric}
            checked={selectedMetrics.includes(metric)}
            onChange={() => handleMetricChange(metric)}
            className="mr-3"
          />
          {metric}
        </label>
      ))}
    </div>
  );
};

export default MetricSelector;
