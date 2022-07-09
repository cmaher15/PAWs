import React from "react";

export default function GenderCompatability() {
  return (
    <div class="component">
      <label class="title">What gender(s) of dog does yours get along with? Select all that apply.</label>
      <br />
        <br />
      <input name="male" type="radio" />
      Male
      <br />
        <br />
      <input name="female" type="radio" />
      Female
    </div>
  );
}
