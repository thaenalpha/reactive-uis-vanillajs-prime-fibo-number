document.componentRegistry = {};
document.nextId = 0;

const Component = () =>
  (document.componentRegistry[document.nextId] = { _id: document.nextId++ });

const App = () => {
  const app = Component();
  app.state = {
    input: "",
    option: "isPrime",
  };

  app.render = () => `<div class="row">
              <div class="col-md-2">
                <input type="text" value="${
                  app.state.input
                }" id="input" oninput="app.setInput(this.value)">
              </div>
              <div class="col-md">
                <select name="checkNumber" id="checkNumber" onchange="app.setOption(this.value)">
                  <option value="isPrime" ${
                    app.state.option === "isPrime" ? 'selected="selected"' : ""
                  }>isPrime</option>
                  <option value="isFibonacci" ${
                    app.state.option === "isFibonacci"
                      ? 'selected="selected"'
                      : ""
                  }>isFibonacci</option>
                </select>
              </div>
              <div class="col-md-3">${
                app.state.input
                  ? process(app.state.input, app.state.option)
                  : ""
              }</div>
            </div>`;

  const process = (num, option) =>
    option === "isPrime" ? isPrime(num) : isFibonacci(num);

  app.setInput = (newValue) => {
    app.state.input = newValue;
    update();
  };
  app.setOption = (newValue) => {
    app.state.option = newValue;
    update();
  };
  return app;
};

const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

// javascript program to check if x is a perfect square
// A utility function that returns true if x is perfect square
function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

// Returns true if n is a Fibonacci Number, else false
function isFibonacci(n) {
  // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
  // is a perfect square
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

const app = App();
const update = () => (document.getElementById("app").innerHTML = app.render());
document.getElementById("app").innerHTML = app.render();
