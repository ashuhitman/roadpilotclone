import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "5rem",
          }}
        >
          4<span style={{ color: "red" }}>0</span>4
        </h1>
        <h2 style={{ marginBlock: "5px 15px" }}>Page Not Found</h2>

        <p style={{ marginBottom: "30px" }}>
          Page you are looking have been deleted or does not exist
        </p>
        <Link to="/">
          <Button
            style={{
              backgroundColor: "#673de6",
              borderRadius: "10px 0px 10px",
              border: "1px solid ",

              padding: "15px 20px",
            }}
          >
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
