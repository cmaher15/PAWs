import React from "react";

export default function DogSizeCompatibility(props) {
  return (
    <div className="component">
    <label className="title" name="size_compatibility" required="required">
      {" "}
      What size(s) of dog does yours get along with? Select all that apply.{" "}
    </label>
    <br />
    <br />
    <input
      className="input"
      name="small"
      type="checkbox"
      onChange={() => props.onChange("small")}
    />
    Small
    <br />
    <input
      className="input"
      name="medium"
      type="checkbox"
      onChange={() => props.onChange("medium")}
    />
    Medium
    <br />
    <input
      className="input"
      name="large"
      type="checkbox"
      onChange={() => props.onChange("large")}
    />
    Large
  </div>
  );
}
