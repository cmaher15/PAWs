import React, { useEffect, useState } from "react";
import "../styles/DogProfile.css";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileJSX";

const DogProfileTemplate = function () {
  // An array of matched dogs fetched from the server
  const [matchedDogs, setMatchedDogs] = useState([]);

  const getMatches = async function (ownerId) {
    // Make GET request to server for array of matched dogs
    try {
      await axios.get("/api/dogs", ownerId).then(response => {
        return response;
      });
    } catch (err) {
      // FOR DEBUGGING
      console.log("Server request for matches failed."); // REMOVE
      console.log(err);
    }
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    getMatches().then(response => {
      setMatchedDogs(response);
    });
  }, []);

  // JSX for dog profiles returned by component
  return matchedDogs.Length > 0
    ? matchedDogs.map(dog => dogProfileCard(dog))
    : "There are no matches in your area at this time.";
};

export default DogProfileTemplate;
