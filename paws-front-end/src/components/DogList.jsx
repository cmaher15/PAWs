import React from "react";
import { DogProfileCard } from "../helpers/dogProfileCard";
import DogMatches from "./DogMatches";
import DogProfile from "./DogProfile";
import FetchProfiles from "./FetchProfiles";


export default function DogList () {
  return (
    <div className="doggos">
      <DogProfile className="doggos-item"/>
      <DogProfile className="doggos-item"/>
      <DogProfile className="doggos-item"/>
      <DogProfile className="doggos-item"/>
    </div>
  )
}