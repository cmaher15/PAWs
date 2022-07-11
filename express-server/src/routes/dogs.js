const router = require("express").Router();

module.exports = db => {
  router.get("/dogs", (request, response) => {
    db.query(`SELECT * FROM dogs`).then(({ rows: dogs }) => {
      response.json(
        dogs.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //info about specific dog
  router.get("/dogs/:id", (request, response) => {
    const id = request.params.id;
    db.query(`SELECT * FROM dogs WHERE dogs.id = ${id}`).then(({ rows: dogs }) => {
      response.json(
        dogs.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  // Create new dog
  router.post(`/dogs`, (req, res) => {
    console.log(req.body);
    db.query(`
    INSERT INTO dogs 
    (name, breed, gender, age, size, reactive, good_with_people, size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id)
     VALUES 
     ('${req.body.name}', '${req.body.breed}', '${req.body.gender}', '${req.body.age}', '${req.body.size}', '${req.body.reactive}', '${req.body.good_with_people}', '${JSON.stringify(req.body.size_compatibility)}', '${JSON.stringify(req.body.gender_compatibility)}', '${JSON.stringify(req.body.breed_incompatibility)}', '${req.body.description}', '${req.body.photo_url}', 1)`).then((result) => {
      console.log('New dog was successfully added');
    })
    .catch((err) => {
      console.log(err.message);
    });
    
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