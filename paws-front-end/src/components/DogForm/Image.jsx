import React from "react";


export default function Image(props) {
  return (
    <div className="component">
      <label className="title">Image:</label>
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
      value={props.photo_url}
      onChange={(event) => props.onChange(event.target.value)}
      required
    ></input>
    </div>
  );
}
