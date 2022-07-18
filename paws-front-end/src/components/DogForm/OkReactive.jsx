import React from "react";

export default function OkReactive (props) {
  return (
    <div className="component">
      <label className="title" name="people" required="required">
        Is your dog okay to walk with other dogs <br/>who may be reactive and/or
        vocal with other dogs?
      </label>
      <br />
      <br />
      <input
        className="input"
        name="good_with_reactive_dogs"
        type="radio"
        required="required"
        value={props.good_with_reactive_dogs}
        onChange={() => props.onChange(true)}
      />
      Yes
      <br />
      <input
        className="input"
        name="good_with_reactive_dogs"
        type="radio"
        required="required"
        value={props.good_with_reactive_dogs}
        onChange={() => props.onChange(false)}
      />
      No
    </div>
  );
}
