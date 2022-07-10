import { useState } from "react";

export default function Name() {
  const [name, setName] = useState("")
  return (
    <div className="component">
    <label className="title" name="name">
      Name: <span></span>
      <br />
      <br />
      <input
        className="inputtext"
        type="text"
        name="name"
        placeholder="Enter your dog's name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
    </label>
  </div>
  );
}
