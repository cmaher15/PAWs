import { useState } from "react";

export default function Size() {
  const [size, setSize] = useState("")
  return (
    <div className="component">
    <label className="title" name="size" required="required">
      Size: <span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={size}
      onChange={() => setSize("small")}
    />
    Small
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={size}
      onChange={() => setSize("medium")}
    />
    Medium
    <br />
    <input
      className="input"
      name="size"
      type="radio"
      required="required"
      value={size}
      onChange={() => setSize("large")}
    />
    Large
  </div>
  );
}
