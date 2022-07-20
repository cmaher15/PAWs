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
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import NewsBar from "./components/NewsBar";
import AxiosRouter from "./components/AxiosRouter";
import MatchesLoading from "./components/MatchesLoading";
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
        {loggedIn ? (
          <LandingPage setUrlPath={setUrlPath} urlPath={urlPath} />
        ) : (
          <></>
        )}

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
            path="/matches-loading"
            element={<MatchesLoading setUrlPath={setUrlPath} />}
          />
          <Route
            path="/dog-matches"
            element={<AxiosRouter urlPath={urlPath} />}
          />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* <Footer urlPath={urlPath} setUrlPath={setUrlPath} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
