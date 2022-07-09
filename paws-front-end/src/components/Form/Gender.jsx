import React from "react";

export default function Gender() {
  return (
    <div class="component">
      <label class="title">Gender: </label> <br />
        <br />
      <input name="gender" type="radio" />
      Female <br />
        <br />
      <input name="gender" type="radio" />
      Male
    </div>
  );
}
