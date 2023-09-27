import React, { useState } from "react";
import ChartSelector from "./ChartSelector";
import LineChartApex from "./LineChart";
//import TempOverview from "./TempOverview";
//import BarChartApex from "./BarChartApex";
import NegetiveAreaChart from "./NegetiveAreaChart";
import MetricSelector from "./MetricSelector";
import GroupedBarChart from "./GroupedBarChart";

const ChartContainer = () => {
  const [selectedChart, setSelectedChart] = useState("line");
  const [selectedMetrics, setSelectedMetric] = useState("co2");

  const handleChartTypeChange = (chartType) => {
    setSelectedChart(chartType);
  };

  const handleMetricChange = (metric) => {
    setSelectedMetric(metric);
  };

  let chartComponent;

  switch (selectedChart) {
    case "line":
      chartComponent = <LineChartApex selectedMetrics={selectedMetrics} />;
      break;
    case "bar":
      chartComponent = <GroupedBarChart metric={selectedMetrics} />;
      break;
    case "area":
      chartComponent = <NegetiveAreaChart metric={selectedMetrics} />;
      break;
    default:
      chartComponent = null;
  }

  const chartHeight = "500px";

  return (
    <div>
      <ChartSelector handleChartTypeChange={handleChartTypeChange} />
      <MetricSelector
        selectedMetrics={selectedMetrics}
        onMetricChange={handleMetricChange}
      />
      {/* <MetricSelector handleMetricChange={handleMetricChange} /> */}
      <div style={{ height: chartHeight }}>{chartComponent}</div>;
    </div>
  );
};

export default ChartContainer;
