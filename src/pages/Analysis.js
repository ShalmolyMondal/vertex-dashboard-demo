import React, { useState } from "react";
//import CO2TemperatureChart from "../components/Charts/co2-tempChart";
import ChartContainer from "../components/Charts/ChartContainer";
//import MetricContainer from "../components/Charts/MetricContainer";
//import MetricSelector from "../components/Charts/MetricSelector";
//import CO2TemperatureChartApex from "../components/Charts/co2TempApex";
//import CO2Chart from "../components/Charts/co2Chart";

// import LineChart from "../components/Charts/LineChart";

const Analysis = () => {
  // const [selectedMetrics, setSelectedMetrics] = useState([]); // Metrics Manager

  // const handleMetricChange = (selectedMetrics) => {
  //   // Add this function
  //   setSelectedMetrics(selectedMetrics);
  // };

  return (
    <div>
      <h1> Chart Type</h1>
      <ChartContainer />
      {/* <h3>CO2 and Temperature Chart</h3> */}
      {/* <MetricContainer /> */}
      {/* <CO2TemperatureChartApex /> */}
      {/* <CO2TemperatureChart /> */}
      {/* <CO2Chart /> */}
      {/* <LineChart /> */}
      {/* <MetricSelector
        selectedMetrics={selectedMetrics}
        onMetricChange={handleMetricChange}
      /> */}
    </div>
  );
};

export default Analysis;
