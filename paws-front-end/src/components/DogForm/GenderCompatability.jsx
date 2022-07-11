import React from "react";

export default function GenderCompatability(props) {
  return (
    <div className="component">
    <label
      className="title"
      name="gender_compatibility"
      required="required"
    >
      What gender(s) of dog does yours get along with? Select all that
      apply. 
    </label>
    <br />
    <br />
    <input
      className="input"
      name="female"
      type="checkbox"
      onChange={() => props.onChange("female")}
    />
    Female
    <br />
    <input
      className="input"
      name="male"
      type="checkbox"
      onChange={() => props.onChange("male")}
    />
    Male
  </div>
  );
}
