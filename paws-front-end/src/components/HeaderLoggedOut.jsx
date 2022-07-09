import React from "react";
import { useState } from "react";

// We will show a login option on top of the header, or perhaps no header?
const HeaderLoggedOut = function () {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = function (e) {
    // Prevent page refresh on for submit
    e.preventDefault();

    // Axios post request below, submit to /login with username + password
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
          autocomplete="off"
        />
        <input
          type="password"
          onChange={e => e.target.value}
          name="password"
          placeholder="Password"
          autocomplete="off"
        />
        <button>Sign In</button>
      </form>
    </>
  );
};

export default HeaderLoggedOut;
