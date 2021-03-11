const range = function (start, end, step) {
  let arr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 1) {
    return arr;
  }
  for (i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));