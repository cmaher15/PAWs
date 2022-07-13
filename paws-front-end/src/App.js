import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterUser from "./components/RegisterUser";
import RegisterDog from "./components/RegisterDog";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import DogProfile from "./components/DogProfile";
import UserProfile from "./components/UserProfile";
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

function App() {
  // GLOBAL STATE
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState("Snoopy123");
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

  // GET ARRAY OF MATCHED DOGS
  const [matchedDogs, setMatchedDogs] = useState();
  const getMatches = async function (ownerId) {
    if (loggedIn) {
      // Make GET request to server for array of matched dogs
      try {
        await axios.get("/api/dogs", ownerId).then((response) => {
          console.log("response in getMatches axios request: ", response);
          return response;
        });
      } catch (err) {
        setMatchedDogs("No response from server");
        console.log(err);
      }
    } else {
      // Empty array for user who is not logged in
      setMatchedDogs([]);
    }
  };

  useEffect(() => {
    // Array sent back from the server will be the value of matchedDogs
    getMatches(1).then((response) => {
      setMatchedDogs(response);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          userName={userName}
          setLoggedIn={setLoggedIn}
          setUrlPath={setUrlPath}
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
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/user-profile"
            element={<UserProfile matchedDogs={matchedDogs} />}
          /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer urlPath={urlPath} setUrlPath={setUrlPath} />
      </BrowserRouter>
      <RegisterDog />
      <RegisterUser />
    </div>
  );
}

export default App;
