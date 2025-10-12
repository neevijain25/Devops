import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-box">
        <div className="background-image"/>
          <div className="login-title">LOGIN</div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            <input
              type="text"
              placeholder="User Name"
              className="input username"
              name="username"
            />

            <input
              type="password"
              placeholder="Password"
              className="input password"
              name="password"
            />

            <input type="checkbox" id="remember" className="checkbox" />
            <label htmlFor="remember" className="remember-label">
              Remember Password
            </label>

            <button type="submit" className="btn login-btn">LOGIN</button>
            <button
              type="button"
              className="btn signup-btn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SIGN UP
            </button>
          </form>

          <div className="forgot-password">Forgot Password?</div>

          <div className="header-text">AI SMART CLASSROOM ANALYTICS</div>
        
      </div>
    </div>
  );
};

export default Desktop