import React, { useState, useEffect } from "react";
import axios from "axios";
import DogMatches from "./DogMatches";
import UsersDogs from "./UsersDogs";

// This component exists to fetch owners/dogs from server and pass results as
// props to usersDogs, and matchDogs
const fetchProfiles = function (props) {
  const [isLoading, setIsLoading] = useState(true);
  const [areaDogs, setAreaDogs] = useState(true);

  const callSetAreaDogs = dogs => setAreaDogs(dogs);

  useEffect(() => {
    axios
      .get(`/api/dogs`)
      .then(response => {
        callSetAreaDogs(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  if (isLoading) {
    // Shows loading whilst waiting for axios request (gif dog goes here)
    return <p>Loading...</p>;
  } else {
    console.log("props.urlPath: ", props.urlPath);
    return props.urlPath === "/dog-matches" ? (
      <DogMatches areaDogs={areaDogs} />
    ) : (
      <UsersDogs areaDogs={areaDogs} />
    );
  }
};

export default fetchProfiles;
