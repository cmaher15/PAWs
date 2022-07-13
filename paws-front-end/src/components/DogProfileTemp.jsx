import React, { useEffect, useState } from "react";
import "../styles/DogProfile.css";
import axios from "axios";

export default function DogProfileTemplate() {
  const [renderDogs, setRenderDogs] = useState("");
  const findDogs = () => {
    axios.get(`/api/dogs/`).then(
      (response) => {
        console.log(response);
        renderDogs;
      },
      (error) => {
        console.log(error);
      }
    );

    useEffect(() => {
      findDogs.then((response) => {
        setRenderDogs(response);
      });
    }, []);

    return (
      <main className="dogProfile">
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
      </main>
    );
  };
}
