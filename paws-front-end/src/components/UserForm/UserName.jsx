import React from "react";

export default function UserName(props) {
  return (
    <div className="component">
    <label className="title" name="username">
      Name: </label>
      <br />
      <br />
      <input
        className="inputtext"
        type="text"
        name="username"
        placeholder="Enter your first and last name"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
      </div>
  );
}
