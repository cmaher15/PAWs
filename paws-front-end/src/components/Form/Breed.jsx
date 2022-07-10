import React from "react";

export default function Breed(props) {
  return (
    <div className="component">
    <label className="title">
      {" "}
      Breed: 
    </label>{" "}
    <br />
    <br />
    <select
      name="breed"
      id="selectList"
      value={props.breed}
      onChange={(event) => props.onChange(event.target.value)}
      required
    >
       <option value="">Select a Breed</option>
      <option value="Afghan Hound">Afghan Hound</option>
      <option value="Akita">Akita</option>
      <option value="Alaskan Malemute">Alaskan Malemute</option>
      <option value="Australian Cattle Dog">Australian Cattle Dog</option>
      <option value="Australian Shepherd">Australian Shepherd</option>
      <option value="Bassett Hound">Bassett Hound</option>
      <option value="Beagle">Beagle</option>
      <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
      <option value="Bloodhound">Bloodhound</option>
      <option value="Border Collie">Border Collie</option>
      <option value="Boston Terrier">Boston Terrier</option>
      <option value="Boxer">Boxer</option>
      <option value="Bulldog">Bulldog</option>
      <option value="Bull Terrier">Bull Terrier</option>
      <option value="Cane Corso">Cane Corso</option>
      <option value="Chihuahua">Chihuahua</option>
      <option value="Cocker Spaniel">Cocker Spaniel</option>
      <option value="Coonhound">Coonhound</option>
      <option value="Daschund">Daschund</option>
      <option value="Dalmatian">Dalmatian</option>
      <option value="Doberman">Doberman</option>
      <option value="German Shepherd">German Shepherd</option>
      <option value="Golden Retriever">Golden Retriever</option>
      <option value="Great Dane">Great Dane</option>
      <option value="Greyhound">Greyhound</option>
      <option value="Havanese">Havanese</option>
      <option value="Husky">Husky</option>
      <option value="Irish Setter">Irish Setter</option>
      <option value="Irish Wolfhound">Irish Wolfhound</option>
      <option value="Labrador Retriever">Labrador Retriever</option>
      <option value="Lhasa Apso">Lhasa Apso</option>
      <option value="Maltese">Maltese</option>
      <option value="Mastiff">Mastiff</option>
      <option value="Mutt">Mutt</option>
      <option value="Newfoundland">Newfoundland</option>
      <option value="Pitbull">Pit Bull</option>
      <option value="Pomeranian">Pomeranian</option>
      <option value="Poodle">Poodle</option>
      <option value="Pug">Pug</option>
      <option value="Rottweiler">Rottweiler</option>
      <option value="St. Bernard">St. Bernard</option>
      <option value="Samoyed">Samoyed</option>
      <option value="Schnauzer">Schnauzer</option>
      <option value="Shar Pei">Shar Pei</option>
      <option value="Sheepdog">Sheepdog</option>
      <option value="Shiba Inu">Shiba Inu</option>
      <option value="Shih Tzu">Shih Tzu</option>
      <option value="Terrier">Terrier</option>
      <option value="Whippet">Whippet</option>
    </select>
    <br />
    <br />
    If you can't find their exact breed, please select the closest option!
  </div>
  );
}
