import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DogProfile.css";

// Helper functions
import { matchDogs } from "../helpers/matchDogs";

// Function takes dog object as argument, returns jsx profile card
import { DogProfileCard } from "../helpers/dogProfileCard";

const DogMatches = function (props) {
  // GET FROM SERVER, DOGS IN THE LOCAL AREA
  // const [isLoading, setIsLoading] = useState(true);
  // const [areaDogs, setAreaDogs] = useState(true);

  // const callSetAreaDogs = dogs => setAreaDogs(dogs);

  // useEffect(() => {
  //   axios
  //     .get(`/api/dogs`)
  //     .then(response => {
  //       console.log("response in fetchAreaDogs: ", response.data);
  //       callSetAreaDogs(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => console.log("Error fetching dogs from server: ", error));
  // }, []);

  // if (isLoading) {
  //   // Shows loading whilst waiting for axios request (gif dog goes here)
  //   return <p>Loading...</p>;
  // } else {
  // return areaDogs.map(dog => <DogProfileCard dog={dog} />);
  // }
  return props.areaDogs.map(dog => <DogProfileCard dog={dog} />);
};

export default DogMatches;
