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

  return router;
};


// CRUD

// CREATE = POST /dogs/:id   create a dog
// READ   = GET  /dogs       get matched dogs
// UPDATE = POST /dogs/:id   update dogs' info
// DELETE = POST /dogs/:id   delete user