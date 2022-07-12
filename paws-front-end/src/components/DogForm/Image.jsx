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
      Please upload an image of your dog. This image will be used on their
      profile and visible to other users.
      <br />
      <br />
      {/* <input type="file" />
      <script src="//static.filestackapi.com/filestack-js/3.x.x/filestack.min.js"></script> */}
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
