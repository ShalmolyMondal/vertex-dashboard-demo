import React, { useState, useEffect } from "react";
import { WiDayCloudyHigh } from "weather-icons-react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "f23393878af8ba0a7d7fa78b48d054fc"; // Replace with your OpenWeatherMap API key
    const city = "Melbourne"; // Replace with your desired city

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return null; // Render nothing if data is not available yet
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const dayOfWeek = daysOfWeek[date.getDay()];

  return (
    <div className="flex items-center space-x-2">
      <div className="p-2 ">
        <WiDayCloudyHigh size={35} color="#000" />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 7a4 4 0 00-8 0m8 0a4 4 0 00-8 0m8 0h8m-4 4a8 8 0 01-16 0m16 0a8 8 0 01-16 0m16 0h16m-8 4v4m0 0h-4m4 0h4m-4 0a4 4 0 01-4-4"
          />
        </svg> */}
      </div>
      <div>
        <div className="font-bold">{weatherData.name}</div>
        <div>{dayOfWeek}</div>
        <div>{Math.round(weatherData.main.temp)}°C</div>
        <div>Humidity: {weatherData.main.humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
