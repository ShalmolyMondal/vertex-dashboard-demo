import React from "react";
import SensorDataOverview from "../components/Charts/StackedBarChartNivo";
import SensorStatGrid from "../components/SensorStatGrid";
// import DeviceStatusGrid from "../components/widgets/DeviceStatus";
// import SensorStatGrid from "../components/SensorStatGrid";
// import SensorDataOverview from "../components/Charts/StackedBarChartNivo";
//import SensorDataOverviewVertex from "../components/Charts/StackedBarChartVertexD";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 dark:text-black">
      <div className="bg-gray-200 flex gap-8">
        {/* <DeviceStatusGrid /> */}
        <SensorStatGrid />
      </div>
      <div className="bg-gray-200 flex gap-8">{/* <SensorStatGrid /> */}</div>

      {/* <SensorDataOverview /> */}
      <div
        className="bg-white flex rounded-lg gap-2"
        style={{ height: "400px" }}
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
  );
};
export default Dashboard;
