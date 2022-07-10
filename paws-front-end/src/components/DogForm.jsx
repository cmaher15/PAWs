import React from "react";
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
import Submit from "./Form/Submit";

export default function DogForm() {
  return (
    <form>
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
      <Submit />
    </form>
  );
}
