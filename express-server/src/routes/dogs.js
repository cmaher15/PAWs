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

  router.post('/dogs/:id', (req, res) => {
    console.log(res.rows);
    // db.query(`INSERT INTO dogs (name, breed, gender, age, size, reactive, good_with_people,size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id) VALUES
    // ()
    // `)
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