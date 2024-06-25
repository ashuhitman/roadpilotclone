import React from "react";
import "./Login.css";
import PageLayout from "../../../components/PageLayout/PageLayout";
import LoginForm from "../../../components/LoginForm/LoginForm";
import login from "../../../assets/images/login.png";

function Login() {
  return (
    <PageLayout title="Login" page="Login">
      <div className="login-container">
        <figure>
          <img src={login} width="100%" height="100%" />
        </figure>
        <div className="login-box">
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  );
}

export default Login;
