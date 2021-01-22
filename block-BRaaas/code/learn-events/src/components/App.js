import { Component } from "react";
import fruits from "./fruits";

function handleClick() {
  alert("Hello React App");
}

function click() {
  return alert(` - To learn React use https://reactjs.org
  - React and ReactDOM works together
  - Babel helps in writing JSX`);
}

// 5

function Fruits(props) {
  return (
    <div>
      {fruits.map((fruit) => (
        <button key={fruit.id} onClick={() => alert(`${fruit.id}`)}>
          {fruit.value}
        </button>
      ))}
    </div>
  );
}

function Three(props) {
  return (
    <div>
      {["Arya", "John", "Bran"].map((name) => (
        <button onClick={() => alert(`Hello ${name}`)}>{name}</button>
      ))}
    </div>
  );
}

class Name extends Component {
  render() {
    return (
      <div>
        {["Arya", "John", "Bran"].map((name) => (
          <button onClick={() => alert(`Hello ${name}`)}>{name}</button>
        ))}
      </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={click}>How can I help you?</button>
      <Three />
      <Fruits />
    </div>
  );
}

export default App;
