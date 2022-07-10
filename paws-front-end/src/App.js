import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Helpers
import { getCoordinates } from "./helpers/getCoordinates";

// Temp global variable for user's logged-in status

function App() {
  // Global State
  const [loggedIn, setLoggedIn] = useState(() => true);
  const [userName, setUserName] = useState("Snoopy123");
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  // Get user location
  const getCoordinates = function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return { latitude: latitude, longitude: longitude };
  };

  const [userCoordinates, setUserCoordinates] = useState(async function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(getCoordinates(position), reject);
      });
    });
  });

  console.log("userCoordinates: ", userCoordinates);

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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer urlPath={urlPath} setUrlPath={setUrlPath} />
      </BrowserRouter>
    </div>
  );
}

export default App;
