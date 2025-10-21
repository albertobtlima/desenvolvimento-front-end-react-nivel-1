import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [wether, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=São Paulo, SP`
        );
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
        }
      } catch (erro) {
        console.error("Erro ao buscar dados da API", erro);
      }
    }

    fetchWeather();
  }, []);
  return (
    <div className="app-container">
      <SearchBar />
      {wether && (
        <>
          <h1>{wether.city}</h1>
          <WeatherCard weather={wether} />
        </>
      )}
    </div>
  );
}

export default App;
