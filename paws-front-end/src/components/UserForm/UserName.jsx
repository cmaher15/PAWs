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
        name="firstname"
        placeholder="Enter your first name"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
      <input
        className="inputtext"
        type="text"
        name="lastname"
        placeholder="Enter your last name"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required
      />
  </div>
  );
}
