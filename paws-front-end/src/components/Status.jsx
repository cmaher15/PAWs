import React from "react";
import "../styles/Status.css"

export default function Status() {
  return (
  <div className="loading">
    <img
    className="status_image"
    src="images/doggo2.png"
    alt="Loading"
    />
    <h2 className="loadingtitle">Finding compatible pups...</h2>
  </div>
  )
}