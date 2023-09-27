import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { SensorMockDataSummary as data } from "./data/sensor-summary-mock-data";
import { DateRange } from "react-date-range";
//import TimeRangePicker from "react-time-range-picker";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const SensorDataOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (item) => {
    setDateRange([item.selection]);
  };

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };
  // const handleButtonClick = (startDate, endDate) => {
  //   setDateRange([{ startDate, endDate, key: "selection" }]);
  // };

  return (
    <div className="flex flex-wrap gap-4 items-center ml-2 mt-8">
      <button
        className="bg-amber-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDatePicker}
      >
        Date Picker
      </button>

      <button className="bg-green-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
        Time Slice Selector
      </button>

      {isOpen && (
        <div style={{ marginTop: "16px" }}>
          <DateRange
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        </div>
      )}
      {/* <div style={{ marginBottom: "16px" }}>
        <TimeRangePicker
          onChange={(value) => setTimeRange(value)}
          value={timeRange}
        />
      </div> */}
      <ResponsiveBar
        data={data}
        keys={["temperature", "co2", "PM2.5", "PM10", "TVOC"]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
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
        // borderColor={{
        //   from: "color",
        //   modifiers: [["darker", 1.6]],
        // }}
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
    </div>
  );
};
export default SensorDataOverview;
