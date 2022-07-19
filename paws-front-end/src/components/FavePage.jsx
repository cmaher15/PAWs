import axios from "axios";
import { useState, useEffect } from "react";
import { DogProfileCard } from "../helpers/dogProfileCard";
import { v4 } from "uuid";

export default function FavePage(props) {
  const renderFavourites = function (dogs, owners) {
    // Fetch list of favourites
    useEffect(() => {
      props.getFavourites();
    }, []);

    let array = [];
    dogs.map(dog => {
      let dogOwner;
      for (let owner of owners) {
        if (owner.id === dog.owners_id) {
          dogOwner = owner;
        }
      }
      array.push(
        <DogProfileCard
          dog={dog}
          owner={dogOwner}
          key={v4()}
          favourite={true}
        />
      );
    });
    return array;
  };

  return (
    <div className="doggos">
      {renderFavourites(props.favDogs, props.areaOwners)}
    </div>
  );
}
