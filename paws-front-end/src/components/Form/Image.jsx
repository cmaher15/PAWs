import React from "react";

export default function Image() {
  return (
    <div className="component">
      <label className="title">Image: <span></span></label>
      <br />
        <br />
      Please upload an image of your dog. This image will be used on their
      profile and visible to other users.
      <br />
        <br />
      <input type="file" id="myFile" name="filename" required></input>
    </div>
  );
}
