<<<<<<< HEAD
// JSX template for each dog profile
const dogProfileCard = function (dog) {
  console.log(dog);
  return (
    <div className="dogProfile">
      <div>
        <img className="dog" src={dog.photo_url} />
      </div>
      <span className="icons">
        <h1 className="dogName">{dog.name}</h1>
        <i
          className="fa-solid fa-heart fa-xl"
          onMouseOver={({ target }) => (target.style.color = "darkred")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i>
        <i
          className="fa-solid fa-message fa-xl"
          onMouseOver={({ target }) => (target.style.color = "cadetblue")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i>
      </span>
      <span className="locationInfo">
        <i className="fa-solid fa-location-dot fa-2xl"></i>
        <p className="distance">5 km away</p>
      </span>
      <span className="dogInfo">
        <h3>{dog.gender}</h3>
        <h3>{dog.breed}</h3>
        <h3>{dog.size}</h3>
      </span>
      <p className="description">{dog.description}</p>
      <span className="parent">
        <img className="userThumbnail" src={owner.thumbnail_photo_url} />
        <h4>Parent: {owner.name}</h4>
      </span>
    </div>
  );
};

export { dogProfileCard };
=======
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
>>>>>>> 4e9dfad106cd3db7aa48f42c5e2e149dbd32f13a
