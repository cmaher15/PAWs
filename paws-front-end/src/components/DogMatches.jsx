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
  // console.log("areaDogs: ", props.areaDogs);
  // console.log("areaOwners: ", props.areaOwners);
  return props.areaDogs.map(dog => {
    let owner;
    // console.log("dog.photo_url: ", dog.photo_url);
    // console.log("dog in loop: ", dog);
    for (let areaOwner of props.areaOwners) {
      // console.log("areaOwner.thumbnail: ", areaOwner.thumbnail_photo_url);
      if (areaOwner.id === dog.owner_id) {
        owner = areaOwner;
        // console.log("matched owner: ", owner);
      }
    }
    return <main className='profilecards'><DogProfileCard dog={dog} owner={owner} /></main>
  });
};

export default DogMatches;
