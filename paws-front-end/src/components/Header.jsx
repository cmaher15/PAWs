import React from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import "../styles/Header.css"
import UserProfile from "./UserProfile";

const Header = function (props) {
  return (
    <div className="header-div">
      <div className="dd-men">
      </div>
    <span className="site-title">
      <h1 className="home">
        <Link to={"/"} onClick={() => props.setUrlPath("/")}>
          PAWs
        </Link>
      </h1>
      <span className="title-description">Pups. Awaiting. Walks.</span>
    </span>
    <span className='user-credentials'>
      {props.loggedIn ? (
        <HeaderLoggedIn
          userName={props.userName}
          setLoggedIn={props.setLoggedIn}
          
        />
      ) : (
        <HeaderLoggedOut setUserId={props.setUserId} setLoggedIn={props.setLoggedIn} />
      )}
      </span>
    </div>
  );
};

export default Header;
