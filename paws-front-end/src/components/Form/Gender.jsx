import React from "react";

export default function Gender() {
  return (
    <div className="component">
      <label className="title" required="required">Gender: <span></span></label> <br />
        <br />
      <input className="input" name="gender" type="radio"  required="required"/>
      Female <br />
      <input className="input" name="gender" type="radio"  required="required"/>
      Male
    </div>
  );
}
