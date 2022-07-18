import React, { useState, useEffect } from "react";
import "../styles/DogProfile.css";
import "../styles/ProfileSpinner.css";

// Helper functions
import { matchDogs } from "../helpers/matchDogs";

// Function takes dog object as argument, returns jsx profile card
import { DogProfileCard } from "../helpers/dogProfileCard";

const DogMatches = function (props) {
  console.log('area dogs props:', props.areaDogs)
  return props.areaDogs.map(dog => {
    let owner;
    for (let areaOwner of props.areaOwners) {
      if (areaOwner.id === dog.owner_id) {
        owner = areaOwner;
      }
    }
    return <DogProfileCard dog={dog} owner={owner} key={dog.id} />;
  });
};

export default DogMatches;
