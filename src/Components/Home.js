import { useEffect, useState } from "react";
import { getWeatherByCity } from "../Api/Requests";

const cities = ["London", "Kyiv", "Paris"];
const cityWeathersPromise = Promise.all(cities.map(getWeatherByCity));

function Home() {
  const [cityWeathers, setCityWeathers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    cityWeathersPromise.then((weatherArray) => setCityWeathers(weatherArray));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <ul>
        {isLoading && "Loading..."}
        {cityWeathers.map((weather) => (
          // <li key={weather.id}>{weather.weather[0].main}</li>
          <li key={weather.id}>{JSON.stringify(weather)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
