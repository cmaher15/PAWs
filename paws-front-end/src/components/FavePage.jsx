import axios from "axios";
import { useState, useEffect } from "react";
import { DogProfileCard } from "../helpers/dogProfileCard";
import { v4 } from "uuid";

export default function FavePage(props) {
  console.log("areaOwners in Favs: ", props.areaOwners);
  const [favDogs, setFavDogs] = useState();
  const [favouritesLoading, setFavouritesLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/favourites/${window.localStorage.getItem("paws_id")}`).then(
      response => {
        console.log("response.data", response.data);
        setFavDogs(response.data);
        setFavouritesLoading(false);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  const renderFavourites = function (dogs, owners) {
    let array = [];
    console.log("dogs before map:", dogs);
    dogs.map(dog => {
      let dogOwner;
      for (let owner of owners) {
        if (owner.id === dog.owners_id) {
          dogOwner = owner;
        }
      }
      console.log("dogOwner: before push", dogOwner);
      array.push(<DogProfileCard dog={dog} owner={dogOwner} key={v4()} />);
    });
    return array;
  };

  if (favouritesLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="doggos">
        {renderFavourites(favDogs, props.areaOwners)}
      </div>
    );
  }
}
