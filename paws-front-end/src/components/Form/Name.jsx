import React from "react";

export default function Name() {
  return (
    <div className="component">
      <label className="title">
        Name: <span></span><br />
        <br />
        <input className="input" type="text" name="name" required/>
        
      </label>
    </div>
  );
}
