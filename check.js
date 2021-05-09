import { DOM } from "./App.js";

const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

// A utility function that returns true if x is perfect square
function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

function isFibonacci(n) {
  // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
  // is a perfect square
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

const update = (input, option) => {
  const process = (num, option) =>
    option === "isPrime" ? isPrime(num) : isFibonacci(num);

  DOM.render(
    input ? process(input, option) : "",
    document.querySelector(".col-md-3")
  );
};

export default update;
