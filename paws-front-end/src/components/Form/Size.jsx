import React from "react";

export default function Size() {
  return (
    <div className="component">
      <label className="title" required="required">Size: <span></span></label>
      <br />
        <br />
      <input className="input" name="size" type="radio"  required="required" />
      Small
        <br />
      <input className="input" name="size" type="radio"  required="required"/>
      Medium
        <br />
      <input className="input" name="size" type="radio"  required="required"/>
      Large
    </div>
  );
}
