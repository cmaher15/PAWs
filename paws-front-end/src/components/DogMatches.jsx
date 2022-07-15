import React, { useEffect, useState } from "react";
import "../styles/DogProfile.css";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileCard";

const DogProfileTemplate = function () {
  // An array of matched dogs fetched from the server
  const [matchedDogs, setMatchedDogs] = useState([]);

  const getMatches = function (ownerId) {
    // Make GET request to server for array of matched dogs
    axios
      .get(`/api/dogs/filter/${ownerId}`)
      .then(response => {
        console.log("response in dog-matches:", response);
        return response;
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    getMatches(1);
  }, []);

  // JSX for dog profiles returned by component
  return matchedDogs !== undefined
    ? matchedDogs.map(dog => dogProfileCard(dog))
    : "There are no matches in your area at this time.";
};

export default DogProfileTemplate;
