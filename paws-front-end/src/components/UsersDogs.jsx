import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileCard";

const UsersDogs = function () {
  const [userDogs, setUserDogs] = useState([]);

  const getUserDogs = (ownerId) => {
    // Make GET request to server for array of user's dogs
    axios
      .get(`/api/dogs/${ownerId}`)
      .then((response) => {
        console.log("response in users-dogs axios-request:", response.data);
        return response.data;
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    setUserDogs(getUserDogs(1));
  }, []);

  console.log("usersDogs before return call: ", userDogs);

  return userDogs !== undefined
    ? userDogs.map((dog) => dogProfileCard(dog))
    : "It appears that you do not have any dogs registered.";
};

export default UsersDogs;
