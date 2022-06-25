const API_KEY = `0af48ebc9b41ee4578f657f90c4d01c2`;

export async function getWeatherByCity(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  );
  return response.ok ? response.json() : undefined;
}
