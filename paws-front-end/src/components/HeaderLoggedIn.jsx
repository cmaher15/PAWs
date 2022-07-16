import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const HeaderLoggedIn = function (props) {
  return (
    <>
      <p className="logged-in">Logged in as: {props.userName}</p>
      <Link to="/">
        <button className="logout" onClick={() => props.setLoggedIn(false)}>
          Logout
        </button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
