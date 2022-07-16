import React, { useState, useEffect } from "react";
import axios from "axios";
import DogMatches from "./DogMatches";
import UsersDogs from "./UsersDogs";

// This component exists to fetch owners/dogs from server and pass results as
// props to usersDogs, and matchDogs
const fetchProfiles = function (props) {
  const [isLoadingDogs, setIsLoadingDogs] = useState(true);
  const [isLoadingOwners, setIsLoadingOwners] = useState(true);
  const [areaDogs, setAreaDogs] = useState();
  const [areaOwners, setAreaOwners] = useState();

  // const callSetAreaDogs = dogs => setAreaDogs(dogs);

  // Fetch dogs from server
  useEffect(() => {
    axios
      .get(`/api/dogs`)
      .then(response => {
        // callSetAreaDogs(response.data);
        setAreaDogs(response.data);
        setIsLoadingDogs(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  // Fetch owners from server
  useEffect(() => {
    axios
      .get(`/api/owners`)
      .then(response => {
        // callSetAreaDogs(response.data);
        setAreaOwners(response.data);
        setIsLoadingOwners(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  if (isLoadingDogs || isLoadingOwners) {
    // Shows loading whilst waiting for axios request (gif dog goes here)
    return <p>Loading...</p>;
  } else {
    console.log("props.urlPath: ", props.urlPath);
    return props.urlPath === "/dog-matches" ? (
      <DogMatches areaDogs={areaDogs} areaOwners={areaOwners} />
    ) : (
      <UsersDogs areaDogs={areaDogs} />
    );
  }
};

export default fetchProfiles;
