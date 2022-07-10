import { useState } from "react";

export default function Image() {
  const [photo, setImage] = useState("")
  return (
    <div className="component">
    <label className="title">
      Image: <span></span>
    </label>
    <br />
    <br />
    Please upload an image of your dog. This image will be used on their
    profile and visible to other users.
    <br />
    <br />
    <input
      type="file"
      id="myFile"
      name="photo"
      value={photo}
      onChange={(event) => setImage(event.target.value)}
      required
    ></input>
  </div>
  );
}