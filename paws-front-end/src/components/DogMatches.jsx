import React, { useState, useEffect } from "react";
import "../styles/DogProfile.css";
import "../styles/ProfileSpinner.css";
import MatchesLoading from "./MatchesLoading";

// Helper functions
import { matchDogs } from "../helpers/matchDogs";

// Function takes dog object as argument, returns jsx profile card
import { DogProfileCard } from "../helpers/dogProfileCard";

const DogMatches = function (props) {
  let array = [];
  const renderMatches = function (dogs, owners) {
    dogs.map(dog => {
      let owner;
      for (let areaOwner of owners) {
        if (areaOwner.id === dog.owner_id) {
          owner = areaOwner;
        }
      }
      if (dog.owner_id != window.localStorage.getItem("paws_id")) {
        array.push(<DogProfileCard dog={dog} owner={owner} key={dog.id} />);
      }
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
