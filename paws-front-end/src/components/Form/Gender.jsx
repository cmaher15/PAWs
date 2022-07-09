import React from "react";

export default function Gender() {
  return (
    <div class="component">
      <label class="title" required="required">Gender: <span></span></label> <br />
        <br />
      <input class="input" name="gender" type="radio"  required="required"/>
      Female <br />
      <input class="input" name="gender" type="radio"  required="required"/>
      Male
    </div>
  );
}
