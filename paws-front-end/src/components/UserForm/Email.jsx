import React from "react";

export default function Email(props) {
  return (
  <div className="component">
  <label className="title" name="email">
  Email: </label>
  <br />
  <br />
  <input
    className="inputtext"
    type="text"
    name="email"
    placeholder="Enter your e-mail"
    value={props.value}
    onChange={(event) => props.onChange(event.target.value)}
    required
  />
  </div>
  )
}