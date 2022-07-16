import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersDogs from "./UsersDogs";
import "../styles/Home.css";

const HomePage = function (props) {
  // JSX to be displayed if user is logged out
  const guestGreeting = function () {
    return (
      <main className="guest-greeting">
        <h1 className="intro">Welcome!</h1>
        <div className="register-account">
          Hi there! Welcome to PAWs. We are a group of dog lovers who wanted to
          create a platform to connect dogs with other furry friends in their
          area! Dogs are matched based on the detailed information and
          preferences entered by their owner. Owners can then browse matches,
          and connect with others via a live chat to arrange a walk, playdate,
          or other exciting adventure with their new pals! Login to start
          connecting, or sign up{" "}
          <Link className="sign-up" to="/register-user">
            here
          </Link>{" "}
          if you don't have an account yet!
        </div>
      </main>
    );
  };

  return (
    <div>
      {/*Display profile page if user logged in, else prompt user to sign up */}
      {props.loggedIn ? (
        <UsersDogs userName={props.userName} />
      ) : (
        guestGreeting()
      )}
    </div>
  );
};

export default HomePage;
