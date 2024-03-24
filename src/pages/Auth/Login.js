import { useState } from "react";
import { useLogin } from '../../hooks/useLogin';
import '../Auth/auth.scss';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username,password)
  };

  return (
  <div>
    <form className="login" onSubmit={handleSubmit}>
    
     <h3>Login</h3>
      <label>UserName:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} className="authCTA">Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
   </div>
  );
};

export default Login;
