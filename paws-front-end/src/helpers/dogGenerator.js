const generateDogs = function (number) {
  const age = 0;

  const breeds = [
    "Afghan Hound",
    "Akita",
    "Alaskan Malemute",
    "Australian Cattle Dog",
    "Australian Shepherd",
    "Bassett Hound",
    "Beagle",
    "Bernese Mountain Dog",
    "Bloodhound",
    "Border Collie",
    "Boston Terrier",
    "Boxer",
    "Bulldog",
    "Bull Terrier",
    "Cane Corso",
    "Chihuahua",
    'Cocker Spaniel">Cocker Spaniel',
    "Coonhound",
    "Daschund",
    "Dalmatian",
    "Doberman",
    "German Shepherd",
    "Golden Retriever",
    "Great Dane",
    "Greyhound",
    "Havanese",
    "Husky",
    "Irish Setter",
    "Irish Wolfhound",
    "Labrador Retriever",
    "Lhasa Apso",
    "Maltese",
    "Mastiff",
    "Mutt",
    "Newfoundland",
    "Pit Bull",
    "Pomeranian",
    "Poodle",
    "Pug",
    "Rottweiler",
    "St. Bernard",
    "Samoyed",
    "Schnauzer",
    "Shar Pei",
    "Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Terrier"
  ];

  const sizeCompatibility = [
    ["small", "medium", "large"],
    ["small", "medium"],
    ["medium", "large"],
    ["small", "large"]
  ];

  const gender = ["female", "male"];

  const genderIncompatibility = [["female", "male"], ["female"], ["male"]];

  const photo =
    "https://pawsofcoronado.org/wp-content/uploads/2016/01/cropped-favicon.png";

  const femaleNames = [
    "Bella",
    "Luna",
    "Lucy",
    "Daisy",
    "Lola",
    "Sadie",
    "Molly",
    "Bailey",
    "Stella",
    "Maggie",
    "Chloe",
    "Penny",
    "Nala",
    "Zoey",
    "Lily",
    "Coco",
    "Sophie",
    "Rosie",
    "Ellie",
    "Ruby",
    "Piper",
    "Mia",
    "Roxy",
    "Gracie",
    "Millie",
    "Willow",
    "Lulu",
    "Pepper",
    "Ginger",
    "Harley",
    "Abby",
    "Winnie",
    "Nova",
    "Kona",
    "Riley",
    "Zoe",
    "Lilly",
    "Dixie",
    "Lady",
    "Izzy",
    "Hazel",
    "Layla",
    "Olive",
    "Charlie",
    "Sasha",
    "Maya",
    "Honey",
    "Athena",
    "Lexi",
    "Cali",
    "Annie",
    "Belle",
    "Princess",
    "Phoebe",
    "Emma",
    "Ella",
    "Cookie",
    "Marley",
    "Callie",
    "Scout",
    "Roxie",
    "Remi",
    "Minnie",
    "Maddie",
    "Dakota",
    "Leia",
    "Poppy",
    "Josie",
    "Harper",
    "Mila",
    "Angel",
    "Holly",
    "Ava",
    "Ivy",
    "Mocha",
    "Gigi",
    "Paisley",
    "Koda",
    "Cleo",
    "Penelope",
    "Bonnie",
    "Missy",
    "Frankie",
    "Sugar",
    "Aspen",
    "Xena",
    "Shelby",
    "Fiona",
    "Dolly",
    "Georgia",
    "Shadow",
    "Delilah",
    "Peanut",
    "Grace",
    "Rose",
    "Skye",
    "Pearl",
    "Jasmine",
    "Juno",
    "Trixie"
  ];

  const maleNames = [
    "Max",
    "Charlie",
    "Milo",
    "Buddy",
    "Rocky",
    "Bear",
    "Leo",
    "Duke",
    "Teddy",
    "Tucker",
    "Beau",
    "Oliver",
    "Jack",
    "Winston",
    "Ollie",
    "Toby",
    "Jax",
    "Blu",
    "Finn",
    "Louie",
    "Murphy",
    "Loki",
    "Moose",
    "Gus",
    "Bruno",
    "Ace",
    "Apollo",
    "Hank",
    "Archie",
    "Kobe",
    "Henry",
    "Thor",
    "Simba",
    "Scout",
    "Bailey",
    "Diesel",
    "Jake",
    "Lucky",
    "Buster",
    "Otis",
    "Jackson",
    "Benny",
    "Jasper",
    "Chewy",
    "Oscar",
    "Bandit",
    "Rex",
    "Oreo",
    "Riley",
    "Baxter",
    "Cody",
    "Coco",
    "Rocco",
    "Tank",
    "Prince",
    "Ranger",
    "King",
    "Marley",
    "Roscoe",
    "Sam",
    "Oakley",
    "Copper",
    "Gizmo",
    "Chase",
    "Luke",
    "Boomer",
    "Bruce",
    "Frankie",
    "Chance",
    "Rusty",
    "Hunter",
    "Ozzy",
    "Tyson",
    "Romeo",
    "Rudy",
    "Mac",
    "Bubba",
    "Peanut",
    "Kai",
    "Chico",
    "Joey",
    "Atlas",
    "Goose",
    "Samson",
    "Chief",
    "Levi",
    "Titan",
    "Frank",
    "Axel",
    "Brutus",
    "Ghost",
    "Brady",
    "Scooby",
    "Cosmo",
    "Chester",
    "Chip",
    "Wally",
    "Rufus",
    "Dash",
    "Louis"
  ];

  const people = [true, false];

  const reactive = [true, false];

  const size = ["small", "medium", "large"];

  const generateRandomInteger = function (max) {
    return Math.floor(Math.random() * max) + 1;
  };

  const generateBreedIncompatibility = function (breeds) {
    const incompatibleDogs = [];

    for (let i = 0; i < generateRandomInteger(5); i++) {
      incompatibleDogs.push(breeds[generateRandomInteger(49) - 1]);
    }
    return incompatibleDogs;
  };

  let dogs = [];
  let dog = {};

  for (let i = 0; i < number; i++) {
    dog["age"] = generateRandomInteger(15);

    dog["breed"] = breeds[generateRandomInteger(49)];

    dog["breed_incompatibility"] = generateBreedIncompatibility(breeds);

    dog["description"] =
      "My dog is dolor sit amet. Rem nisi asperiores qui voluptatem bark, bark qui omnis magnam ut sweet similique et atque quasi? Sed maiores nobis non dolor nemo est fetch tempore ut magnam impedit aut enim odit. Ut play ipsam 33 dolores runs et animi sunt qui molestiae aspernatur et aperiam ipsa sit nostrum iure.";

    dog["size_compatibility"] = sizeCompatibility[generateRandomInteger(4) - 1];

    dog["gender"] = gender[generateRandomInteger(2) - 1];

    if (dog.gender === "female") {
      dog["name"] = femaleNames[generateRandomInteger(100) - 1];
    } else {
      dog["name"] = maleNames[generateRandomInteger(100) - 1];
    }

    dog["gender_compatiblitiy"] =
      genderIncompatibility[generateRandomInteger(3) - 1];

    dog["image"] = photo;

    dog["people"] = people[generateRandomInteger(2) - 1];

    dog["reactive"] = reactive[generateRandomInteger(2) - 1];

    dog["size"] = size[generateRandomInteger(3) - 1];

    dogs.push(dog);

    dog = {};
  }
  return dogs;
};
