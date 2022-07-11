import React from "react";

export default function City(props) {
  <div class="component">
  <label className="title" name="city">
  City: </label>
  <br />
  <br />
  <input
    className="inputtext"
    type="text"
    name="name"
    placeholder="Enter your city"
    value={props.value}
    onChange={(event) => props.onChange(event.target.value)}
    required
  />
  </div>
}