const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = ((fahrenheitTemp - 32) * 5 / 9);
  if (Math.round(celsiusTemp) === celsiusTemp) return celsiusTemp;
  return Math.round(celsiusTemp * 10) / 10; 
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = ((celsiusTemp * 9 / 5) + 32);
  if (Math.round(fahrenheitTemp) === fahrenheitTemp) return fahrenheitTemp;
  return Math.round(fahrenheitTemp * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
