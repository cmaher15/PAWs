import axios from "axios";
import { DogProfileCard } from "../helpers/dogProfileCard";

export default function FavePage() {
  const userID = document.cookie.slice(7);
  axios.get(`/api/favourites/${userID}`).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
