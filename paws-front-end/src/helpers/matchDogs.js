const matchDogs = function (dogs, userDog) {
  const matches = [];

  // userDog's profile
  const reactive = userDog.reactive;
  const sizeCompatibility = userDog.size_compatibility;

  // Does the user's dog get along with females? Males?
  const userLikeFemales = userDog.gender_compatibility["female"];
  const userLikeMales = userDog.gender_compatibility["male"];

  for (let dog of dogs) {
    // REACTIVITY
    if (dog.reactive === true && reactive === true) continue; // DISCUSSION

    // Good with people **I THINK WE SHOULD REMOVE THIS**

    // SIZE COMPATIBILITY
    const userCompatible = false; // User dog compatible with size og other dog
    const dogCompatible = false; // Dog compatible with user dog size;

    // Check if user dog's size preferences match dog's size
    for (let sizePref of sizeCompatibility) {
      // If the size of the dog matches a compatibility of user's dog:
      if (dog.size === sizePref) userCompatible = true;
    }
    // Check if dog's size preferences match the user dog
    for (let sizePref of dog.sizeCompatibility) {
      if (userDog.size === sizePref) dogCompatible = true;
    }
    // If both dogs do not match each other's size preference, skip to next dog
    if (!userCompatible || !dogCompatible) continue;

    // GENDER COMPATIBILITY
    const dogLikeFemales = dog.gender_compatibility["female"];
    const dogLikeMales = dog.gender_compatibility["male"];

    // Test to determine if user dog is gender compatible with dog
    const userGenderCompatible = false;
    if (dog.gender === "female" && userLikeFemales) {
      userGenderCompatible = true;
    } else if (dog.gender === "male" && userLikeMales) {
      userGenderCompatible = true;
    }

    const dogGenderCompatible = false;
    // Dog gender compatible with userDog
    if (userDog.gender === "female" && dogLikeFemales) {
      UserGenderCompatible = true;
    } else if (userDog.gender === "male" && dogLikeMales) {
      dogGenderCompatible = true;
    }
    // Both dogs must be compatible with each other's gender
    if (!userGenderCompatible && !dogGenderCompatible) continue;

    // BREED INCOMPATIBILITY
    const userBadBreeds = Object.keys(userDog.breed_incompatibility);
    const dogBadBreeds = Object.keys(dog.breed_incompatibility);

    // User dog doesn't like the compare dog's breed, skip to next dog
    for (let badBreed of userBadBreeds) {
      if (dog.breed === badBreed) continue;
    }

    // Compare dog doesn't like user dog's breed, skip to next dog
    for (let badBreed of dogBadBreeds) {
      if (userDog.breed === badBreed) continue;
    }
  }
};

export { matchDogs };
