import axios from "axios";
import { useState, useEffect } from "react";
import { WeatherIndex } from "./WeatherIndex";

export function Content() {
  // const weathers = [
  //     {id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150},
  //     {id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300},
  //   ];

  const [weathers, setWeathers] = useState([
  {id: null,
  type: null,
  cwa: null,
  fireWeatherZone: null,
  forecast: null,
  forecastGridData: null,
  forecastHourly: null,
  forecastOffice: null,
  forecastZone: null,
  gridId: null,
  gridX: null,
  gridY: null,
  observationStations: null,
  radarStation: null,
  relativeLocation: {
    type: null,
    geometry: null,
    properties: null
  },
  timeZone: null
}]);

  const handleIndexWeathers = () => {
    console.log("handleIndexWeathers");
    axios.get("https://api.weather.gov/points/41.8781,-87.6298").then((response) => {
      console.log(response.data.properties);
      setWeathers(response.data.properties);
    });
  };

  useEffect(handleIndexWeathers, []);

  return (
    <div>
      <WeatherIndex weathers={weathers} />
    </div>
  )
}