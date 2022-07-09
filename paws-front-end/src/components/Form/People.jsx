import React from "react";

export default function People() {
  return (
    <div class="component">
      <label class="title" required="required">Are they good with new people?<span></span></label>
      
      <br />
        <br />
      <input class="input" name="people" type="radio"  required="required"/>
      Yes
        <br />
      <input class="input" name="people" type="radio"  required="required"/>
      No
    </div>
  );
}
