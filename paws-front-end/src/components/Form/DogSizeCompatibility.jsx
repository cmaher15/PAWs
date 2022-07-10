import { useState } from "react";

export default function DogSizeCompatibility() {
  const [size_compatibility, setDogComp] = useState([])
  return (
    <div className="component">
    <label className="title" name="size_compatibility" required="required">
      {" "}
      What size(s) of dog does yours get along with? Select all that apply.{" "}
      <span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="small"
      type="checkbox"
      required="required"
      value={size_compatibility}
      onChange={() => setDogComp("small")}
    />
    Small
    <br />
    <input
      className="input"
      name="medium"
      type="checkbox"
      required="required"
      value={size_compatibility}
      onChange={() => setDogComp("medium")}
    />
    Medium
    <br />
    <input
      className="input"
      name="large"
      type="checkbox"
      required="required"
      value={size_compatibility}
      onChange={() => setDogComp("large")}
    />
    Large
  </div>
  );
}
