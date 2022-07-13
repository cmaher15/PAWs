import React from "react";
import { Link } from "react-router-dom";
import UsersDogList from "./UserForm/UserDogList";

const UserProfile = function (props) {
  return (
    <div>
      <p>Hello {props.userName}!</p>
      <p>
        Manage your dogs <Link to={<UsersDogList />}>here</Link>
      </p>
      <p>
        View your{" "}
        <button>
          {" "}
          <Link
            to={"/dog-matches"}
            onClick={() => props.setUrlPath("/dog-matches")}
          >
            Matches
          </Link>
        </button>
      </p>
    </div>
  );
};

export default UserProfile;
