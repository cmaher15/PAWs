import axios from "axios";

// JSX template for each dog profile
const dogProfileCard = function (dog) {
  const [isShown, setIsShown] = useState(false);

  const handleChat = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="dogProfile">
      <div>
        <img className="dog" src={dog.dogs_photo} />
      </div>
      <span className="icons">
        <h1 className="dogName">{dog.dogs_name}</h1>
        <button className="favourite">
          <i
            className="fa-solid fa-heart fa-2xl"
            onMouseOver={({ target }) => (target.style.color = "darkred")}
            onMouseOut={({ target }) => (target.style.color = "gray")}
          ></i>
        </button>
        <button className="sendChatBtn" onClick={handleChat}>
          <i
            className="fa-solid fa-message fa-2xl"
            onMouseOver={({ target }) => (target.style.color = "cadetblue")}
            onMouseOut={({ target }) => (target.style.color = "gray")}
          ></i>
        </button>
      </span>
      <span className="locationInfo">
        <i className="fa-solid fa-location-dot fa-2xl"></i>
        <p className="distance">5 km away</p>
      </span>
      <span className="dogInfo">
        <h3>{dog.gender}</h3>
        <h3>{dog.breed}</h3>
        <h3>{dog.age}</h3>
      </span>
      <p className="description">{dog.description}</p>
      <span className="parent">
        <img className="userThumbnail" src={dog.owners_photo} />
        <h4>Parent: {dog.owners_name}</h4>
      </span>
      <div>{isShown && <Chat />}</div>
    </div>
  );
};

export { dogProfileCard };



// 1) send dog to DB
// 2) find dogs that are compatible with THIS dog (based on its size, gender, breed)
// 3) once found, compare the compatibilities (make sure good with people and reactive match as well as the size, gender, and breed compatibilities eg, make sure the dog we sent is compatible with the size/gender/breed of the dogs that may be compatible with it)


/* SELECT * FROM DOGS WHERE (size of input dog) ?| size_compatibility) AND (gender of dog) ?| gender_compatibility AND (breed of input dog IS NOT ?! breed_incompatability) AND (size_compatibility of input dog ?! size_compatibility) AND (gender_compatibility of input dog ?! gender_compatibility AND (reactive is equal) AND (good_with_people is equal) AND (breed_incompatibility of input dog does NOT match breed)) */