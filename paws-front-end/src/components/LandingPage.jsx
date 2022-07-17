import React from "react";
import "../styles/LandingPage.css";

export default function LandingPage () {

  return (
    <main className="ownerProfile">
       <div className="user-photo"><img className="userpic" src="images/ceilidhe.jpeg"/></div>
      <h3>My Favourites</h3>
      <h3>My Matches</h3>
      <h3>My Dogs</h3>
      <span className="locationInfo">
        <i className="fa-solid fa-location-dot fa-2xl"></i>
        <p className="distance">Powell River, BC</p>
      </span>
    </main>
  )}