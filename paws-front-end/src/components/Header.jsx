import React, { useEffect } from "react";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

const Header = function (props) {
  return (
    <div className="header-div">
      <h1>PAWs</h1>
      <span className="title-descrition">Pups. Awaiting. Walks.</span>

      {props.loggedIn ? (
        <HeaderLoggedIn user={props.user} />
      ) : (
        <HeaderLoggedOut />
      )}
    </div>
  );
};

export default Header;
