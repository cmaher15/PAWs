import { useState } from "react";
import axios from "axios";
import "../styles/Form.scss";

export default function HandleOnSubmit(e) {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [size, setSize] = useState("")
  const [reactive, setReactive] = useState(true)
  const [good_with_people, setPeople] = useState(true)
  const [size_compatibility, setDogComp] = useState([])
  const [gender_compatibility, setGenderComp] = useState([])
  const [breed_compatibility, setBreedComp] = useState([])
  const [description, setDescription] = useState("")
  const [photo, setImage] = useState("")


  const formHandle = (e) => {
    e.preventDefault();
    addDataToServer({name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_compatibility, description, photo});
  };

  const addDataToServer = (data) => {
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
      <hr />
     


    </form>
  );
}
