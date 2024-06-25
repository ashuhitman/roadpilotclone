import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/Button/Button";

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-header">
        <h3> Sign In Your Account</h3>
        <p>
          Please input your username and password and login to your account to
          get access to your dashboard.
        </p>
      </div>
      <form className="form-body">
        <div className="input-group">
          <p>Username or Email</p>
          <input type="text" />
        </div>
        <div className="input-group">
          <p>Username or Email</p>
          <input type="text" />
        </div>
        <div className="input-group">
          <div>
            <input type="checkbox" /> Remember me
          </div>
          <Link to="/user/password/reset" style={{ color: "#f7c602" }}>
            Forgot your password?
          </Link>
        </div>
        <div className="input-group">
          <Button>
            Sign In <FaArrowRight />
          </Button>
        </div>
        <div className="input-group">
          <span>
            Don't have any account?{" "}
            <Link to="" style={{ color: "#f7c602" }}>
              Create Account
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
