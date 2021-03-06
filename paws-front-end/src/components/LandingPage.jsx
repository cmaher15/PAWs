import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import axios from "axios";

export default function LandingPage(props) {
  // const [isLoadingDogs, setIsLoadingDogs] = useState(true);
  // const [isLoadingOwners, setIsLoadingOwners] = useState(true);
  // const [areaDogs, setAreaDogs] = useState();
  // const [areaOwners, setAreaOwners] = useState();
  const userId = window.localStorage.getItem("paws_id");
  const [ownerPic, setOwnerPic] = useState("");

  axios
    .get(`api/owners/${userId}`)
    .then(response => {
      setOwnerPic(response.data.thumbnail_photo_url);
    })
    .catch(error => console.log("Error fetching user from server: ", error));

  // // Fetch dogs from server
  // useEffect(() => {
  //   axios
  //     .get(`/api/dogs`)
  //     .then(response => {
  //       // callSetAreaDogs(response.data);
  //       setAreaDogs(response.data);
  //       setIsLoadingDogs(false);
  //     })
  //     .catch(error => console.log("Error fetching dogs from server: ", error));
  // }, []);

  // // Fetch owners from server
  // useEffect(() => {
  //   axios
  //     .get(`/api/owners`)
  //     .then(response => {
  //       // callSetAreaDogs(response.data);
  //       setAreaOwners(response.data);
  //       setIsLoadingOwners(false);
  //     })
  //     .catch(error => console.log("Error fetching dogs from server: ", error));
  // }, []);
  const myDogsUnderline = function (url) {
    if (url === "/matches-loading" || url === "/dog-matches") {
      return "menu-underline";
    }
  };

  const url = props.urlPath;
  return (
    <main className="ownerProfile">
      <h3 className="welcome">
        Hello, {window.localStorage.getItem("paws_name")}
      </h3>
      <div className="user-photo">
        <img
          className="userpic"
          // src={`images/${window.localStorage.getItem("paws_name")}.jpeg`}
          src={ownerPic}
        />
      </div>
      <h3 className={`userlinks ${url === "/my-favourites" ? "menu-underline" : ""}`}>
        <Link
          className="userlinks"
          to={"/my-favourites"}
          onClick={() => props.setUrlPath("/my-favourites")}
        >
          <span>My Favourites</span>
        </Link>
      </h3>

      <h3
        className={`userlinks ${url === "/users-dogs" ? "menu-underline" : ""}`}
      >
        {" "}
        <Link
          className="userlinks"
          to={"/users-dogs"}
          onClick={() => props.setUrlPath("/users-dogs")}
        >
          <span>My Dogs</span>
        </Link>
      </h3>

      <h3 className={`userlinks ${myDogsUnderline(url)}`}>
        <Link
          className="userlinks"
          to={"/matches-loading"}
          onClick={() => props.setUrlPath("/matches-loading")}
        >
          <span>My Matches</span>
        </Link>
      </h3>

      <h3
        className={`userlinks ${
          url === "/register-dog" ? "menu-underline" : ""
        }`}
      >
        {" "}
        <Link
          className="userlinks"
          to={"/register-dog"}
          onClick={() => props.setUrlPath("/register-dog")}
        >
          <span>Register New Dog</span>
        </Link>
      </h3>
      <span className="userlocation">
        <i className="fa-solid fa-location-dot fa-xl"></i>
        <p className="distance">{window.localStorage.getItem("paws_city")}</p>
      </span>
    </main>
  );
}
