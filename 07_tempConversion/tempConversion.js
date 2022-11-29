const convertToCelsius = function(fahren) {

  let cel=(fahren-32)*(5/9);
  return (Math.round(cel*10)/10);

};

const convertToFahrenheit = function(cel) {
  let fahren=(cel*(9/5))+32;
  return (Math.round(fahren*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
