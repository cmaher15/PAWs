import React from "react";
import "../styles/Header.css";

// Helper functions
import { UserDogProfileCard } from "../helpers/UserDogProfileCard";

const UsersDogs = function (props) {
  // console.log("UserDogs props.areaDogs", props.areaDogs);
  // console.log("UsersDogs ownerId", props.userId);
  const myDogs = [];
  props.areaDogs.map(dog => {
    if (dog.owner_id == window.localStorage.getItem("paws_id")) {
      myDogs.push(dog);
    }
  });

  return myDogs.map(dog => {
    return <UserDogProfileCard dog={dog} key={dog.id} />;
  });
};

export default UsersDogs;
