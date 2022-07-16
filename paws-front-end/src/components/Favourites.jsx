import react, { useState } from "react";

export default function Favourites() {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite((current) => !current);
  };

  return (
    <div
      style={{ color: favourite ? 'darkred' : 'gray', }}
      onClick={handleClick}
    >
      <button>
        <i
          className="fa-solid fa-heart fa-2xl"
          onMouseOver={({ target }) => (target.style.color = "darkred")}
          onMouseOut={({ target }) => (target.style.color = "gray")}
        ></i>
      </button>
    </div>
  );
}
