import React from "react";

export default function Size(props) {
  return (
    <div className="component">
    <label className="title" name="size" required="required">
      Size:
    </label>
    <br />
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={props.size}
      onChange={() => props.onChange("small")}
    />
    Small
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={props.size}
      onChange={() => props.onChange("medium")}
    />
    Medium
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={props.size}
      onChange={() => props.onChange("large")}
    />
    Large
  </div>
  );
}
