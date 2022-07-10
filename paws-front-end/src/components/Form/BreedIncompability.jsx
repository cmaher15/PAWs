import { useState } from "react";

export default function BreedIncompatibility() {
  const [breed_incompatibility, setBreedIncomp] = useState([])
  return (
    <div className="component">
    <label className="title">
      {" "}
      Which breed(s) of dogs is your dog NOT comfortable with? Select all that apply, if applicable.
    </label>{" "}<br/>
    <br />
    <br />
      <input className="input" type="checkbox" name="Afghan Hound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Afghan Hound <br/>
      <input className="input" type="checkbox" name="Akita"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Akita <br/>
      <input className="input" type="checkbox" name="Alaskan Malemute"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Alaskan Malemute <br/>
      <input className="input" type="checkbox" name="Australian Cattle Dog"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Australian Cattle Dog <br/>
      <input className="input" type="checkbox" name="Australian Shepherd"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Australian Shepherd <br/>
      <input className="input" type="checkbox" name="Bassett Hound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Bassett Hound<br/>
      <input className="input" type="checkbox" name="Beagle"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Beagle <br/>
      <input className="input" type="checkbox" name="Bernese Mountain Dog"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Bernese Mountain Dog<br/>
      <input className="input" type="checkbox" name="Bloodhound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Bloodhound<br/>
      <input className="input" type="checkbox" name="Border Collie"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Border Collie <br/>
      <input className="input" type="checkbox" name="Boston Terrier"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Boston Terrier <br/>
      <input className="input" type="checkbox" name="Boxer"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Boxer <br/>
      <input className="input" type="checkbox" name="Bulldog"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Bulldog <br/>
      <input className="input" type="checkbox" name="Bull Terrier"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Bull Terrier <br/>
      <input className="input" type="checkbox" name="Cane Corso"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Cane Corso <br/>
      <input className="input" type="checkbox" name="Chihuahua"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Chihuahua <br/>
      <input className="input" type="checkbox" name="Cocker Spaniel"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Cocker Spaniel <br/>
      <input className="input" type="checkbox" name="Coonhound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Coonhound <br/>
      <input className="input" type="checkbox" name="Daschund"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Daschund <br/>
      <input className="input" type="checkbox" name="Dalmatian"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Dalmatian <br/>
      <input className="input" type="checkbox" name="Doberman"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Doberman <br/>
      <input className="input" type="checkbox" name="German Shepherd"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>German Shepherd <br/>
      <input className="input" type="checkbox" name="Golden Retriever"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Golden Retriever <br/>
      <input className="input" type="checkbox" name="Great Dane"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Great Dane <br/>
      <input className="input" type="checkbox" name="Greyhound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Greyhound <br/>
      <input className="input" type="checkbox" name="Havanese"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Havanese<br/>
      <input className="input" type="checkbox" name="Husky"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Husky <br/>
      <input className="input" type="checkbox" name="Irish Setter"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Irish Setter <br/>
      <input className="input" type="checkbox" name="Irish Wolfhound"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Irish Wolfhound <br/>
      <input className="input" type="checkbox" name="Labrador Retriever"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Labrador Retriever <br/>
      <input className="input" type="checkbox" name="Lhasa Apso"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Lhasa Apso <br/>
      <input className="input" type="checkbox" name="Maltese"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Maltese <br/>
      <input className="input" type="checkbox" name="Mastiff"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Mastiff <br/>
      <input className="input" type="checkbox" name="Mutt"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Mutt <br/>
      <input className="input" type="checkbox" name="Newfoundland"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Newfoundland<br/>
      <input className="input" type="checkbox" name="Pit Bull"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Pit Bull <br/>
      <input className="input" type="checkbox" name="Pomeranian"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Pomeranian <br/>
      <input className="input" type="checkbox" name="Poodle"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Poodle <br/>
      <input className="input" type="checkbox" name="Pug"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Pug <br/>
      <input className="input" type="checkbox" name="Rottweiler"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Rottweiler <br/>
      <input className="input" type="checkbox" name="St. Bernard"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>St. Bernard <br/>
      <input className="input" type="checkbox" name="Samoyed"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Samoyed <br/>
      <input className="input" type="checkbox" name="Schnauzer"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Schnauzer <br/>
      <input className="input" type="checkbox" name="Shar Pei"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Shar Pei <br/>
      <input className="input" type="checkbox" name="Sheepdog"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Sheepdog <br/>
      <input className="input" type="checkbox" name="Shiba Inu"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Shiba Inu <br/>
      <input className="input" type="checkbox" name="Shih Tzu"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Shih Tzu <br/>
      <input className="input" type="checkbox" name="Terrier"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/>Terrier <br/>
      <input className="input" type="checkbox" name="Whippet"  value={breed_incompatibility} onChange={(event) => setBreedIncomp(event.target.value)}/> Whippet <br/>

  </div>
  )
}