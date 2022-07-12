import React from "react";

const UserProfile = function (props) {
  console.log("props.matchedDogs: ", props);
  return (
    <div>
      <h3>This is the user profile page</h3>
      <p>Matched dogs: {props.matchedDogs}</p>
    </div>
  );
};

export default UserProfile;
