const convertToCelsius = function(temp) {

  let CTemp;

  CTemp = (temp - 32) * 5 / 9

  return Number(CTemp.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let FTemp;

  FTemp = (temp * 9/5) +32

  return Number(FTemp.toFixed(1))
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
