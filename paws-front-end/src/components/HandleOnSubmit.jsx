import { useState } from "react";
import axios from "axios";
import "../styles/Form.scss";

export default function HandleOnSubmit(e) {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [size, setSize] = useState("")
  const [reactive, setReactive] = useState("")
  const [people, setPeople] = useState("")
  const [dogComp, setDogComp] = useState("")
  const [genderComp, setGenderComp] = useState("")
  const [breedComp, setBreedComp] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  
  const formHandle = (e) => {
    e.preventDefault();
    addDataToServer({name, breed, gender, age, size, reactive, people, dogComp, genderComp, breedComp, description, image});
  };

  const addDataToServer = (data) => {
    axios.post("http://localhost:8001/api/dogs", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  
  return (
    <form className="dogapp" onSubmit={formHandle}>
      <h1>Pup Profile:</h1>
      <h2>Describe Your Doggo</h2>
      <div className="component">
        <label className="title" name="name">
          Name: <span></span>
          <br />
          <br />
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter your dog's name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="component">
        <label className="title">
          {" "}
          Breed: <span></span>
        </label>{" "}
        <br />
        <br />
        <select
          name="breed"
          id="selectList"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
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
      <div className="component">
        <label className="title" name="gender" required="required">
          Gender: <span></span>
        </label>{" "}
        <br />
        <br />
        <input
          className="input"
          name="gender"
          type="radio"
          required="required"
          value="female"
          checked={gender === "female"}
          onChange={(event) => setGender(event.target.value)}
        />
        Female <br />
        <input
          className="input"
          name="gender"
          type="radio"
          required="required"
          value={gender === "male"}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
      </div>
      <div className="component">
        <label className="title">
          Age: <span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </div>
      <div className="component">
        <label className="title" name="size" required="required">
          Size: <span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="size"
          type="radio"
          required="required"
          value={size === "small"}
          onChange={(event) => setSize(event.target.value)}
        />
        Small
        <br />
        <input
          className="input"
          name="size"
          type="radio"
          required="required"
          value={size === "medium"}
          onChange={(event) => setSize(event.target.value)}
        />
        Medium
        <br />
        <input
          className="input"
          name="size"
          type="radio"
          required="required"
          value={size === "large"}
          onChange={(event) => setSize(event.target.value)}
        />
        Large
      </div>
      <hr />
      <h2>Now Tell Us About Your Pup's Preferences</h2>
      <div className="component">
        <label className="title" name="reactive" required="required">
          Can they be wary of new dogs and have the potential to respond
          unpredictably?<span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="reactive"
          type="radio"
          required="required"
          value={reactive === true}
          onChange={(event) => setReactive(event.target.value)}
        />
        Yes
        <br />
        <input
          className="input"
          name="reactive"
          type="radio"
          required="required"
          value={reactive === false}
          onChange={(event) => setReactive(event.target.value)}
        />
        No
      </div>
      <div className="component">
        <label className="title" name="people" required="required">
          Are they good with new people?<span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="people"
          type="radio"
          required="required"
          value={people === false}
          onChange={(event) => setPeople(event.target.value)}
        />
        Yes
        <br />
        <input
          className="input"
          name="people"
          type="radio"
          required="required"
          value={people === true}
          onChange={(event) => setPeople(event.target.value)}
        />
        No
      </div>
      <div className="component">
        <label className="title" name="dogComp" required="required">
          {" "}
          What size(s) of dog does yours get along with? Select all that apply.{" "}
          <span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="small"
          type="checkbox"
          required="required"
          value={dogComp === "small"}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Small
        <br />
        <input
          className="input"
          name="medium"
          type="checkbox"
          required="required"
          value={dogComp === "medium"}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Medium
        <br />
        <input
          className="input"
          name="large"
          type="checkbox"
          required="required"
          value={dogComp === "large"}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Large
      </div>
      <div className="component">
        <label
          className="title"
          name="genderComp"
          required="required"
        >
          What gender(s) of dog does yours get along with? Select all that
          apply. <span></span>
        </label>
        <br />
        <br />
        <input
          className="input"
          name="male"
          type="checkbox"
          required="required"
          value={genderComp === "female"}
          onChange={(event) => setGenderComp(event.target.value)}
        />
        Female
        <br />
        <input
          className="input"
          name="female"
          type="checkbox"
          required="required"
          value={genderComp === "male"}
          onChange={(event) => setGenderComp(event.target.value)}
        />
        Male
      </div>
      <div className="component">
        <label className="title">
          {" "}
          Which breed(s) of dogs is your dog NOT comfortable with? 
        </label>{" "}
        <br />
        <br />
          <select
            name="list_box"
            size="49"
            value={breedComp}
            onChange={(event) => setBreedComp(event.target.value)}>
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
        Select all that apply.
      </div>
      <div className="component">
        <label className="title">
          Description: <span></span>
        </label>
        <br />
        <br />
        Please provide a brief description of your dog, including any other
        info/fun facts not covered in this form!
        <br />
        <br />
        <textarea
          className="input"
          name="description"
          required
          maxLength="255"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br />
        maximum 255 characters
      </div>
      <div className="component">
        <label className="title">
          Image: <span></span>
        </label>
        <br />
        <br />
        Please upload an image of your dog. This image will be used on their
        profile and visible to other users.
        <br />
        <br />
        <input
          type="file"
          id="myFile"
          name="filename"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        ></input>
      </div>
      <div className="component">
        <button type="button" id="submit" onClick={formHandle}>
          Submit
        </button>
      </div>
    </form>
  );
}
