import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import UserProfile from "./UserProfile";
import "../styles/Header.css";

const Header = function (props) {
  return (
    <div className="header-div">
      <UserProfile loggedIn={props.loggedIn} />
      <div className="dd-men"></div>
      <div className="site-title" id="paws">
        <h1 className="home">
          <Link to={"/"} onClick={() => props.setUrlPath("/")}>
            PAWs 🐾
          </Link>
        </h1>
        <span className="title-description">Pups. Awaiting. Walks.</span>
      </div>
      <span className="user-credentials">
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
          />
        )}
      </span>
    </div>
  );
};

export default Header;
