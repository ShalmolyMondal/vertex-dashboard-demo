import React from "react";
import SensorCardComponent from "./SensorDataCard";

function SensorStatGrid() {
  return (
    <div>
      {/* Adding cards to the main dashboard */}
      <div className="flex flex-wrap bg-white py-4 px-2 mr-2 rounded-lg justify-right">
        <div className="flex flex-wrap gap-4">
          <SensorCardComponent
            title="Temperature"
            content="25°C"
            color="bg-blue-900"
          />
          <SensorCardComponent
            title="Humidity"
            content="60%"
            color="bg-green-900"
          />
          <SensorCardComponent
            title="Pressure"
            content="1013 hPa"
            color="bg-red-900"
            //style={{ width: "60px" }}
          />
          {/* Device Specs */}
          <div className="w-1/3 p-4">
            <h3 className="font-bold text-xl mb-2">Device specifications</h3>
            <p>Device Name: AM319</p>
            <p>Location: Zone 1</p>
            <p>Device Status: Online</p>
            {/* Add more specifications as needed */}
          </div>
          {/* Add more cards */}
        </div>
      </div>
    </div>
  );
}

export default SensorStatGrid;
