import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Form.css";
import Breed from "./DogForm/Breed";
import Name from "./DogForm/Name";
import Gender from "./DogForm/Gender";
import Age from "./DogForm/Age";
import Size from "./DogForm/Size";
import Reactive from "./DogForm/Reactive";
import OkReactive from "./DogForm/OkReactive";
import DogSizeCompatibility from "./DogForm/DogSizeCompatibility";
import GenderCompatability from "./DogForm/GenderCompatability";
import BreedIncompatibility from "./DogForm/BreedIncompability";
import Description from "./DogForm/Description";
import Status from "./Status";
import Image from "./DogForm/Image";
import { useNavigate } from "react-router-dom";
//Main function to handle dog registration and form submission for dog profile

export default function RegisterDog(props) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [reactive, setReactive] = useState(true);
  const [good_with_reactive_dogs, setOKReactive] = useState(true);
  const [size_compatibility, setDogComp] = useState({});
  const [gender_compatibility, setGenderComp] = useState({});
  const [breed_incompatibility, setBreedIncomp] = useState({});
  const [description, setDescription] = useState("");
  const [photo_url, setImage] = useState("");
  const [isShown, setIsShown] = useState(false);
  const owner_id = window.localStorage.getItem("paws_id");

  // Function to be used to redirect to user-dogs after submit
  const navigate = useNavigate();

  //Function to manage checked box status in size compatibility form section

  const onSizeCompatibilityChange = size => {
    const newSizeCompatibility = size_compatibility;
    newSizeCompatibility[size] = !size_compatibility[size];
    setDogComp(newSizeCompatibility);
  };

  //Function to manage checked box status in gender compatibility form section

  const onGenderCompatibilityChange = gender => {
    const newGenderCompatibility = gender_compatibility;
    newGenderCompatibility[gender] = !size_compatibility[gender];
    setGenderComp(newGenderCompatibility);
  };

  //Function to manage checked box status in breed compatibility form section

  const checkBreedIncompatibility = breed => {
    const newBreedIncompatibility = breed_incompatibility;
    newBreedIncompatibility[breed] = !breed_incompatibility[breed];
    setBreedIncomp(newBreedIncompatibility);
  };

  //Function to manage status "pop up" component
  const showStatus = event => {
    setIsShown(current => !current);
  };

  //Function to add data to server on form submission

  const formHandle = e => {
    e.preventDefault();
    showStatus();
    const formData = new FormData();
    formData.append("owner_id", owner_id);
    formData.append("name", name);
    formData.append("breed", breed);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("size", size);
    formData.append("reactive", reactive);
    formData.append("good_with_reactive_dogs", good_with_reactive_dogs);
    formData.append("size_compatibility", JSON.stringify(size_compatibility));
    formData.append(
      "gender_compatibility",
      JSON.stringify(gender_compatibility)
    );
    formData.append(
      "breed_incompatibility",
      JSON.stringify(breed_incompatibility)
    );
    formData.append("description", description);
    formData.append("photo_url", photo_url);
    addDataToServer(formData);
  };

  //Axios post request to send data to server

  const addDataToServer = data => {
    axios.post(`/api/dogs/`, data).then(
      response => {
        console.log(response);
        props.setUrlPath("/users-dogs");
        navigate("/users-dogs");
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <form className="dogapp" id="dogform" onSubmit={formHandle}>
      <h1>Pup Profile:</h1>
      <h2>Describe Your Doggo</h2>
      <Name onChange={setName} value={name} />
      <Breed onChange={setBreed} value={breed} />
      <Gender onChange={setGender} value={gender} />
      <Age onChange={setAge} value={age} />
      <Size onChange={setSize} value={size} />
      <hr />
      <h2>Now Tell Us About Your Pup's Preferences</h2>
      <Reactive onChange={setReactive} value={reactive} />
      <OkReactive onChange={setOKReactive} value={good_with_reactive_dogs} />
      <DogSizeCompatibility onChange={onSizeCompatibilityChange} />
      <GenderCompatability onChange={onGenderCompatibilityChange} />
      <BreedIncompatibility
        onChange={checkBreedIncompatibility}
        value={breed_incompatibility}
      />
      <Description onChange={setDescription} value={description} />
      <Image onChange={setImage} value={photo_url} />
      <div className="component">
        {/* <Link
          to={"/"}
          onClick={() => {
            props.setUrlPath("/");
          }}
          onChange={formHandle}
        > */}
        <button
          type="submit"
          className="submitbtn"
          onChange={() => {
            formHandle;
          }}
        >
          Submit
        </button>
        {/* </Link> */}
      </div>
      {/* <div>{isShown && <Status />}</div> */}
    </form>
  );
}
