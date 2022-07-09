import React from "react";

export default function Image() {
  return (
    <div class="component">
      <label class="title">Image:</label>
      <br />
        <br />
      Please upload an image of your dog. This image will be used on their
      profile and visible to other users.
      <br />
        <br />
      <input type="file" id="myFile" name="filename"></input>
    </div>
  );
}
