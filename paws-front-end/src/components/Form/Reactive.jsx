import { useState } from "react";

export default function Reactive() {
  const [reactive, setReactive] = useState(true)
  return (
    <div className="component">
    <label className="title" name="reactive" required="required">
      Can they be wary of new dogs and have the potential to respond
      unpredictably?<span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="reactive"
      type="radio"
      required="required"
      value={reactive}
      onChange={() => setReactive(true)}
    />
    Yes
    <br />
    <input
      className="input"
      name="reactive"
      type="radio"
      required="required"
      value={reactive}
      onChange={() => setReactive(false)}
    />
    No
  </div>
  );
}
