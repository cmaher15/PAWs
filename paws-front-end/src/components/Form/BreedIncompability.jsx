import { useState } from "react";

export default function BreedIncompatibility() {
  const breeds = ["Afghan Hound", "Akita", "Alaskan Malemute", "Australian Cattle Dog", "Australian Shepherd", "Bassett Hound", "Beagle", "Bernese Mountain Dog", "Bloodhound", "Border Collie", "Boston Terrier", "Boxer", "Bulldog", "Bull Terrier", "Cane Corso", "Chihuahua", "Cocker Spaniel", "Coonhound", "Daschund", "Dalmatian", "Doberman", "German Shepherd", "Golden Retriever", "Great Dane", "Greyhound", "Havanese", "Husky", "Irish Setter", "Irish Wolfhound", "Labrador Retriever", "Lhasa Apso", "Maltese", "Mastiff", "Mutt", "Newfoundland", "Pit Bull", "Pomeranian", "Poodle", "Pug", "Rottweiler", "St. Bernard", "Samoyed", "Schnauzer", "Sharpei", "Sheepdog", "Shiba Inu", "Shih Tzu", "Terrier", "Whippet"]
  return (
    <div className="component">
    <label className="title">
      {" "}
      Which breed(s) of dogs is your dog NOT comfortable with? Select all that apply, if applicable.
    </label>{" "}<br/>
    {breeds.map((breed, index) => (
      <div key={index}>
        <input value={breed} type="checkbox" />
        <span id="breed">{breed}</span>
        </div>
    ))}
  </div>
  )
}