import React from "react";
import { Link } from "react-router-dom";
import UsersDogList from "./UserForm/UserDogList";
import "../styles/Header.css"

const UserProfile = function (props) {
  return (
    <div className='dropdown'>
      <button className='dropbtn'><p>Hello {props.userName}!</p></button>
      <div className='dropdown-content'>
        Manage your dogs{" "}
        <button className='mainbtn'>
          <Link
            className='mainpage'
            to={"/users-dogs"}
            onClick={() => props.setUrlPath("/users-dogs")}
          >
            Here
          </Link>
        </button>
        View your{" "}
        <button className='mainbtn'>
          {" "}
          <Link
          className='mainpage'
            to={"/dog-matches"}
            onClick={() => props.setUrlPath("/dog-matches")}
          >
            Matches
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
