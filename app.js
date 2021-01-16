const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
console.log(process.argv);

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    // console.log("Error", error);
    // console.log("Data", data);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
