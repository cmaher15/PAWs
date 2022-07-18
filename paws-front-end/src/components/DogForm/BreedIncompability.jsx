import React from "react"

export default function BreedIncompatibility(props) {
  return (
    <div className="component">
    <label className="title">
      {" "}
      Which breed(s) of dogs is your dog NOT comfortable with? <br/>Select all that apply, if applicable.
    </label>{" "}<br/>
    <br />
    <br />
    <div className="scrollbox">
      <input className="input" type="checkbox" name="Afghan Hound"  value={props.breed_incompatibility} onChange={() => props.onChange("Afghan Hound")}/>Afghan Hound <br/>
      <input className="input" type="checkbox" name="Akita"  value={props.breed_incompatibility} onChange={() => props.onChange("Akita")}/>Akita <br/>
      <input className="input" type="checkbox" name="Alaskan Malemute"  value={props.breed_incompatibility} onChange={() => props.onChange("Alaskan Malemute")}/>Alaskan Malemute <br/>
      <input className="input" type="checkbox" name="Australian Cattle Dog"  value={props.breed_incompatibility} onChange={() => props.onChange("Australian Cattle Dog")}/>Australian Cattle Dog <br/>
      <input className="input" type="checkbox" name="Australian Shepherd"  value={props.breed_incompatibility} onChange={() => props.onChange("Australian Shepherd")}/>Australian Shepherd <br/>
      <input className="input" type="checkbox" name="Bassett Hound"  value={props.breed_incompatibility} onChange={() => props.onChange("Bassett Hound")}/>Bassett Hound<br/>
      <input className="input" type="checkbox" name="Beagle"  value={props.breed_incompatibility} onChange={() => props.onChange("Beagle")}/>Beagle <br/>
      <input className="input" type="checkbox" name="Bernese Mountain Dog"  value={props.breed_incompatibility} onChange={() => props.onChange("Bernese Mountain Dog")}/>Bernese Mountain Dog<br/>
      <input className="input" type="checkbox" name="Bloodhound"  value={props.breed_incompatibility} onChange={() => props.onChange("Bloodhound")}/>Bloodhound<br/>
      <input className="input" type="checkbox" name="Border Collie"  value={props.breed_incompatibility} onChange={() => props.onChange("Border Collie")}/>Border Collie <br/>
      <input className="input" type="checkbox" name="Boston Terrier"  value={props.breed_incompatibility} onChange={() => props.onChange("Boston Terrier")}/>Boston Terrier <br/>
      <input className="input" type="checkbox" name="Boxer"  value={props.breed_incompatibility} onChange={() => props.onChange("Boxer")}/>Boxer <br/>
      <input className="input" type="checkbox" name="Bulldog"  value={props.breed_incompatibility} onChange={() => props.onChange("Bulldog")}/>Bulldog <br/>
      <input className="input" type="checkbox" name="Bull Terrier"  value={props.breed_incompatibility} onChange={() => props.onChange("Bull Terrier")}/>Bull Terrier <br/>
      <input className="input" type="checkbox" name="Cane Corso"  value={props.breed_incompatibility} onChange={() => props.onChange("Cane Corso")}/>Cane Corso <br/>
      <input className="input" type="checkbox" name="Chihuahua"  value={props.breed_incompatibility} onChange={() => props.onChange("Chihuahua")}/>Chihuahua <br/>
      <input className="input" type="checkbox" name="Cocker Spaniel"  value={props.breed_incompatibility} onChange={() => props.onChange("Cocker Spaniel")}/>Cocker Spaniel <br/>
      <input className="input" type="checkbox" name="Coonhound"  value={props.breed_incompatibility} onChange={() => props.onChange("Coonhound")}/>Coonhound <br/>
      <input className="input" type="checkbox" name="Daschund"  value={props.breed_incompatibility} onChange={() => props.onChange("Daschund")}/>Daschund <br/>
      <input className="input" type="checkbox" name="Dalmatian"  value={props.breed_incompatibility} onChange={() => props.onChange("Dalmatian")}/>Dalmatian <br/>
      <input className="input" type="checkbox" name="Doberman"  value={props.breed_incompatibility} onChange={() => props.onChange("Doberman")}/>Doberman <br/>
      <input className="input" type="checkbox" name="German Shepherd"  value={props.breed_incompatibility} onChange={() => props.onChange("German Shepherd")}/>German Shepherd <br/>
      <input className="input" type="checkbox" name="Golden Retriever"  value={props.breed_incompatibility} onChange={() => props.onChange("Golden Retriever")}/>Golden Retriever <br/>
      <input className="input" type="checkbox" name="Great Dane"  value={props.breed_incompatibility} onChange={() => props.onChange("Great Dane")}/>Great Dane <br/>
      <input className="input" type="checkbox" name="Greyhound"  value={props.breed_incompatibility} onChange={() => props.onChange("Greyhound")}/>Greyhound <br/>
      <input className="input" type="checkbox" name="Havanese"  value={props.breed_incompatibility} onChange={() => props.onChange("Havanese")}/>Havanese<br/>
      <input className="input" type="checkbox" name="Husky"  value={props.breed_incompatibility} onChange={() => props.onChange("Husky")}/>Husky <br/>
      <input className="input" type="checkbox" name="Irish Setter"  value={props.breed_incompatibility} onChange={() => props.onChange("Irish Setter")}/>Irish Setter <br/>
      <input className="input" type="checkbox" name="Irish Wolfhound"  value={props.breed_incompatibility} onChange={() => props.onChange("Irish Wolfhound")}/>Irish Wolfhound <br/>
      <input className="input" type="checkbox" name="Labrador Retriever"  value={props.breed_incompatibility} onChange={() => props.onChange("Labrador Retriever")}/>Labrador Retriever <br/>
      <input className="input" type="checkbox" name="Lhasa Apso"  value={props.breed_incompatibility} onChange={() => props.onChange("Lhasa Apso")}/>Lhasa Apso <br/>
      <input className="input" type="checkbox" name="Maltese"  value={props.breed_incompatibility} onChange={() => props.onChange("Maltese")}/>Maltese <br/>
      <input className="input" type="checkbox" name="Mastiff"  value={props.breed_incompatibility} onChange={() => props.onChange("Mastiff")}/>Mastiff <br/>
      <input className="input" type="checkbox" name="Mutt"  value={props.breed_incompatibility} onChange={() => props.onChange("Mutt")}/>Mutt <br/>
      <input className="input" type="checkbox" name="Newfoundland"  value={props.breed_incompatibility} onChange={() => props.onChange("Newfoundland")}/>Newfoundland<br/>
      <input className="input" type="checkbox" name="Pit Bull"  value={props.breed_incompatibility} onChange={() => props.onChange("Pit Bull")}/>Pit Bull <br/>
      <input className="input" type="checkbox" name="Pomeranian"  value={props.breed_incompatibility} onChange={() => props.onChange("Pomeranian")}/>Pomeranian <br/>
      <input className="input" type="checkbox" name="Poodle"  value={props.breed_incompatibility} onChange={() => props.onChange("Poodle")}/>Poodle <br/>
      <input className="input" type="checkbox" name="Pug"  value={props.breed_incompatibility} onChange={() => props.onChange("Pug")}/>Pug <br/>
      <input className="input" type="checkbox" name="Rottweiler"  value={props.breed_incompatibility} onChange={() => props.onChange("Rottweiler")}/>Rottweiler <br/>
      <input className="input" type="checkbox" name="St. Bernard"  value={props.breed_incompatibility} onChange={() => props.onChange("St. Bernard")}/>St. Bernard <br/>
      <input className="input" type="checkbox" name="Samoyed"  value={props.breed_incompatibility} onChange={() => props.onChange("Samoyed")}/>Samoyed <br/>
      <input className="input" type="checkbox" name="Schnauzer"  value={props.breed_incompatibility} onChange={() => props.onChange("Schnauzer")}/>Schnauzer <br/>
      <input className="input" type="checkbox" name="Shar Pei"  value={props.breed_incompatibility} onChange={() => props.onChange("Shar Pei")}/>Shar Pei <br/>
      <input className="input" type="checkbox" name="Sheepdog"  value={props.breed_incompatibility} onChange={() => props.onChange("Sheepdog")}/>Sheepdog <br/>
      <input className="input" type="checkbox" name="Shiba Inu"  value={props.breed_incompatibility} onChange={() => props.onChange("Shiba Inu")}/>Shiba Inu <br/>
      <input className="input" type="checkbox" name="Shih Tzu"  value={props.breed_incompatibility} onChange={() => props.onChange("Shih Tzu")}/>Shih Tzu <br/>
      <input className="input" type="checkbox" name="Terrier"  value={props.breed_incompatibility} onChange={() => props.onChange("Terrier")}/>Terrier <br/>
      <input className="input" type="checkbox" name="Whippet"  value={props.breed_incompatibility} onChange={() => props.onChange("Whippet")}/> Whippet <br/>
      </div>
  </div>
  )
}