const getCoordinates = function (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return { latitude: latitude, longitude: longitude };
};

const sendCoordinatesToServer = function (userCoordinates, ownerId) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `/api/owners/${ownerId}`);
  xhr.send(userCoordinates);
};

export { getCoordinates, sendCoordinatesToServer };
