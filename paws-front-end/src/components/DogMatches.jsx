import React, { useEffect, useState } from "react";
import "../styles/DogProfile.css";
import axios from "axios";

export default function DogProfileTemplate() {
  const [matchedDogs, setMatchedDogs] = useState([]);
  const getMatches = async function (ownerId) {
    // Make GET request to server for array of matched dogs
    try {
      await axios.get("/api/dogs", ownerId).then(response => {
        console.log("response in getMatches axios request: ", response);
        return response;
      });
    } catch (err) {
      setMatchedDogs("No response from server");
      console.log(err);
    }
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    getMatches(1).then(response => {
      setMatchedDogs(response);
    });
  }, []);

  // JSX template for each dog profile
  const dogProfileCard = function (dog) {
    return (
      <div className="dogProfile">
        <div>
          <img className="dog" src={dog.photo_url} />
        </div>
        <span className="icons">
          <h1 className="dogName">{dog.name}</h1>
          <i
            className="fa-solid fa-heart fa-xl"
            onMouseOver={({ target }) => (target.style.color = "darkred")}
            onMouseOut={({ target }) => (target.style.color = "gray")}
          ></i>
          <i
            className="fa-solid fa-message fa-xl"
            onMouseOver={({ target }) => (target.style.color = "cadetblue")}
            onMouseOut={({ target }) => (target.style.color = "gray")}
          ></i>
        </span>
        <span className="locationInfo">
          <i className="fa-solid fa-location-dot fa-2xl"></i>
          <p className="distance">5 km away</p>
        </span>
        <span className="dogInfo">
          <h3>{dog.gender}</h3>
          <h3>{dog.breed}</h3>
          <h3>{dog.size}</h3>
        </span>
        <p className="description">{dog.description}</p>
        <span className="parent">
          <img className="userThumbnail" src={owner.thumbnail_photo_url} />
          <h4>Parent: {owner.name}</h4>
        </span>
      </div>
    );
  };

  console.log("matchedDogs: ", matchedDogs);
  console.log("matchedDogs === []: ", matchedDogs.length === 0);

  // JSX for dog profiles returned by component
  return matchedDogs.Length > 0
    ? matchedDogs.map(dog => dogProfileCard(dog))
    : "There are no matches in your area at this time.";
}
