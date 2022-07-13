import axios from "axios";
import React, { useState } from "react";
import "../styles/Form.scss";
import City from "./UserForm/City";
import Distance from "./UserForm/Distance";
import Email from "./UserForm/Email";
import Password from "./UserForm/Password";
import UserName from "./UserForm/UserName";
import UserImage from "./UserForm/UserImage";
const bcrypt = require("bcryptjs");

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [distance, setDistance] = useState("");
  const [thumbnail_photo_url, setPhoto] = useState("");

  const formHandle = e => {
    e.preventDefault();
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);
    addDataToServer({
      name,
      city,
      email,
      thumbnail_photo_url,
      hashedpassword
    });
  };

  //Axios post request to send data to server

  const addDataToServer = data => {
    axios.post(`/api/owners`, data).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <form className="userapp" id="userform" onSubmit={formHandle}>
      <h1>User Registration:</h1>
      <h2>Tell Us About Yourself!</h2>
      <UserName onChange={setName} value={name} />
      <Email onChange={setEmail} value={email} />
      <Password onChange={setPassword} value={password} />
      <City onChange={setCity} value={city} />
      <Distance onChange={setDistance} value={distance} />
      <UserImage onChange={setPhoto} value={thumbnail_photo_url} />
      <div className="component">
        <button type="submit" className="submitbtn" onClick={formHandle}>
          Submit
        </button>
      </div>
    </form>
  );
}
