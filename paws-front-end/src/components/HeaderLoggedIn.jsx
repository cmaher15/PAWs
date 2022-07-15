import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"
import UserProfile from "./UserProfile";

const HeaderLoggedIn = function (props) {
  return (
    <>
        <UserProfile />
      <p className='logged-in'>Logged in as: {props.userName}</p>
      <Link to="/">
        <button className='logout' onClick={() => props.setLoggedIn(false)}>Logout</button>
      </Link>
    </>
  );
};

export default HeaderLoggedIn;
