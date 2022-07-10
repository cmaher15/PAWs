import React from "react";

export default function Gender(props) {
  return (
    <div className="component">
    <label className="title" name="gender" required="required">
      Gender: <span></span>
    </label>{" "}
    <br />
    <br />
    <input
      className="input"
      name="gender"
      type="radio"
      required="required"
      value={props.gender}
      onChange={() => props.onChange("female")}
    />
    Female <br />
    <input
      className="input"
      name="gender"
      type="radio"
      required="required"
      value={props.gender}
      onChange={() => props.onChange("male")}
    />
    Male
  </div>
  );
}
