import React from "react";

export default function Description() {
  return (
    <div class="component">
      <label class="title">Description: <span></span></label>
      <br />
        <br />
      Please provide a brief description of your dog, including any other
      info/fun facts not covered in this form!
      <br />
        <br />
      <input class="input" id="description" type="textarea" required></input>
    </div>
  );
}
