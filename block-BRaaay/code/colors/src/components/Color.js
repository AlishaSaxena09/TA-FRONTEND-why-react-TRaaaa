import ColorShade from "./ColorShade";

function Color(props) {
  var colorShades = props.colorShades;
  console.log(typeof colorShades);
  const colorName = props.colorName;
  return (
    <div className="color-container">
      <h3>{colorName}</h3>
      <div className="color-shades-container">
        {Array.isArray(colorShades) ? (
          colorShades.map((colorShade, index) => (
            <ColorShade
              colorShade={colorShade}
              key={colorShade}
              index={index}
            />
          ))
        ) : (
          <ColorShade colorShade={colorShades} index={1} />
        )}
      </div>
    </div>
  );
}

export default Color;
