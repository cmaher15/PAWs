import React from "react";
import { Link } from "react-router-dom";
import UsersDogList from "./UserForm/UserDogList";
import "../styles/Header.css"

const UserProfile = function (props) {
  return (
    <div className='dropdown'>
      <button className='dropbtn'><p>Hello {props.userName}!</p></button>
      <div className='dropdown-content'>
        <button className='mainbtn'>
          <Link
            className='hovermenu'
            to={"/users-dogs"}
            onClick={() => props.setUrlPath("/users-dogs")}
          >
            <p className='dropdown-text'>Manage Your Dogs</p>
          </Link>
        </button>
        <button className='mainbtn'>
          {" "}
          <Link
          className='hovermenu'
            to={"/dog-matches"}
            onClick={() => props.setUrlPath("/dog-matches")}
          >
            <p className='dropdown-text'>View Your Matches</p>
          </Link>
        </button>
        
      </div>
    </div>
  );
};

export default UserProfile;
