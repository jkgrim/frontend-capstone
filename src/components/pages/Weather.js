import { useState } from "react";

export default function Weather() {
  const [temp, setTemp] = useState("");
  const [tempHigh, setTempHigh] = useState("");
  const [tempLow, setTempLow] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = () => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.main.temp);
        setTempHigh(data.main.temp_max);
        setTempLow(data.main.temp_min);
        setIsLoading(false);
      })
      .catch((err) => console.error("Fetch Weather Error: ", err));
  };

  return (
    <div className="weather-container">
      <div className="weather-wrapper">
        <div className="weather-header">
          <h1>What's the weather?</h1>
        </div>

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="get-weather-btn" onClick={fetchWeather}>
          Get Weather!
        </button>

        {isLoading ? (
          <div style={{ color: "#fff" }}>...Loading</div>
        ) : (
          <div className="temp-wrapper">
            <div className="current-temp">Current: {temp}°F</div>
            <div className="high-temp">High: {tempHigh}°F</div>
            <div className="low-temp">Low: {tempLow}°F</div>
          </div>
        )}
      </div>
    </div>
  );
}
