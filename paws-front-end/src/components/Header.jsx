import React from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import "../styles/Header.css"

const Header = function (props) {
  return (
    <div className="header-div">
      <h1 className="home">
        <Link to={"/"} onClick={() => props.setUrlPath("/")}>
          PAWs
        </Link>
      </h1>
      <span className="title-description">Pups. Awaiting. Walks.</span>

      {props.loggedIn ? (
        <HeaderLoggedIn
          userName={props.userName}
          setLoggedIn={props.setLoggedIn}
        />
      ) : (
        <HeaderLoggedOut setUserId={props.setUserId} />
      )}
    </div>
  );
};

export default Header;
