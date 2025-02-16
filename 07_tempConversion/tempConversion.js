const convertToCelsius = function(tempF) {
  const c = (tempF - 32) * 5 / 9;
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  const f = (tempC * 1.8) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
