import { useState } from "react";

export default function GenderCompatability() {
  const [gender_compatibility, setGenderComp] = useState([])
  return (
    <div className="component">
    <label
      className="title"
      name="gender_compatibility"
      required="required"
    >
      What gender(s) of dog does yours get along with? Select all that
      apply. <span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="male"
      type="checkbox"
      required="required"
      value={gender_compatibility}
      onChange={() => setGenderComp("male")}
    />
    Female
    <br />
    <input
      className="input"
      name="female"
      type="checkbox"
      required="required"
      value={gender_compatibility}
      onChange={() => setGenderComp("female")}
    />
    Male
  </div>
  );
}
