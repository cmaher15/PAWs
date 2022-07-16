import React, { useState, useEffect } from "react";

// This component exists to fetch owners/dogs from server and pass results as
// props to usersDogs, and matchDogs
const fetchProfiles = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [areaDogs, setAreaDogs] = useState(true);

  const callSetAreaDogs = dogs => setAreaDogs(dogs);

  useEffect(() => {
    axios
      .get(`/api/dogs`)
      .then(response => {
        console.log("response in fetchAreaDogs: ", response.data);
        callSetAreaDogs(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  if (isLoading) {
    // Shows loading whilst waiting for axios request (gif dog goes here)
    return <p>Loading...</p>;
  } else {
    return;
  }
};

export default fetchProfiles;
