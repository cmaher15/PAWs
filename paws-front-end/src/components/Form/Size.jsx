import React from "react";

export default function Size() {
  return (
    <div class="component">
      <label class="title">Size: </label> <br />
        <br />
      <input name="size" type="radio" />
      Small
      <br />
        <br />
      <input name="size" type="radio" />
      Medium
      <br />
        <br />
      <input name="size" type="radio" />
      Large
    </div>
  );
}
