import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoadingPups.css";

const MatchesLoading = function (props) {
  const navigate = useNavigate();

  const maggeiWaggei = function () {
    toDogsMatches;
    return (
      <div className="loadingpups">
        <p>Finding compatible pups...</p>
        <div className="puppers">
          <img className="maggei-waggei" src="images/browndoggo.png" alt="" />
          <img className="maggei-waggei" src="images/whitedoggo.png" alt="" />
        </div>
      </div>
    );
  };

  const toDogsMatches = setTimeout(() => {
    console.log("Set Timeout waggei");
    props.setUrlPath("/dog-matches");
    navigate("/dog-matches");
    clearTimeout(toDogsMatches);
  }, 2000);

  return maggeiWaggei();
};

export default MatchesLoading;
