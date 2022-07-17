import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import axios from "axios";

export default function LandingPage(props) {
  const [isLoadingDogs, setIsLoadingDogs] = useState(true);
  const [isLoadingOwners, setIsLoadingOwners] = useState(true);
  const [areaDogs, setAreaDogs] = useState();
  const [areaOwners, setAreaOwners] = useState();

  // Fetch dogs from server
  useEffect(() => {
    axios
      .get(`/api/dogs`)
      .then(response => {
        // callSetAreaDogs(response.data);
        setAreaDogs(response.data);
        setIsLoadingDogs(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  // Fetch owners from server
  useEffect(() => {
    axios
      .get(`/api/owners`)
      .then(response => {
        // callSetAreaDogs(response.data);
        setAreaOwners(response.data);
        setIsLoadingOwners(false);
      })
      .catch(error => console.log("Error fetching dogs from server: ", error));
  }, []);

  if (isLoadingDogs || isLoadingOwners) {
    // Shows loading whilst waiting for axios request (gif dog goes here)
    return <p>Loading...</p>;
  } else {
    return (
      <main className="ownerProfile">
        <h1 className="welcome">
          Hello, {window.localStorage.getItem("paws_name")}
        </h1>
        <div className="user-photo">
          <img
            className="userpic"
            src={`images/${window.localStorage.getItem("paws_name")}.jpeg`}
          />
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
          <p className="distance">{window.localStorage.getItem("paws_city")}</p>
        </span>
      </main>
    );
  }
}
