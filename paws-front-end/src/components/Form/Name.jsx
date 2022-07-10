import React from "react";

export default function Name(props) {
  return (
    <div className="component">
    <label className="title" name="name">
      Name: <span></span>
      <br />
      <br />
      <input
        className="inputtext"
        type="text"
        name="name"
        placeholder="Enter your dog's name"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
    </label>
  </div>
  );
}
