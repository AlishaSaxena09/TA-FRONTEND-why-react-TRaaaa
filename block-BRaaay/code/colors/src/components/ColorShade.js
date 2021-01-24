import React from "react";

function ColorShade(props) {
  return (
    <div className="color-shade">
      <div
        className="color-shade-preview"
        style={{ backgroundColor: props.colorShade }}
      ></div>
      <div className="color-shade-description">
        <span className="color-number">
          {" "}
          {props.index === 0 ? 50 : props.index * 100}
        </span>
        <span>{props.colorShade.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default ColorShade;
