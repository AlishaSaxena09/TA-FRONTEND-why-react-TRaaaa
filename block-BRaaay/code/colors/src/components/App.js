import colors from "./colors.json";
import Color from "./Color";
import "./style.css";

function App() {
  return (
    <div className="App">
      {Object.keys(colors).map((colorName, index) => {
        const colorShades = colors[colorName];
        return (
          <Color
            key={colorName}
            colorName={colorName}
            colorShades={colorShades}
          />
        );
      })}
    </div>
  );
}

export default App;
