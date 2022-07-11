import React from "react";

export default function Password(props) {
  return (
  <div class="component">
  <label className="title" name="password">
  Password: </label>
  <br />
  <br />
  <input
    className="inputtext"
    type="password"
    name="password"
    placeholder="Enter a password"
    value={props.value}
    onChange={(event) => props.onChange(event.target.value)}
    required
  />
  </div>
  )
}