import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  function setCookie(cname, cvalue, exseconds) {
    var d = new Date();
    d.setTime(d.getTime() + exseconds * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const results = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCN_TTVDn06mJ3cNKcTswDM5oAmNIvgF1Q",
        { email: email, password: password, returnSecureToken: true }
      );
      setCookie("idToken", results.data.idToken, 3600);
      setCookie("userId", results.data.localId, 30 * 24 * 60 * 60);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      const results = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCN_TTVDn06mJ3cNKcTswDM5oAmNIvgF1Q",
        { email: email, password: password, returnSecureToken: true }
      );
      setCookie("idToken", results.data.idToken, 3600);
      setCookie("userId", results.data.localId, 30 * 24 * 60 * 60);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <div className="flex space-between">
        <button
          onClick={() => {
            signUp();
          }}
        >
          Sign Up
        </button>

        <button
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Auth;
