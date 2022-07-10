import { useState } from "react";

export default function Gender() {
  const [gender, setGender] = useState("")
  return (
    <div className="component">
    <label className="title" name="gender" required="required">
      Gender: <span></span>
    </label>{" "}
    <br />
    <br />
    <input
      className="input"
      name="gender"
      type="radio"
      required="required"
      value="female"
      checked={gender}
      onChange={() => setGender("female")}
    />
    Female <br />
    <input
      className="input"
      name="gender"
      type="radio"
      required="required"
      value={gender}
      onChange={() => setGender("male")}
    />
    Male
  </div>
  );
}
