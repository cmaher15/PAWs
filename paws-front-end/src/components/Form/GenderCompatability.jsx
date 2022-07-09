import React from "react";

export default function GenderCompatability() {
  return (
    <div className="component">
      <label className="title" required="required">What gender(s) of dog does yours get along with? Select all that apply. <span></span></label>
      <br />
        <br />
      <input className="input" name="male" type="checkbox"  required="required"/>
      Female
        <br />
      <input className="input" name="female" type="checkbox"  required="required"/>
      Male
    </div>
  );
}
