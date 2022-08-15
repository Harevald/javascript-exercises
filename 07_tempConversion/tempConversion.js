const ftoc = function(temperature) {
    temperature = (temperature-32)*(5/9);
    if(temperature==Math.round(temperature)){
      return temperature;
    }
    else{
      temperature = parseFloat(temperature.toFixed(1));
      return temperature;
    }
    
};

const ctof = function(temperature) {
  temperature = temperature * (9/5) + 32;
  if(temperature==Math.round(temperature)){
    return temperature;
  }
  else{
    temperature = parseFloat(temperature.toFixed(1));
    return temperature;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
