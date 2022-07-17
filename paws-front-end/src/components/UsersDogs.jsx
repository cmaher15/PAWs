import React from "react";
import "../styles/Header.css";

// Helper functions
import { UserDogProfileCard } from "../helpers/UserDogProfileCard";

const UsersDogs = function (props) {
  console.log("UserDogs props.areaDogs", props.areaDogs);
  console.log("UsersDogs ownerId", props.userId);
  const myDogs = [];
  props.areaDogs.map(dog => {
    console.log(
      "dog.owner_id: ",
      dog.owner_id,
      " vs ",
      "props.userId: ",
      props.userId
    );
    // Use == rather than === in order to compare num with
    if (dog.owner_id == props.userId) {
      myDogs.push(dog);
    }
  });

  console.log("UsersDogs, myDogs array: ", myDogs);
  return myDogs.map(dog => {
    return <UserDogProfileCard dog={dog} key={dog.id} />;
  });
};

export default UsersDogs;
