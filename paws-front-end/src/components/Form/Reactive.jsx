import { useState } from "react";

export default function Reactive(props) {
  return (
    <div className="component">
    <label className="title" name="reactive" required="required">
      Can they be wary of new dogs and have the potential to respond
      unpredictably?
    </label>
    <br />
    <br />
    <input
      className="input"
      name="reactive"
      type="radio"
      required="required"
      value={props.reactive}
      onChange={() => props.onChange(true)}
    />
    Yes
    <br />
    <input
      className="input"
      name="reactive"
      type="radio"
      required="required"
      value={props.reactive}
      onChange={() => props.onChange(false)}
    />
    No
  </div>
  );
}
