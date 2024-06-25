import React from "react";
import "./ResetPassword.css";
import Button from "../../components/Button/Button";
import PageLayout from "../../components/PageLayout/PageLayout";

function ResetPassword() {
  return (
    <PageLayout title="Account Recovery">
      <div className="reset-form">
        <div className="reset-form__header">
          <h2>Account Recovery</h2>
          <p>
            To recover your account please provide your email or username to
            find your account.
          </p>
        </div>
        <form>
          <div className="input-group">
            <p>Email or Username</p>
            <input type="text" />
          </div>
          <div className="input-group">
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}

export default ResetPassword;
