const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
    let sumA;
    sumA = a.reduce((partialSum, a) => partialSum + a, 0);  
    return sumA;
};

const multiply = function(a) {
  let product = a.reduce((partialProduct, a) => partialProduct * a, 1);
  return product;
};

const power = function(a,b) {
	let result=1;
  for(let i=0; i<b; i++)
    result = result * a;
  return result;
};

const factorial = function(a) {
  let result=1;
  if(a == 0)
    result = 1;
  else{
    for(let i=1; i<=a; i++)
    {
      result = result * i;
      console.log(result);
    }
      
  }
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
