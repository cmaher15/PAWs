import React from "react";
// import * as filestack from "filestack-js";

export default function Image(props) {
  // const client = filestack.init("AiisZJhdbQK2bEQwvqRqKz");
  // client.picker().open()
  return (
    <div className="component">
      <label className="title">Image:</label>
      <br />
      <br />
      Please upload an image of your dog. <br/>This image will be used on their
      profile and visible to other users.
      <br />
      <br />
      <input
      type="file"
      id="myFile"
      name="photo"
      value={props.photo_url}
      onChange={(event) => props.onChange(event.target.files[0])}
      required
    ></input>
    </div>
  );
}
