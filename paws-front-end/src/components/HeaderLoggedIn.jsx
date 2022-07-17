import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const HeaderLoggedIn = function (props) {
  return (
    <>
      <p className="logged-in">
        Logged in as: {window.localStorage.getItem("paws_name")}
      </p>
      <Link to="/">
        <button
          className="logout"
          onClick={() => {
            // Clear variables from client local storage
            window.localStorage.clear();
            props.setLoggedIn(false);
          }}
        >
          Logout
        </button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
