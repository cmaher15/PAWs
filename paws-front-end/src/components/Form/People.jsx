import React from "react";

export default function People() {
  return (
    <div className="component">
      <label className="title" required="required">Are they good with new people?<span></span></label>
      
      <br />
        <br />
      <input className="input" name="people" type="radio"  required="required"/>
      Yes
        <br />
      <input className="input" name="people" type="radio"  required="required"/>
      No
    </div>
  );
}
