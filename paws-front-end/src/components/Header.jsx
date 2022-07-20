import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import UserProfile from "./UserProfile";
import "../styles/Header.css";

const Header = function (props) {
  return (
    <div className="header-div">
      {window.localStorage.getItem("paws_id") ? (
        <p className="easteregg">
          a Threat-Level MIDNIGHT production - <i>{new Date().getFullYear()}</i>
        </p>
      ) : (
        ""
      )}

      <UserProfile loggedIn={props.loggedIn} />
      <div className="dd-men"></div>
      <div className="site-title" id="paws">
        <h3 className="home">
          <Link
            className="paws-top"
            to={"/"}
            onClick={() => props.setUrlPath("/")}
          >
            PAWs 🐾
          </Link>
        </h3>
        <span className="title-description">Pups. Awaiting. Walks.</span>
      </div>
      <span className="logged-in-creds">
        {props.loggedIn ? (
          <HeaderLoggedIn
            userName={props.userName}
            setLoggedIn={props.setLoggedIn}
          />
        ) : (
          <HeaderLoggedOut
            setUserName={props.setUserName}
            loggedIn={props.loggedIn}
            setLoggedIn={props.setLoggedIn}
            setUserId={props.setUserId}
            setUrlPath={props.setUrlPath}
          />
        )}
      </span>
    </div>
  );
};

export default Header;
