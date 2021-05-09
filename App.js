import update from "./check.js";

export const DOM = (document.componentRegistry = {
  render: (html, dom) => (dom.innerHTML = html),
});
document.nextId = 0;

const Component = () =>
  (DOM[document.nextId] = { _id: document.nextId++ }); /*DOM[0]._id = 0++*/

const App = () => {
  const app = Component(); //DOM[0]
  app.state = { input: "", option: "isPrime" };
  app.setInput = (newValue) => {
    app.state.input = newValue;
    update(app.state.input, app.state.option);
  };
  app.setOption = (newValue) => {
    app.state.option = newValue;
    update(app.state.input, app.state.option);
  };

  return `<div class="row">
            <div class="col-md-2">
              <input type="text" value="${
                app.state.input
              }" id="input" oninput="document.componentRegistry[${
    app._id
  }].setInput(this.value)">
            </div>
            <div class="col-md">
              <select name="checkNumber" id="checkNumber" onchange="document.componentRegistry[${
                app._id
              }].setOption(this.value)">
              <option value="isPrime" ${
                app.state.option === "isPrime" ? 'selected="selected"' : ""
              }>isPrime</option>
              <option value="isFibonacci" ${
                app.state.option === "isFibonacci" ? 'selected="selected"' : ""
              }>isFibonacci</option>
              </select>
            </div>
              <div class="col-md-3">
              </div>
              </div>`;
};

export default App;
