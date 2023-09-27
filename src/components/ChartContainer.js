import React, { useState } from "react";
import ChartSelector from "./ChartSelector";
import LineChartApex from "./LineChartApex";
//import TempOverview from "./TempOverview";
//import BarChartApex from "./BarChartApex";
import NegetiveAreaChart from "./NegetiveAreaChart";
import MetricSelector from "./MetricSelector";
import GroupedBarChart from "./GroupedBarChartApex";

const ChartContainer = () => {
  const [selectedChart, setSelectedChart] = useState("line");
  const [selectedMetric, setSelectedMetric] = useState("co2");

  const handleChartTypeChange = (chartType) => {
    setSelectedChart(chartType);
  };

  const handleMetricChange = (metric) => {
    setSelectedMetric(metric);
  };

  let chartComponent;

  switch (selectedChart) {
    case "line":
      chartComponent = <LineChartApex metric={selectedMetric} />;
      break;
    case "bar":
      chartComponent = <GroupedBarChart metric={selectedMetric} />;
      break;
    case "area":
      chartComponent = <NegetiveAreaChart metric={selectedMetric} />;
      break;
    default:
      chartComponent = null;
  }

  const chartHeight = "500px";

  return (
    <div>
      <ChartSelector handleChartTypeChange={handleChartTypeChange} />
      <MetricSelector handleMetricChange={handleMetricChange} />
      <div style={{ height: chartHeight }}>{chartComponent}</div>;
    </div>
  );
};

export default ChartContainer;