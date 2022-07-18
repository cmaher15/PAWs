import axios from "axios";
import React, { useState } from "react";
import "../styles/Form.css";
import City from "./UserForm/City";
import Distance from "./UserForm/Distance";
import Email from "./UserForm/Email";
import Password from "./UserForm/Password";
import UserName from "./UserForm/UserName";
import UserImage from "./UserForm/UserImage";
import { useNavigate } from "react-router-dom";

export default function RegisterUser(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [distance, setDistance] = useState("");
  const [thumbnail_photo_url, setPhoto] = useState("");
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("city", city);
    formData.append("email", email);
    formData.append("thumbnail_photo_url", thumbnail_photo_url);
    addDataToServer(formData);
  };

  //Axios post request to send data to server

  const addDataToServer = (data) => {
    axios.post(`/api/owners`, data).then(
      (response) => {
        console.log(response);
        props.setUrlPath('/')
        navigate('/')
      },
      (error) => {
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
        <button
          type="submit"
          className="submitbtn"
          onChange={() => {
            formHandle;
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
