
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h2>Rental House Management</h2>

      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default Login;
