import React from "react";

export default function UserImage(props) {
  return (
    <div className="component">
      <br/>
    <label className="title">
      Image: 
    </label>
    <br />
    <p className="photoupload">Please upload an image of yourself.<br/> This image will be used on your profile and be seen by other users.</p>
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
