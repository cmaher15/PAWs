import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const UserProfile = function (props) {
  return (
    <span>
      {props.loggedIn ? (
        <> </>
      ) : (
        <div className="dropdown">
          <button className="dropbtn">
            <p>Menu</p>
          </button>
          <div className="dropdown-content">
            <button className="mainbtn">
              {" "}
              <Link
                className="hovermenu"
                to={"/register-user"}
                onClick={() => props.setUrlPath("/register-user")}
              >
                <p className="dropdown-text">Register</p>
              </Link>
            </button>
            <button className="mainbtn">
              <Link
                className="hovermenu"
                to={"/about-us"}
                onClick={() => props.setUrlPath("/about-us")}
              >
                <p className="dropdown-text">About Us</p>
              </Link>
            </button>
            <button className="mainbtn">
              <Link
                className="hovermenu"
                to={"/terms"}
                onClick={() => props.setUrlPath("/terms")}
              >
                <p className="dropdown-text">Terms</p>
              </Link>
            </button>
          </div>
        </div>
      )}
    </span>
  );
};

export default UserProfile;
