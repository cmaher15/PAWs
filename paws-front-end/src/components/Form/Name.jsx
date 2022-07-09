import React from "react";

export default function Name() {
  return (
    <div class="component">
      <label class="title">
        Name: <span></span><br />
        <br />
        <input class="input" type="text" name="name" required/>
        
      </label>
    </div>
  );
}
