import React from 'react';
import Chart from 'react-apexcharts';

function AlertSummary() {
  const options = {
    labels: ['Active Alerts', 'Snoozed Alerts', 'Resolved Alerts'],
    dataLabels: {
      enabled: true,
      },
    colors: ['#FF0000', '#FFBF00', '#00B000'], // Customize colors here
    plotOptions: {
      pie: {
        donut: {
          size: '40%', // Adjust the size of the donut hole
        },
      },
    },
  };

  const series = [19, 32, 26]; // Example data, replace with actual values

  return (

    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-white shadow ring-2 ring-black ring-opacity-5 sm:rounded-lg">
          <h1 className="bg-orange-400  text-base py-1 text-white font-bold leading-6 text-gray-900">
            Alert Distribution
          </h1>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="380"
      />
            </div>
    {/* <div className='bg-white mr-4 items-center rounded-xl'> */}
      
    </div> 
  );
}

export default AlertSummary;
