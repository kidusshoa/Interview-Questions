function composeFunctions(functions, x) {
  if (functions.length === 0) {
    return x;
  }
  let result = x;
  for (let i = functions.length - 1; i >= 0; i--) {
    result = functions[i](result);
  }
  return result;
}
// Example 1:
let functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let x1 = 4;
console.log("Output:", composeFunctions(functions1, x1)); // Output: 65
// Example 2:
let functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
let x2 = 1;
console.log("Output:", composeFunctions(functions2, x2)); // Output: 1000
// Example 3:
let functions3 = [];
let x3 = 42;
console.log("Output:", composeFunctions(functions3, x3)); // Output: 42
