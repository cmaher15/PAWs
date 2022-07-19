import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

// Helper functions
import { UserDogProfileCard } from "../helpers/UserDogProfileCard";

const UsersDogs = function (props) {
  const myDogs = [];
  props.areaDogs.map(dog => {
    if (dog.owner_id == window.localStorage.getItem("paws_id")) {
      myDogs.push(dog);
    }
  });

  const noDogs = (
    <div className="emptyuser">
      <p className="nodogs">
        It appears you don't have any registered dogs yet! Click here to add
        one!
      </p>
      <img src="images/whitedoggo.png" />
    </div>
  );

  if (myDogs.length === 0) {
    return (
      <div className="emptyuser">
        <p className="nodogs">
          It appears you don't have any registered dogs yet! Click{" "}
          <Link className="register-dog" to="/register-dog">
            here
          </Link>{" "}
          to add one! to add one!
        </p>
        <img src="images/whitedoggo.png" />
      </div>
    );
  }
  return myDogs.map(dog => {
    return <UserDogProfileCard dog={dog} key={dog.id} />;
  });
};

export default UsersDogs;
