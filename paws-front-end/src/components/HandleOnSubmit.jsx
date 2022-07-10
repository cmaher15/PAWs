import axios from "axios";
import { useState } from "react";
import "../styles/Form.scss";
import Breed from "./Form/Breed";
import Title from "./Form/Title";
import Name from "./Form/Name";
import Gender from "./Form/Gender";
import Age from "./Form/Age";
import Size from "./Form/Size";
import Subtitle from "./Form/Subtitle";
import SecondSub from "./Form/SecondSub";
import Reactive from "./Form/Reactive";
import People from "./Form/People";
import DogSizeCompatibility from "./Form/DogSizeCompatibility";
import GenderCompatability from "./Form/GenderCompatability";
import BreedIncompatibility from "./Form/BreedIncompability";
import Description from "./Form/Description";
import Image from "./Form/Image";
import React from "react";

export default function HandleOnSubmit(props) {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [size, setSize] = useState("")
  const [reactive, setReactive] = useState(true)
  const [good_with_people, setPeople] = useState(true)
  const [size_compatibility, setDogComp] = useState({small: false, medium: false, large: false})
  const [gender_compatibility, setGenderComp] = useState([])
  const [breed_incompatibility, setBreedIncomp] = useState([])
  const [description, setDescription] = useState("")
  const [photo, setImage] = useState("")

  console.log("name", name)
  console.log("sizeCompatibility", size_compatibility)

  const onSizeCompatibilityChange = (size) => {
    const newSizeCompatibility = size_compatibility
    newSizeCompatibility[size] = !size_compatibility[size]
    console.log("new Size Comp", newSizeCompatibility)
    setDogComp(newSizeCompatibility)

  }

  const formHandle = (e) => {
    console.log("formhandle", e.target)
    e.preventDefault();
    addDataToServer({});;
  };

  const addDataToServer = (data) => {
    console.log("data", data)
    /** {name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url} */
    axios.post(`/api/dogs/`, data).then(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
      }
    );
  };
  
  return (
    <form className="dogapp" onSubmit={formHandle}>
      <Title />
      <Subtitle />
      <Name onChange={setName} value={name}/>
      <Breed />
      <Gender />
      <Age />
      <Size />
      <hr />
      <SecondSub />
      <Reactive />
      <People />
      <DogSizeCompatibility onChange={onSizeCompatibilityChange}/>
      <GenderCompatability />
      <BreedIncompatibility/>
      <Description />
      <Image />
      <div className="component">
      <button type="submit" id="submit" onChange={formHandle}>
      Submit
    </button>
    </div>
    </form>
  );
}
