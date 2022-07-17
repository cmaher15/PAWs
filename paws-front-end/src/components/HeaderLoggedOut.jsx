import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Header.css";
import "../styles/Login.css";

// We will show a login option on top of the header, or perhaps no header?
const HeaderLoggedOut = function (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (e) {
    // Prevent page refresh on for submit
    e.preventDefault();

    // Axios post request below, submit to /login with username + password
    const loginToServer = async function (data) {
      // Validate email/password
      if (data.email === "" || data.password === "") {
        return alert("Email or password fields can not be empty.");
      }

      await axios
        .post("/api/login", data, { withCredentials: true })
        .then(res => {
          console.log(JSON.stringify(res["data"]));

          // Set
          window.localStorage.setItem("paws_id", res["data"]["id"]);
          window.localStorage.setItem("paws_name", res["data"]["name"]);
          window.localStorage.setItem("paws_city", res["data"]["city"]);
          window.localStorage.setItem("paws_email", res["data"]["email"]);
          window.localStorage.setItem("paws_logged_in", "true");

          // setLoggedIn called in order to trigger App.js re-render
          props.setLoggedIn(true);
        })
        .catch(error => {
          console.log("Unsuccessful login: ", error.message);
          // Display some sort of error message to user?
          alert("Login Unsuccessful");
        });
    };

    loginToServer({
      email,
      password
    });
  };

  return (
    <>
      <form className="login-box" onSubmit={handleSubmit}>
        <input
          className="login"
          type="text"
          onChange={e => setEmail(e.target.value)}
          name="email"
          value={email}
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="login"
          type="password"
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
        />
        <button className="sign-in-btn">Sign In</button>
      </form>
    </>
  );
};

export default HeaderLoggedOut;
