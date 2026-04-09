const convertToCelsius = function(fahrenheit) {
  const result = (((fahrenheit - 32)*5)/9);
  return Math.round(result * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  const result = (celsius * 1.8) + 32;
  return Math.round(result * 10) / 10
};
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
