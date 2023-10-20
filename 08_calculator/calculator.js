const add = function(a,b) {

return a+b
	
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  const sumArray = array.reduce((sum, current) => sum + current, 0)
  return sumArray
};

const multiply = function(array) {
  const productArray = array.reduce((product, current) => product*current, 1)
  return productArray
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let output = 1;
  for (i = a; i>0;i--) {
    output *= i
  }
  return output
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
