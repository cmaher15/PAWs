import React from "react";

export default function People() {
  const [good_with_people, setPeople] = useState(true)
  return (
    <div className="component">
    <label className="title" name="people" required="required">
      Are they good with new people?<span></span>
    </label>
    <br />
    <br />
    <input
      className="input"
      name="good_with_people"
      type="radio"
      required="required"
      value={good_with_people}
      onChange={() => setPeople(true)}
    />
    Yes
    <br />
    <input
      className="input"
      name="good_with_people"
      type="radio"
      required="required"
      value={good_with_people}
      onChange={() => setPeople(false)}
    />
    No
  </div>
  );
}
