export function WeatherIndex(props) {
  return (
    <div>
      <h1>All weather</h1>
      {props.weathers.map((weather) => (
        <div key={weather.id}>
          <h2>{weather.name}</h2>
          <img src={weather.url} />
          <p>Width: {weather.width}</p>
          <p>Height: {weather.height}</p>
        </div>
       ))}
    </div>
  );
}