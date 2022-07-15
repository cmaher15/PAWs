import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Header.css"

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
        alert("Email or password fields can not be empty.");
      }

      await axios
        .post("/api/login", data, {withCredentials: true})
        .then(response => {
          console.log("server response");
          console.log(JSON.stringify(response));
          //Set the global "userId" state to userId returned from server
          props.setUserId(response.data);
          props.setLoggedIn(true);
        })
        .catch(error => {
          console.log(error.message);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          name="email"
          value={email}
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
        />
        <button>Sign In</button>
      </form>
    </>
  );
};

export default HeaderLoggedOut;
