import React from "react";

export default function DogCompatibility() {
  return (
    <div class="component">
     <label class="title"> What size(s) of dog does yours get along with? Select all that apply.</label>
     <br />
        <br />
      <input name="small" type="radio" />
      Small
      <br />
        <br />
      <input name="medium" type="radio" />
      Medium
      <br />
        <br />
      <input name="large" type="radio" />
      Large
    </div>
  );
}
