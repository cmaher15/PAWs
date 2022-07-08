import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderLoggedIn = function (props) {
  return (
    <>
      <p>Logged in as: {props.username}</p>
      <Link to="/home">
        <button>Logout</button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
