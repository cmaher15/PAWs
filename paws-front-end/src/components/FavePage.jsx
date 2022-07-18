import axios from "axios";
import { useState, useEffect } from "react";
import { DogProfileCard } from "../helpers/dogProfileCard";

export default function FavePage(props) {
  console.log("areaOwners in Favs: ", props.areaOwners);
  const [favDogs, setFavDogs] = useState();
  const [favouritesLoading, setFavouritesLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/favourites/${window.localStorage.getItem("paws_id")}`).then(
      response => {
        setFavDogs(response.data);
        setFavouritesLoading(false);
      },
      error => {
        console.log(error);
      }
    );
  }, []);
  if (favouritesLoading) {
    return <p>Loading...</p>;
  } else {
    return favDogs.map(dog => {
      let owner;
      for (let areaOwner of props.areaOwners) {
        if (areaOwner.id === dog.owners_id) {
          owner = areaOwner;
        }
      }
      return <DogProfileCard dog={dog} owner={owner} key={dog.id} />;
    });
  }
}
