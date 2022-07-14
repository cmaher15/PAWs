import React, {useState} from "react";
import "../styles/DogProfile.css";
import Chat from "../Chat";


export default function DogProfile() {
  const [isShown, setIsShown] = useState(false);

  const handleChat = event => {
    setIsShown(current => !current)
  }
  return (
    <main className="dogProfile">
      <div>
        <img className="dog" src="images/happy_baby.jpeg" />
      </div>
      <span className="icons">
        <h1 className="dogName">Rocky</h1>
        <button className="favourite"><i
          className="fa-solid fa-heart fa-2xl"
          onMouseOver={({ target }) => (target.style.color = "darkred")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i></button>
        <button className="sendChatBtn" onClick={handleChat}><i
          className="fa-solid fa-message fa-2xl"
          onMouseOver={({ target }) => (target.style.color = "cadetblue")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i></button>
      </span>
      <span className="locationInfo">
        <i className="fa-solid fa-location-dot fa-2xl"></i>
        <p className="distance">15 km away</p>
      </span>
      <span className="dogInfo">
        <h3>Male</h3>
        <h3>Pitbull</h3>
        <h3>3.5 Years</h3>
      </span>
      <p className="description">
        Rocky is a good boy who likes jumping in puddles! He would absolutely
        love to go on a walk with you.
      </p>
      <span className="parent">
        <img className="userThumbnail" src="images/mscarn.jpeg" />
        <h4>Parent: Michael Scarn</h4>
      </span>
      <div>{isShown && <Chat />}</div>
    </main>
    
  );
}
