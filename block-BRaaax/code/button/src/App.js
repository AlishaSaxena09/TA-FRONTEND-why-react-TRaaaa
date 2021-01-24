import "./App.css";
import Button from "./button";

function App() {
  return (
    <div className="App">
      <div className="small">
        <Button
          size="small"
          color="light"
          type="primary"
          handleClick={() => alert("small-light-primary")}
        />
        <Button
          size="small"
          color="light"
          type="secondary"
          handleClick={() => alert("Small-light-secondary")}
        />
        <Button
          size="small"
          color="light"
          type="tertiary"
          handleClick={() => alert("Small-light-tertiary")}
        />
        <Button
          size="small"
          color="dark"
          type="primary"
          handleClick={() => alert("small-dark-primary")}
        />
        <Button
          size="small"
          color="dark"
          type="secondary"
          handleClick={() => alert("small-dark-secondary")}
        />
        <Button
          size="small"
          color="dark"
          type="tertiary"
          handleClick={() => alert("small-dark-tertiary")}
        />
      </div>
      <div className="medium">
        <Button
          size="medium"
          color="light"
          type="primary"
          handleClick={() => alert("medium-light-primary")}
        />
        <Button
          size="medium"
          color="light"
          type="secondary"
          handleClick={() => alert("medium-light-secondary")}
        />
        <Button
          size="medium"
          color="light"
          type="tertiary"
          handleClick={() => alert("medium-light-tertiary")}
        />
        <Button
          size="medium"
          color="dark"
          type="primary"
          handleClick={() => alert("medium-dark-primary")}
        />
        <Button
          size="medium"
          color="dark"
          type="secondary"
          handleClick={() => alert("medium-dark-secondary")}
        />
        <Button
          size="medium"
          color="dark"
          type="tertiary"
          handleClick={() => alert("medium-dark-secondary")}
        />
      </div>
      <div className="large">
        <Button
          size="large"
          color="light"
          type="primary"
          handleClick={() => alert("large-light-primary")}
        />
        <Button
          size="large"
          color="light"
          type="secondary"
          handleClick={() => alert("large-light-secondary")}
        />
        <Button
          size="large"
          color="light"
          type="tertiary"
          handleClick={() => alert("large-light-tertiary")}
        />
        <Button
          size="large"
          color="dark"
          type="primary"
          handleClick={() => alert("large-dark-primary")}
        />
        <Button
          size="large"
          color="dark"
          type="secondary"
          handleClick={() => alert("large-dark-secondary")}
        />
        <Button
          size="large"
          color="dark"
          type="tertiary"
          handleClick={() => alert("large-dark-tertiary")}
        />
      </div>
    </div>
  );
}

export default App;
