import React from "react";

export default function DogCompatibility() {
  return (
    <div className="component">
     <label className="title" required="required"> What size(s) of dog does yours get along with? Select all that apply. <span></span></label>
     <br />
        <br />
      <input className="input" name="small" type="checkbox"  required="required" />
      Small
        <br />
      <input className="input" name="medium" type="checkbox"  required="required"/>
      Medium
        <br />
      <input className="input" name="large" type="checkbox"  required="required"/>
      Large
    </div>
  );
}
