import "./App.css";
import users from "./users.json";
import Card from "./card";
function App() {
  return (
    <div>
      {users.map((user) => {
        console.log(user);
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
