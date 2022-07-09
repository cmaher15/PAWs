import React from "react";

export default function Size() {
  return (
    <div class="component">
      <label class="title" required="required">Size: <span></span></label>
      <br />
        <br />
      <input class="input" name="size" type="radio"  required="required" />
      Small
        <br />
      <input class="input" name="size" type="radio"  required="required"/>
      Medium
        <br />
      <input class="input" name="size" type="radio"  required="required"/>
      Large
    </div>
  );
}
