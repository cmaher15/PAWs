import { useState } from "react";

export default function GenderCompatability(props) {
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
      name="female"
      type="checkbox"
      required="required"
      onChange={() => props.onChange("female")}
    />
    Female
    <br />
    <input
      className="input"
      name="male"
      type="checkbox"
      required="required"
      onChange={() => props.onChange("male")}
    />
    Male
  </div>
  );
}
