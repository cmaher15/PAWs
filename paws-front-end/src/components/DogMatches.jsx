import React, { useState, useEffect } from "react";
import "../styles/DogProfile.css";
import "../styles/ProfileSpinner.css";

// Helper functions
import { matchDogs } from "../helpers/matchDogs";

// Function takes dog object as argument, returns jsx profile card
import { DogProfileCard } from "../helpers/dogProfileCard";

const DogMatches = function (props) {
  let array = [];
  // console.log("area dogs props:", props.areaDogs);
  const renderMatches = function (dogs, owners) {
    dogs.map(dog => {
      let owner;
      for (let areaOwner of owners) {
        if (areaOwner.id === dog.owner_id) {
          owner = areaOwner;
        }
      }
<<<<<<< HEAD
      console.log("dog in matches: ", dog);
      console.log("owner in matches: ", owner);

=======
   
>>>>>>> 64f88bcc55b619eeb82fe2a91edef7445a635b22
      array.push(
        <DogProfileCard dog={dog} owner={owner} key={dog.id} />
      );
    });
    return array;
  };
  return (
    <div className="doggos">
      {renderMatches(props.areaDogs, props.areaOwners)}
    </div>
  );
};

export default DogMatches;
