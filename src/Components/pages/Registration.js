import React from "react";
import "../css/Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <section id="main">
      <div id="main_div">
        <div id="image_div">
          <img src="./images/registerBackground.jpg" alt="png" />
          <img src="./images/logo.png" alt="png" />
          <h2>Welcome to Automated Titration System</h2>
        </div>
        <div id="register_form">
          <h1>Register Account</h1>
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
            <div>
              <label for="confirm_password" />
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit">Create Account</button>
            <p>
              <Link to="/">Already have an account? Login here!</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
