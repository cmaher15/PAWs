import React from "react";

export default function Reactive() {
  return (
    <div className="component">
      <label className="title" required="required">Can they be wary of new dogs and have the potential to respond
      unpredictably?<span></span></label>
      <br />
        <br />
      <input className="input" name="reactive" type="radio"  required="required" />
      Yes
        <br />
      <input className="input" name="reactive" type="radio"  required="required"/>
      No
    </div>
  );
}
