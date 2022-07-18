const UserDogProfileCard = function (props) {
  // const [dog, setDog] = useState(props.dog);

  return (
    <div className="dogProfile">
      <div>
        <img className="dog" src={props.dog.photo_url} />
      </div>
      <span className="dogInfo">
        <h3>{props.dog.gender}</h3>
        <h3>{props.dog.breed}</h3>
        <h3>{props.dog.age} years</h3>
      </span>
      <p className="description">{props.dog.description}</p>
    </div>
  );
};

export { UserDogProfileCard };
