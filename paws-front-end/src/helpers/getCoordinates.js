// Async request for user's coordiates using Geolocation API
const fetchCoordinates = async function (getCoordinates) {
  const results = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(getCoordinates(position), reject);
    });
  });
  return results;
};

// Add latitude and longitude returned from fetchCoordinates to an object
const getCoordinates = function (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return { latitude: latitude, longitude: longitude };
};

const apiLocationSetState = async function (
  coordinatesPromise,
  getCoordinates,
  setUserCoordinates
) {
  const res = await coordinatesPromise(getCoordinates);
  setUserCoordinates(res);
};

// Send latitude and longitude coordinates-object to server
const sendCoordinatesToServer = function (userCoordinates, ownerId) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `/api/owners/${ownerId}`);
  xhr.send(userCoordinates);
};

export {
  getCoordinates,
  fetchCoordinates,
  apiLocationSetState,
  sendCoordinatesToServer
};
