import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterUser from "./RegisterUser";

const HomePage = function (props) {
  // JSX to be displayed if user is logged in
  const userGreeting = function (userName) {
    return (
      <>
        <p>Welcome {userName}!</p>
        <p>HERE IS WHERE YOUR PROFILE PAGE WILL BE</p>
      </>
    );
  };

  // JSX to be displayed if user is logged out
  const guestGreeting = function () {
    return (
      <p>
        No account? Sign up <Link to="/register-user">here</Link>
      </p>
    );
  };

  return (
    <div>
      {/*Display profile page if user logged in, else prompt user to sign up */}
      {props.loggedIn ? userGreeting(props.userName) : guestGreeting()}
    </div>
  );
};

export default HomePage;
