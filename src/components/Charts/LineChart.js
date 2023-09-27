import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const series = [
    {
      name: "CO2",
      data: [44, 55, 41, 64, 22, 43, 21, 33, 31, 44, 56, 45, 35],
    },
    {
      name: "Temperature",
      data: [53, 32, 33, 52, 13, 44, 32, 10, 18, 12, 30, 25],
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default LineChart;