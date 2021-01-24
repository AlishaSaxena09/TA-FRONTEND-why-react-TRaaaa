function Button(props) {
  const size = props.size || "";
  const color = props.color || "";
  const type = props.type || "";
  let handleClick = props.handleClick;

  return (
    <div>
      <button className={`${size} ${color} ${type}`} onClick={handleClick}>
        Click Me !
      </button>
    </div>
  );
}

export default Button;
