import React from "react";
import "../styles/DogProfile.scss";

export default function DogProfile() {
  return (
    <main className="dogProfile">
      <div>
        <img className="dog" src="images/happy_baby.jpeg" />
      </div>
      <h2>Rocky || Male || Pitbull || 3 1/2</h2>
      <p>
        Rocky is a good boy who likes jumping in puddles! He would absolutely
        love to go on a walk with you.
      </p>
      <span className="icons">
        <i className="fa-solid fa-location-dot fa-xl"
         onMouseOver={({ target }) => (target.style.color = "black")}
         onMouseOut={({ target }) => (target.style.color = "gray")}></i>
        <i
          className="fa-solid fa-heart fa-xl"
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i>
        <i
          className="fa-solid fa-message fa-xl"
          onMouseOver={({ target }) => (target.style.color = "blue")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i>
      </span>
    </main>
  );
}
