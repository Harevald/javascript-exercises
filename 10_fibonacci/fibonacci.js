const fibonacci = function (n) {
    n = Number(n);
    if(n>=0)
  {
     let sum = Array(n);
  sum[0] = 1;
  sum[1] = 1;
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    for (let i = 2; i < n; i++) {
      sum[i] = sum[i - 1] + sum[i - 2];
    }
    return sum[n-1];
  }
  }
  else return ("OOPS");
   
};
// Do not edit below this line
module.exports = fibonacci;
