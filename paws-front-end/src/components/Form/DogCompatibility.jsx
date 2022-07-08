import React from "react";

export default function DogCompatibility() {
  return (
    <div>
      What size(s) of dog does yours get along with? Select all that apply.
      <br />
      <input name="small" type="radio" />
      Small
      <br />
      <input name="medium" type="radio" />
      Medium
      <br />
      <input name="large" type="radio" />
      Large
    </div>
  );
}
