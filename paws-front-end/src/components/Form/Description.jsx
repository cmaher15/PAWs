import React from "react";

export default function Description() {
  const [description, setDescription] = useState("")
  return (
    <div className="component">
    <label className="title">
      Description: <span></span>
    </label>
    <br />
    <br />
    Please provide a brief description of your dog, including any other
    info/fun facts not covered in this form!
    <br />
    <br />
    <textarea
      className="inputtext"
      name="description"
      required
      maxLength="255"
      value={description}
      onChange={(event) => setDescription(event.target.value)}
    ></textarea>
    <br />
    maximum 255 characters
  </div>
  );
}
