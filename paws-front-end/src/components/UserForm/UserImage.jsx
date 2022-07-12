import React from "react";

export default function UserImage(props) {
  return (
    <div className="component">
    <label className="title">
      Image: 
    </label>
    <br />
    <br />
    Please upload an image of yourself. This image will be used on your profile and be seen by other users.
    <br />
    <br />
    <input
      type="file"
      id="myFile1"
      name="photo"
      value={props.thumbnail_photo_url}
      onChange={(event) => props.onChange(event.target.value)}
      required
    ></input>
  </div>
  );
}
