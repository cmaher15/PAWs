import { useState } from "react";
import axios from "axios";
import "../styles/Form.scss";

export default function HandleOnSubmit(e) {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [size, setSize] = useState("")
  const [reactive, setReactive] = useState(true)
  const [good_with_people, setPeople] = useState(true)
  const [size_compatibility, setDogComp] = useState("")
  const [gender_compatibility, setGenderComp] = useState("")
  const [breed_compatibility, setBreedComp] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setImage] = useState("")

  
  const formHandle = (e) => {
    e.preventDefault();
    addDataToServer({name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_compatibility, description, photo});
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
          value={size}
          onChange={() => setSize("small")}
        />
        Small
        <br />
        <input
          className="input"
          name="size"
          type="radio"
          required="required"
          value={size}
          onChange={() => setSize("medium")}
        />
        Medium
        <br />
        <input
          className="input"
          name="size"
          type="radio"
          required="required"
          value={size}
          onChange={() => setSize("large")}
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
          value={reactive}
          onChange={(event) => setReactive(true)}
        />
        Yes
        <br />
        <input
          className="input"
          name="reactive"
          type="radio"
          required="required"
          value={reactive}
          onChange={(event) => setReactive(false)}
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
          name="good_with_people"
          type="radio"
          required="required"
          value={good_with_people}
          onChange={(event) => setPeople(true)}
        />
        Yes
        <br />
        <input
          className="input"
          name="good_with_people"
          type="radio"
          required="required"
          value={good_with_people}
          onChange={(event) => setPeople(false)}
        />
        No
      </div>
      <div className="component">
        <label className="title" name="size_compatibility" required="required">
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
          value={size_compatibility}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Small
        <br />
        <input
          className="input"
          name="medium"
          type="checkbox"
          required="required"
          value={size_compatibility}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Medium
        <br />
        <input
          className="input"
          name="large"
          type="checkbox"
          required="required"
          value={size_compatibility}
          onChange={(event) => setDogComp(event.target.value)}
        />
        Large
      </div>
      <div className="component">
        <label
          className="title"
          name="gender_compatibility"
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
          value={gender_compatibility}
          onChange={(event) => setGenderComp(event.target.value)}
        />
        Female
        <br />
        <input
          className="input"
          name="female"
          type="checkbox"
          required="required"
          value={gender_compatibility}
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
          <input className="input" type="checkbox" name="Afghan Hound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Afghan Hound <br/>
          <input className="input" type="checkbox" name="Akita"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Akita <br/>
          <input className="input" type="checkbox" name="Alaskan Malemute"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Alaskan Malemute <br/>
          <input className="input" type="checkbox" name="Australian Cattle Dog"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Australian Cattle Dog <br/>
          <input className="input" type="checkbox" name="Australian Shepherd"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Australian Shepherd <br/>
          <input className="input" type="checkbox" name="Bassett Hound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Bassett Hound<br/>
          <input className="input" type="checkbox" name="Beagle"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Beagle <br/>
          <input className="input" type="checkbox" name="Bernese Mountain Dog"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Bernese Mountain Dog<br/>
          <input className="input" type="checkbox" name="Bloodhound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Bloodhound<br/>
          <input className="input" type="checkbox" name="Border Collie"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Border Collie <br/>
          <input className="input" type="checkbox" name="Boston Terrier"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Boston Terrier <br/>
          <input className="input" type="checkbox" name="Boxer"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Boxer <br/>
          <input className="input" type="checkbox" name="Bulldog"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Bulldog <br/>
          <input className="input" type="checkbox" name="Bull Terrier"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Bull Terrier <br/>
          <input className="input" type="checkbox" name="Cane Corso"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Cane Corso <br/>
          <input className="input" type="checkbox" name="Chihuahua"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Chihuahua <br/>
          <input className="input" type="checkbox" name="Cocker Spaniel"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Cocker Spaniel <br/>
          <input className="input" type="checkbox" name="Coonhound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Coonhound <br/>
          <input className="input" type="checkbox" name="Daschund"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Daschund <br/>
          <input className="input" type="checkbox" name="Dalmatian"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Dalmatian <br/>
          <input className="input" type="checkbox" name="Doberman"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Doberman <br/>
          <input className="input" type="checkbox" name="German Shepherd"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>German Shepherd <br/>
          <input className="input" type="checkbox" name="Golden Retriever"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Golden Retriever <br/>
          <input className="input" type="checkbox" name="Great Dane"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Great Dane <br/>
          <input className="input" type="checkbox" name="Greyhound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Greyhound <br/>
          <input className="input" type="checkbox" name="Havanese"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Havanese<br/>
          <input className="input" type="checkbox" name="Husky"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Husky <br/>
          <input className="input" type="checkbox" name="Irish Setter"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Irish Setter <br/>
          <input className="input" type="checkbox" name="Irish Wolfhound"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Irish Wolfhound <br/>
          <input className="input" type="checkbox" name="Labrador Retriever"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Labrador Retriever <br/>
          <input className="input" type="checkbox" name="Lhasa Apso"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Lhasa Apso <br/>
          <input className="input" type="checkbox" name="Maltese"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Maltese <br/>
          <input className="input" type="checkbox" name="Mastiff"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Mastiff <br/>
          <input className="input" type="checkbox" name="Mutt"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Mutt <br/>
          <input className="input" type="checkbox" name="Newfoundland"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Newfoundland<br/>
          <input className="input" type="checkbox" name="Pit Bull"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Pit Bull <br/>
          <input className="input" type="checkbox" name="Pomeranian"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Pomeranian <br/>
          <input className="input" type="checkbox" name="Poodle"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Poodle <br/>
          <input className="input" type="checkbox" name="Pug"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Pug <br/>
          <input className="input" type="checkbox" name="Rottweiler"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Rottweiler <br/>
          <input className="input" type="checkbox" name="St. Bernard"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>St. Bernard <br/>
          <input className="input" type="checkbox" name="Samoyed"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Samoyed <br/>
          <input className="input" type="checkbox" name="Schnauzer"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Schnauzer <br/>
          <input className="input" type="checkbox" name="Shar Pei"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Shar Pei <br/>
          <input className="input" type="checkbox" name="Sheepdog"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Sheepdog <br/>
          <input className="input" type="checkbox" name="Shiba Inu"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Shiba Inu <br/>
          <input className="input" type="checkbox" name="Shih Tzu"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Shih Tzu <br/>
          <input className="input" type="checkbox" name="Terrier"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Terrier <br/>
          <input className="input" type="checkbox" name="Whippet"  value={breed_compatibility} onChange={(event) => setBreedComp(event.target.value)}/>Whippet <br/>
          
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
          name="photo"
          value={photo}
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
