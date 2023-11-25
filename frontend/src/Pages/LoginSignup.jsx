import React from "react";
import "./CSS/Loginsignup.css";
import { Link } from "react-router-dom";
export default function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
