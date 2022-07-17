import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage(props) {
  return (
    <main className="ownerProfile">
      <h1 className="welcome">Hello, Ceilidhe!</h1>
      <div className="user-photo">
        <img className="userpic" src="images/ceilidhe.jpeg" />
      </div>
      <h3 className="userlinks">
        <Link
          className="userlinks"
          to={"/my-favourites"}
          onClick={() => props.setUrlPath("/my-favourites")}
        >
          My Favourites
        </Link>
      </h3>
      <h3 className="userlinks">
        {" "}
        <Link
          className="userlinks"
          to={"/users-dogs"}
          onClick={() => props.setUrlPath("/users-dogs")}
        >
          My Dogs
        </Link>
      </h3>
      <h3 className="userlinks">
        <Link
          className="userlinks"
          to={"/dog-matches"}
          onClick={() => props.setUrlPath("/dog-matches")}
        >
          My Matches
        </Link>
      </h3>
      <h3 className="userlinks">
        {" "}
        <Link
          className="userlinks"
          to={"/register-dog"}
          onClick={() => props.setUrlPath("/register-dog")}
        >
          Register New Dog
        </Link>
      </h3>
      <span className="userlocation">
        <i className="fa-solid fa-location-dot fa-2xl"></i>
        <p className="distance">Powell River, BC</p>
      </span>
    </main>
  );
}
