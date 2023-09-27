import React from "react";
import SensorDataOverview from "../components/Charts/StackedBarChartNivo";
import SensorStatGrid from "../components/SensorStatGrid";
import WeatherWidget from "../components/weather";
// import DeviceStatusGrid from "../components/widgets/DeviceStatus";
// import SensorStatGrid from "../components/SensorStatGrid";
// import SensorDataOverview from "../components/Charts/StackedBarChartNivo";
//import SensorDataOverviewVertex from "../components/Charts/StackedBarChartVertexD";

const Dashboard = () => {
  return (
    <div className="py-20">
      {/* <div className="px-4 sm:px-6 lg:px-8">
          <SensorStatGrid />
        </div> */}

      <div className="flex gap-4 dark:text-black">
        {/* <div className="bg-gray-200 flex gap-8">
          <SensorStatGrid />
        </div> */}

        <div
          className="bg-white flex rounded-lg gap-4"
          style={{ height: "500px" }}
        >
          <SensorDataOverview />
        </div>

        {/* <div
        className="bg-white flex rounded-lg gap-2"
        style={{ height: "400px" }}
      >
        <SensorDataOverviewVertex />
      </div> */}
      </div>
    </div>
  );
};
export default Dashboard;
