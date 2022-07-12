import React from "react";

export default function Age(props) {
  return (
    <div className="component">
    <label className="title">
      Age: 
    </label>
    <br />
    <br />
    <input
      className="inputtext"
      name="age"
      type="number"
      placeholder="Enter your dog's age"
      value={props.age}
      onChange={(event) => props.onChange(event.target.value)}
      required
    />
  </div>
  );
}
