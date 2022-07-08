import React from "react";

export default function Image() {
  return (
    <div>
      <label>Image:</label>
      <br />
      Please upload an image of your dog. This image will be used on their
      profile and visible to other users.
      <br />
      <input type="file" id="myFile" name="filename"></input>
    </div>
  );
}
