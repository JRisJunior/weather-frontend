export function WeatherIndex(props) {

  console.log("props:", props);

  return (
    <div>
      <h1>All weather</h1>
      {props.weathers}
    </div>
  );
}



// +       {props.photos.map((photo) => (
//   +         <div key={photo.id}>
//   +           <h2>{photo.name}</h2>
//   +           <img src={photo.url} />
//   +           <p>Width: {photo.width}</p>
//   +           <p>Height: {photo.height}</p>
//   +         </div>
//   +       ))}