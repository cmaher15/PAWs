import React from "react";

export default function Distance(props) {
  return (
    <div className="component">
    <label className="title" name="distance" required="required">
      How far are you willing to travel to meet up for a walk?
    </label>{" "}
    <br />
    <br />
    <input
      className="input"
      name="location"
      type="radio"
      required="required"
      value={props.distance}
      onChange={() => props.onChange("5km or less")}
    />
    5km or less <br />
    <input
      className="input"
      name="location"
      type="radio"
      required="required"
      value={props.distance}
      onChange={() => props.onChange("10km")}
    />
    10km <br />
    <input
      className="input"
      name="location"
      type="radio"
      required="required"
      value={props.distance}
      onChange={() => props.onChange("city")}
    />
    City-wide <br />
  </div>
  );
}