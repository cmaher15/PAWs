import React from "react";

export default function Description() {
  return (
    <div className="component">
      <label className="title">Description: <span></span></label>
      <br />
        <br />
      Please provide a brief description of your dog, including any other
      info/fun facts not covered in this form!
      <br />
        <br />
      <textarea className="input" required maxlength="255"></textarea><br/>
      maximum 255 characters
    </div>
  );
}
