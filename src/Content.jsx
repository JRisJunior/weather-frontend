import { WeatherIndex } from "./WeatherIndex";

export function Content() {
  const weathers = [
      {id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150},
      {id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300},
    ];

  return (
    <div>
      <WeatherIndex weathers={weathers} />
    </div>
  )
}