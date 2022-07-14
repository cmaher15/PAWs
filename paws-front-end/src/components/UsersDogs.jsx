<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileJSX";

const UsersDogs = function () {
  const [userDogs, setUserDogs] = useState([]);

  const getUserDogs = (ownerId) => {
    // Make GET request to server for array of user's dogs
    axios
      .get(`/api/dogs/${ownerId}`)
      .then(response => {
        console.log('response in users-dogs:', response);
        return response;
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
 
    // Array sent back from the server will be the value of matchedDogs
    getUserDogs(1);
      
  }, []);


  return userDogs !== undefined
    ? userDogs.map(dog => dogProfileCard(dog))
    : "It appears that you do not have any dogs registered.";
};

export default UsersDogs;
=======
import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper functions
// Function takes dog object as argument, returns jsx profile card
import { dogProfileCard } from "../helpers/dogProfileJSX";

const UsersDogs = function () {
  const [userDogs, setUserDogs] = useState([]);

  const ownerID = {
    id: 1
  };

  const getUserDogs = async function (ownerId) {
    // Make GET request to server for array of user's dogs
    await axios.get("/api/users-dogs", ownerId).then(response => {
      return response;
    });
  };

  useEffect(() => {
    console.log("userDogs before axios: ", userDogs);
    // Array sent back from the server will be the value of matchedDogs
    getUserDogs(1)
      .then(response => {
        console.log("response within getUserDogs request: ", response);
        setUserDogs(response);
      })
      .catch(error => {
        console.log("Server request for owner's dogs failed: ", error);
      });
  }, []);

  console.log("userDogs after axios: ", userDogs);
  return userDogs.length > 0
    ? userDogs.map(dog => dogProfileCard(dog))
    : "It appears that you do not have any dogs registered.";
};

export default UsersDogs;
>>>>>>> 9eca1d5e79786b6d64d6fd8aae09ae9b9624ff0b
