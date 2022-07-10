import axios from "axios";
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

export default function HandleOnSubmit(props) {


  const formHandle = (e) => {
    e.preventDefault();
    addDataToServer({});;
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
      <Title />
      <Subtitle />
      <Name />
      <Breed />
      <Gender />
      <Age />
      <Size />
      <hr />
      <SecondSub />
      <Reactive />
      <People />
      <DogSizeCompatibility />
      <GenderCompatability />
      <BreedIncompatibility/>
      <Description />
      <Image />
      <div className="component">
      <button type="button" id="submit" onChange={formHandle}>
      Submit
    </button>
    </div>
    </form>
  );
}
