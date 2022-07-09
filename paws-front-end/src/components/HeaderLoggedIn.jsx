import React from "react";
import { Link } from "react-router-dom";

const HeaderLoggedIn = function (props) {
  return (
    <>
      <p>Logged in as: {props.userName}</p>
      <Link to="/">
        <button onClick={() => props.setLoggedIn(false)}>Logout</button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
