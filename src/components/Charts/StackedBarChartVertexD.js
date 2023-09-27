import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import Papa from "papaparse";
//import { SensorMockDataSummary as data } from "./data/sensor-summary-mock-data";

const SensorDataOverviewV = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/mock-sensor-data.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvString = decoder.decode(result.value);

      Papa.parse(csvString, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const transformedData = result.data.map((item, index) => ({
            id: index, // Adding a unique ID for each entry
            deviceID: item[0],
            sensorID: item[1],
            parameter: item[2],
            timestamp: item[3],
            value: item[4],
          }));

          setData(transformedData);
        },
      });
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="parameter"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      //height={400}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      //colors={{ scheme: "nivo" }}
      colors={[
        "#00008B", // Blue-500
        "#046307", // Emerald Green
        "#CC5500", // Burnt Orange
        "#653780", // Purple
        "#D19D00", // Amber
      ]}
      enableLabel={false}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sensor Values",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default SensorDataOverviewV;
