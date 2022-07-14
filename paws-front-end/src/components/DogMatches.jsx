import React, { useEffect, useState } from "react";
import "../styles/DogProfile.css";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileJSX";

const DogProfileTemplate = function () {
  // An array of matched dogs fetched from the server
  const [matchedDogs, setMatchedDogs] = useState([]);

  const getMatches = function (ownerId) {
    // Make GET request to server for array of matched dogs
    axios
      .get(`/api/dogs/filter/${ownerId}`)
      .then(response => {
        console.log('response in dog-matches:', response);
        return response;
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    getMatches(1);
      
  }, []);

  // JSX for dog profiles returned by component
<<<<<<< HEAD
  return matchedDogs !== undefined
=======
  return matchedDogs.length > 0
>>>>>>> 9eca1d5e79786b6d64d6fd8aae09ae9b9624ff0b
    ? matchedDogs.map(dog => dogProfileCard(dog))
    : "There are no matches in your area at this time.";
};

export default DogProfileTemplate;
