import React from "react";
import "../styles/DogProfile.css";

// Helper functions
import { matchDogs } from "../helpers/matchDogs";

// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileCard";

const DogMatches = function (props) {
  // Sort through array of dogs for matches with current dog;
  const matchedDogs = matchDogs(props.areaDogs, dog);

  // JSX for dog profiles returned by component
  return matchedDogs !== undefined
    ? matchedDogs.map(dog => dogProfileCard(dog))
    : "There are no matches in your area at this time.";
};

export default DogMatches;
