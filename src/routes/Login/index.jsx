import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Header from "../../Components/Header";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password fields are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      // Redirect to / page
      navigate("/");

      setUsername("");
      setPassword("");
    } else {
      alert("Please fill in both username and password fields.");
    }
  };

  return (
    <div className="login-container">
      <Header />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
