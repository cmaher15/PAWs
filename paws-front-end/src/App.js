import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/ProfileSpinner.css";
import axios from "axios";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterUser from "./components/RegisterUser";
import RegisterDog from "./components/RegisterDog";
import LandingPage from "./components/LandingPage";
import DogMatches from "./components/DogMatches";
import UsersDogs from "./components/UsersDogs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import DogProfileCard from "./helpers/dogProfileCard";
import Status from "./components/Status";
import NewsBar from "./components/NewsBar";
import FavePage from "./components/FavePage";
import AxiosRouter from "./components/AxiosRouter";
// import DogProfileTemplate from "./components/DogProfileTemp";

// Helpers
// import {
//   getCoordinates,
//   fetchCoordinates,
//   sendCoordinatesToServer
//   // apiLocationSetState
// } from "./helpers/getCoordinates";

// //Chat
// import Chat from "./Chat";
// import DogProfileTemplate from "./components/DogMatches";

const App = () => {
  // GLOBAL STATE
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("paws_logged_in")
  );
  const [userId, setUserId] = useState(window.localStorage.getItem("paws_id"));
  const [userName, setUserName] = useState("");
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  // // GET DOGS
  // const [isLoadingDogs, setIsLoadingDogs] = useState(true);
  // const [isLoadingOwners, setIsLoadingOwners] = useState(true);
  // const [areaDogs, setAreaDogs] = useState();
  // const [areaOwners, setAreaOwners] = useState();
  // GET USER LOCATION
  // const [userCoordinates, setUserCoordinates] = useState("");
  // // Update userCoordinates, after async request for location is fulfilled
  // const getLongLat = async function () {
  //   try {
  //     await fetchCoordinates(getCoordinates).then(results => {
  //       console.log("results, App.js: ", results);
  //       setUserCoordinates(results);
  //       // After state is set, pass lat/longitude to database
  //       // sendCoordinatesToServer(userCoordinates, ownerId);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  // if (isLoadingDogs || isLoadingOwners) {
  //   return <div>LOADING DOGS AND OWNERS</div>;
  // }

  // // GET USER LOCATION *Leave commented out until needed
  // const [userCoordinates, setUserCoordinates] = useState("");
  // // Update userCoordinates, after async request for location is fulfilled
  // const getLongLat = async function () {
  //   try {
  //     await fetchCoordinates(getCoordinates).then(results => {
  //       console.log("results, App.js: ", results);
  //       setUserCoordinates(results);
  //       // After state is set, pass lat/longitude to database
  //       // sendCoordinatesToServer(userCoordinates, ownerId);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getLongLat();
  // }, []);

  const newsDisplay = function (url, loggedIn) {
    if (url === "/dog-matches" || url === "/my-favourites") {
      return;
    } else {
      if (loggedIn) {
        return <NewsBar />;
      }
    }
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: 'url("images/skipping-dogs.jpg")' }}
    >
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
          setUrlPath={setUrlPath}
          setUserId={setUserId}
        />
        {newsDisplay(urlPath, loggedIn)}
<<<<<<< HEAD
=======
        {/* {loggedIn ? <NewsBar /> : <></>} */}
>>>>>>> 3e2064caeb5a02a7efbad344f395836082bb971a
        {loggedIn ? <LandingPage setUrlPath={setUrlPath} /> : <></>}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register-user"
            element={<RegisterUser setUrlPath={setUrlPath} />}
          />
          <Route
            path="/register-dog"
            element={<RegisterDog userId={userId} setUrlPath={setUrlPath} />}
          />
          <Route
            path="/my-favourites"
            element={<AxiosRouter urlPath={urlPath} />}
          />
          <Route
            path="/users-dogs"
            element={<AxiosRouter urlPath={urlPath} />}
          />
          <Route
            path="/dog-matches"
            element={<AxiosRouter urlPath={urlPath} />}
          />
          {/* <Route
            path="/dog-matches"
            element={<DogMatches areaDogs={areaDogs} areaOwners={areaOwners} />}
          />
          <Route
            path="/my-favourites"
            element={
              <FavePage
                userId={userId}
                areaDogs={areaDogs}
                areaOwners={areaOwners}
              />
            }
          />
          <Route
            path="/users-dogs"
            element={
              <UsersDogs
                userId={userId}
                areaDogs={areaDogs}
                areaOwners={areaOwners}
              />
            } */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        {/* <RegisterDog /> /}
                    {/ <Status />
                    <RegisterUser /> /}
        {/* <Footer urlPath={urlPath} setUrlPath={setUrlPath} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
