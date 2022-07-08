import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";

/* loggedIn prop for <Header /> set to true for now.
  We are not sure where that piece of state will come from yet.
*/

function App() {
  return (
    <div className="App">
      <Header loggedIn={true} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
