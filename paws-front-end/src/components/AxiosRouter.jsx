import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersDogs from "./UsersDogs";
import DogMatches from "./DogMatches";
import FavePage from "./FavePage";
import { v4 } from "uuid";

const AxiosRouter = function (props) {
  // GET DOGS
  const [isLoadingDogs, setIsLoadingDogs] = useState(true);
  const [isLoadingOwners, setIsLoadingOwners] = useState(true);
  const [areaDogs, setAreaDogs] = useState();
  const [areaOwners, setAreaOwners] = useState();

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

  // console.log("response dogs", areaDogs);
  // console.log("response owners", areaOwners);

  if (isLoadingDogs || isLoadingOwners) {
    return (
      <div style={{ backgroundImage: "url(images/skipping-dogs.jpg)" }}>
        LOADING DOGS AND OWNERS
      </div>
    );
  }

  const renderComponent = function (urlPath, dogs, owners) {
    if (urlPath === "/my-favourites") {
      return <FavePage areaOwners={areaOwners} key={v4()}/>;
    } else if (urlPath === "/users-dogs") {
      return <UsersDogs areaDogs={dogs} areaOwners={owners} />;
    } else {
      return <DogMatches areaDogs={dogs} areaOwners={owners} />;
    }
  };

  return renderComponent(props.urlPath, areaDogs, areaOwners);
};

export default AxiosRouter;
