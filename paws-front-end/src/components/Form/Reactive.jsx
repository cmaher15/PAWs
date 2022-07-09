import React from "react";

export default function Reactive() {
  return (
    <div class="component">
      <label class="title" required="required">Can they be wary of new dogs and have the potential to respond
      unpredictably?<span></span></label>
      <br />
        <br />
      <input class="input" name="reactive" type="radio"  required="required" />
      Yes
        <br />
      <input class="input" name="reactive" type="radio"  required="required"/>
      No
    </div>
  );
}
