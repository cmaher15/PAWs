const router = require("express").Router();

module.exports = db => {
  // get dogs
  router.get("/dogs", (req, res) => {

    // const reactive = req.body.reactive;
    // const good = req.body.good_with_people;
    // const size = req.body.size_compatibility;
    // const gender = req.body.gender_compatibility;
    // const incompat = req.body.breed_incompatibility;
    //  const incompat = '{"pitbull": true}';
    db.query(`SELECT * FROM dogs`)
    .then(result => { res.json(result.rows.filter(dog => dog.reactive === true && dog.good_with_people === true && dog.size_compatibility.small === true && dog.gender_compatibility.male === true && breed_incompatibility.pitbul === false))})
    .catch((err) => { console.error(err) });
    });


  //info about specific dog
  router.get("/dogs/:id", (req, res) => {
    const id = req.params.id;
    db
    .query(`SELECT * FROM dogs WHERE dogs.id = ${id}`)
    .then((result) => {
      // console.log(result.rows[0])
      res.send(result.rows[0]);
    })
    .catch((err) => {console.error(err)});
  });

  // Create new dog
  router.post(`/dogs`, (req, res) => {
    console.log(req.body);
    db.query(`
    INSERT INTO dogs 
    (name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id)
     VALUES 
     ('${req.body.name}', '${req.body.breed}', '${req.body.gender}', '${req.body.age}', '${req.body.size}', '${req.body.reactive}', '${req.body.good_with_people}', '${JSON.stringify(req.body.size_compatibility)}', '${JSON.stringify(req.body.gender_compatibility)}', '${JSON.stringify(req.body.breed_incompatibility)}', '${req.body.description}', '${req.body.photo_url}', 1)`)
    .then((result) => {
      console.log('New dog was successfully added');
      res.send(result.rows);
    })
    .catch((err) => {console.error(err)});
  })
  return router;
};


// SELECT DOG NAME BY OWNERS ID
// select dogs.name from dogs join owners on owners.id = dogs.owner_id where owners.id = 1;

//

// CRUD

// CREATE = POST /dogs/:id   create a dog
// READ   = GET  /dogs       get matched dogs
// UPDATE = POST /dogs/:id   update dogs' info
// DELETE = POST /dogs/:id   delete user