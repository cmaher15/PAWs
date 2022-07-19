import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DogProfile.css";

export default function Favourites(props) {
  const [favourite, setFavourite] = useState(false);
  const owner_id = document.cookie.slice(7);
  const dog_id = props.dog_id;

  const data = { owner_id, dog_id };

  const handleClick = () => {
    axios.post(`/api/favourites/`, data).then(
      response => {
        console.log(response);
        console.log("dog successfully added to favourites!");
      },
      error => {
        console.log(error);
      }
    );
    setFavourite(current => !current);
  };

  const handleDelete = () => {
    axios.delete(`/api/favourites/${owner_id}/${dog_id}`).then(
      response => {
        console.log(response);
        console.log("dog successfully removed from favourites!");
      },
      error => {
        console.log(error);
      }
    );
    setFavourite(current => !current);
  };

  // Set to true if rendering on /my-favourties
  useEffect(() => {
    if (props.favourite) setFavourite(true);
  }, []);

  return (
    <div>
      {favourite ? (
        <button className="favourited" onClick={handleDelete}>
          <i className="fa-solid fa-heart fa-xl"></i>
        </button>
      ) : (
        <button className="favourite" onClick={handleClick}>
          <i
            className="fa-solid fa-heart fa-xl"
            onMouseOver={({ target }) => (target.style.color = "darkred")}
            onMouseOut={({ target }) => (target.style.color = "gray")}
          ></i>
        </button>
      )}
    </div>
  );
}
