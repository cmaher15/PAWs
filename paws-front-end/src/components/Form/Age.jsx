import React from "react";

export default function Age() {
  const [age, setAge] = useState("")
  return (
    <div className="component">
    <label className="title">
      Age: <span></span>
    </label>
    <br />
    <br />
    <input
      className="inputtext"
      name="age"
      type="number"
      value={age}
      onChange={(event) => setAge(event.target.value)}
      required
    />
  </div>
  );
}
