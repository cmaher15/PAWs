import React, { useState } from "react";
import "../styles/DogProfile.css";
import "../styles/ProfileSpinner.css";
import Chat from "../Chat";
import Favourites from "../components/Favourites";
import axios from "axios";

//JSX template for each dog profile

const DogProfileCard = function (props) {
  const [dog, setDog] = useState(props.dog);
  const [owner, setOwner] = useState(props.owner);
  const [isShown, setIsShown] = useState(false);
  // console.log("dog in JSX: ", dog);
  // console.log("owner in JSX: ", owner);
  console.log("favourite: ", props.favourite);

  const handleChat = event => {
    setIsShown(current => !current);
  };

  return (
    <div className="dog-container">
      <div className="dogProfile">
        <div>
          <img className="dog" src={dog.photo_url} />
        </div>
        <span className="icons">
          <h2 className="dogName">{dog.name}</h2>
          <Favourites dog_id={dog.id} favourite={props.favourite} />
          <button className="sendChatBtn" onClick={handleChat}>
            <i
              className="fa-solid fa-message fa-xl"
              onMouseOver={({ target }) => (target.style.color = "cadetblue")}
              onMouseOut={({ target }) => (target.style.color = "gray")}
            ></i>
          </button>
        </span>
        <span className="locationInfo">
          <i className="fa-solid fa-location-dot fa-xl"></i>
          <p className="distance">{props.owner.location} km away</p>
        </span>
        <span className="dogInfo">
          <h3>{dog.gender}</h3>
          <h3>{dog.breed}</h3>
          <h3>{dog.age} years</h3>
        </span>
        <p className="description">{dog.description}</p>
        <span className="parent">
          <img className="userThumbnail" src={owner.thumbnail_photo_url} />
          <h4>Parent: {owner.name}</h4>
        </span>
        <div className="pullchat">
          {isShown && (
            <Chat
              owner_photo={owner.thumbnail_photo_url}
              owner_name={owner.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { DogProfileCard };
