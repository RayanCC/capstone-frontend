import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "../Auth/auth.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password, email);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
     
      <h3>Join The Blue Faminly</h3>

      <label>UserName:</label>
      <input
        placeholder="Enter Your UserName"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password:</label>
      <input
        placeholder="Enter Strong Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <label>Email:</label>
      <input
        placeholder="example@example.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <button disabled={isLoading} className="authCTA">
        Sign Up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
