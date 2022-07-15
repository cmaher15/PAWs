import React from "react";
import { Link } from "react-router-dom";
import UsersDogList from "./UserForm/UserDogList";
import "../styles/Header.css"

const UserProfile = function (props) {
  return (
    <div className='userlinks'>
      <p>Hello {props.userName}!</p>
      <p>
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
      </p>
      <p>
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
      </p>
    </div>
  );
};

export default UserProfile;
