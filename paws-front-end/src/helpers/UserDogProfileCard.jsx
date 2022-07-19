import "../styles/UsersDogs.css"

const UserDogProfileCard = function (props) {
  // const [dog, setDog] = useState(props.dog);

  return (
    <div className="dogProfile dogProfile-user">
      <div>
        <img className="dog" src={props.dog.photo_url} />
      </div>
      <span className="dogInfo">
        <h3>{props.dog.gender}</h3>
        <h3>{props.dog.name}</h3>
        <h3>{props.dog.age} years</h3>
      </span>
      <p className="description">{props.dog.description}</p>
      <div className="myDogIcons">
        <button className="editbutton">
        <i className="fa-solid fa-pen-to-square fa-2xl"></i>
        </button>
        <button className="deletebutton">
        <i className="fa-solid fa-trash-can fa-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export { UserDogProfileCard };
