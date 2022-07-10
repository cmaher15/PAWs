import React from "react";

export default function People(props) {
  return (
    <div className="component">
    <label className="title" name="people" required="required">
      Are they good with new people?<span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="good_with_people"
      type="radio"
      required="required"
      value={props.good_with_people}
      onChange={() => props.onChange(true)}
    />
    Yes
    <br />
    <input
      className="input"
      name="good_with_people"
      type="radio"
      required="required"
      value={props.good_with_people}
      onChange={() => props.onChange(false)}
    />
    No
  </div>
  );
}
