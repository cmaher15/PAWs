import React from "react";

export default function People() {
  return (
    <div class="component">
      <label class="title">Are they good with new people?</label>
      <br />
        <br />
      <input name="people" type="radio" />
      Yes
      <br />
        <br />
      <input name="people" type="radio" />
      No
    </div>
  );
}
