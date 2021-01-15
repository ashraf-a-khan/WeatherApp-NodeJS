const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=14d11d67867bc83bb6457755bfbc741c&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        Temperature: response.body.current.temperature,
        FeelsLike: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
