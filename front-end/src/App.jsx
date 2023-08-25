import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          pass,
        }),
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>{user ? user.username : "No User"}</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
