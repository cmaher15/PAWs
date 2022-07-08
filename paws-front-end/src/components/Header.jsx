import React, { useEffect } from "react";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

const Header = function (props) {
  return <>{props.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}</>;
};

export default Header;
