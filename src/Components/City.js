import { useState } from "react";
import { getWeatherByCity } from "../Api/Requests";
import NotFound from "./NotFound";

export default function City() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  function handleClick() {
    getWeatherByCity(city).then(setWeather);
  }

  return (
    <div>
      <input
        title="Write something..."
        onChange={(event) => {
          console.log(event.target.value);
          return setCity(event.target.value);
        }}
      />
      <button title="Click to find smth" onClick={handleClick} />
      {weather ? (
        <div>
          <p>{weather && weather?.weather?.main}</p>
        </div>
      ) : (
        <NotFound title={city} />
      )}
    </div>
  );
}
