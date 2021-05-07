document.componentRegistry = {};
document.nextId = 0;

class Component {
  constructor() {
    this._id = ++document.nextId;
    document.componentRegistry[this._id] = this;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      option: "isPrime",
    };
  }

  render() {
    return `<div class="row">
              <div class="col-md-2">
                <input type="text" value="${
                  this.state.input
                }" id="input" oninput="document.componentRegistry[${
      this._id
    }].setInput(this.value)">
              </div>
              <div class="col-md">
                <select name="checkNumber" id="checkNumber" onchange="document.componentRegistry[${
                  this._id
                }].setOption(this.value)">
                  <option value="isPrime" ${
                    this.state.option === "isPrime" ? 'selected="selected"' : ""
                  }>isPrime</option>
                  <option value="isFibonacci" ${
                    this.state.option === "isFibonacci"
                      ? 'selected="selected"'
                      : ""
                  }>isFibonacci</option>
                </select>
              </div>
              <div class="col-md-3">${
                this.state.input
                  ? this.process(this.state.input, this.state.option)
                  : ""
              }</div>
            </div>`;
  }

  process(num, option) {
    return option === "isPrime" ? isPrime(num) : isFibonacci(num);
  }

  setInput(newValue) {
    this.state.input = newValue;
    update();
  }
  setOption(newValue) {
    this.state.option = newValue;
    update();
  }
}

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

// Returns true if n is a Fibinacci Number, else false
function isFibonacci(n) {
  // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
  // is a perferct square
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// This code is contributed by Rajput-Ji

const app = new App();
const update = () => (document.getElementById("app").innerHTML = app.render());
document.getElementById("app").innerHTML = app.render();
