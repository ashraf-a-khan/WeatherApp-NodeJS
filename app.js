const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=14d11d67867bc83bb6457755bfbc741c&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2hhbmFzaHJhZjIzMTEiLCJhIjoiY2tqeG9jbjgxMDY5NjJ3azc0ejBhMmhmNyJ9.yYh4z4lm4jD1CS-ux8x2nA&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log("Latitude " + latitude);
  console.log("Longitude " + longitude);
});
