import React from "react";
import { useState } from "react";
import axios from "axios";

// We will show a login option on top of the header, or perhaps no header?
const HeaderLoggedOut = function (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (e) {
    // Prevent page refresh on for submit
    e.preventDefault();

    // Axios post request below, submit to /login with username + password
    const loginToServer = function (data) {
      axios.get("/api/login", data).then(
        response => {
          console.log(response);
          //Set the global "userId" state to userId returned from server
          props.setUserId(response.id);
        },
        error => {
          console.log(error);
          // Display some sort of error message to user?
          alert("Login Unsucessful");
        }
      );
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
