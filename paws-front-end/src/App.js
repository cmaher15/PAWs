import React from "react";
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

/* loggedIn prop for <Header /> set to true for now.
  We are not sure where that piece of state will come from yet.
*/

// Temp global variable for user's logged-in status
let loggedIn = true;

function App() {
  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/RegisterDog" element={<RegisterDog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
