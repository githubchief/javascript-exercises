const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let s=0;
  array.forEach(element => {
    s=element+s;
  });
  return s;
};

const multiply = function(array) {
  let s=1;
  array.forEach(element => {
    s=element*s;
  });
  return s;
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(a) {
  let ans=1;
  if (a==0) return 1;
  while(a!=1){
    ans=ans*a;
    a--;
  }
  return ans;
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
