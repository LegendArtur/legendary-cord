import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__box">
        <div className="login__logo">
          <img
            src="logoIcon.ico"
            alt="logo"
          />
        </div>

        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
