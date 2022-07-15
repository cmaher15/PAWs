import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/Background.css";
import axios from "axios";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterUser from "./components/RegisterUser";
import RegisterDog from "./components/RegisterDog";
import Login from "./components/Login";
import DogMatches from "./components/DogMatches";
import UsersDogs from "./components/UsersDogs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import DogProfile from "./components/DogProfile";
import DogProfileCard from "./helpers/dogProfileCard";
import Status from "./components/Status";
// import DogProfileTemplate from "./components/DogProfileTemp";

// Helpers
import {
  getCoordinates,
  fetchCoordinates,
  sendCoordinatesToServer,
  // apiLocationSetState
} from "./helpers/getCoordinates";

//Chat
import Chat from "./Chat";
import DogProfileTemplate from "./components/DogMatches";

const App = () => {
  // GLOBAL STATE
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  // GET USER LOCATION
  const [userCoordinates, setUserCoordinates] = useState();
  // Update userCoordinates, after async request for location is fulfilled
  const getLongLat = async function () {
    try {
      await fetchCoordinates(getCoordinates).then((results) => {
        console.log("results, App.js: ", results);
        setUserCoordinates(results);
        // After state is set, pass lat/longitude to database
        // sendCoordinatesToServer(userCoordinates, ownerId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLongLat();
  }, []);

  return (
    <div className="App">
      <div className="background-img">
        <BrowserRouter>
          <Header
            loggedIn={loggedIn}
            userName={userName}
            setLoggedIn={setLoggedIn}
            setUrlPath={setUrlPath}
            setUserId={setUserId}
          />
          <Routes>
            <Route
              path="/"
              element={<HomePage loggedIn={loggedIn} userName={userName} />}
            />
            <Route
              path="/register-user"
              element={<RegisterUser loggedIn={loggedIn} />}
            />
            <Route path="/register-dog" element={<RegisterDog />} />
            <Route path="/login" element={<Login setUserId={setUserId} />} />
            <Route path="/dog-matches" element={<DogMatches />} />
            <Route path="/users-dogs" element={<UsersDogs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <RegisterDog />
          {/* <Status />
        <RegisterUser /> */}
          <DogProfile />
          <Footer urlPath={urlPath} setUrlPath={setUrlPath} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
