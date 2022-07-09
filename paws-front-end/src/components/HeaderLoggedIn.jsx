import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderLoggedIn = function (props) {
  console.log(props);
  return (
    <>
      <p>Logged in as: {props.userName}</p>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
