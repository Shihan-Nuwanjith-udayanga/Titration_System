import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section id="main">
      <div id="main_div">
        <div id="image_div">
          <img src="./images/loginBackground.jpg" alt="png" />
          <img src="./images/logo.png" alt="png" />
          <h2>Welcome to Automated Titration System</h2>
        </div>
        <div id="login_form">
          <h1>Login Account</h1>
          <form onsubmit="" action="">
            <div>
              <label for="name" />
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label for="password" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit"><Link to="/Home">LOGIN</Link></button>
            <p>
              <Link to="/Register">
                If you don't have an account you Register here!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
