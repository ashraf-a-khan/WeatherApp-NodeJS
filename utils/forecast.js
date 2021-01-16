const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=14d11d67867bc83bb6457755bfbc741c&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        "The temperature is " +
          body.current.temperature +
          ". It Feels Like " +
          body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
