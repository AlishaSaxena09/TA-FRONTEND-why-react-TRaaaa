// import users from "./users.json";

import "./styles.css";

function Card(props) {
  var user = props.user;
  console.log(user.favoriteFruit);
  return (
    <div className="card">
      <div className="left">
        <p>{user._id}</p>
        <img src={user.picture} />
        <p>{user.balance}</p>
      </div>
      <div
        className="right"
        id={user.isActive === true ? "true-bg" : "false-bg"}
      >
        <h2>{user.name}</h2>
        <ul>
          <li>{user.company}</li>
          <li>{user.age}</li>
          <li>{user.gender}</li>
          <li>{user.eyeColor}</li>
          <li>{user.phone}</li>
          <li>{user.email}</li>
          <li>{user.favoriteFruit}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
