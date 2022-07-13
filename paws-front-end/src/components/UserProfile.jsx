import React from "react";
import { Link } from "react-router-dom";
import UsersDogList from "./UserForm/UserDogList";

const UserProfile = function (props) {
  return (
    <div>
      <p>Hello {props.userName}!</p>
      <p>
        Manage your dogs <Link to={<UsersDogList />}>here</Link>
      </p>
      <p>Matched dogs: {props.matchedDogs}</p>
    </div>
  );
};

export default UserProfile;
