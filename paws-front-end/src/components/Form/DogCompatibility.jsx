import React from "react";

export default function DogCompatibility() {
  return (
    <div class="component">
     <label class="title" required="required"> What size(s) of dog does yours get along with? Select all that apply. <span></span></label>
     <br />
        <br />
      <input class="input" name="small" type="checkbox"  required="required" />
      Small
        <br />
      <input class="input" name="medium" type="checkbox"  required="required"/>
      Medium
        <br />
      <input class="input" name="large" type="checkbox"  required="required"/>
      Large
    </div>
  );
}
