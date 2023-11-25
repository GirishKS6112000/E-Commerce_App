import React from "react";
import "./CSS/Loginsignup.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Dont't have an account?{" "}
          <Link to="/signup">
            <span>Create Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
