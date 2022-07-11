const router = require("express").Router();

module.exports = db => {
  router.get("/owners", (request, response) => {
    db.query(`SELECT * FROM owners`).then(({ rows: owners }) => {
      response.json(
        owners.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //info about specific owner
  router.get("/owner/:id", (request, response) => {
    const id = request.params.id;
    db.query(`SELECT * FROM owners WHERE owners.id = ${id}`).then(({ rows: owners }) => {
      response.json(
        owners.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //Create new dog
  router.post(`/owners`, (req, res) => {
    console.log(req.body);
    console.log(req.params);
    db.query(`
    INSERT INTO owners 
    (name, password, city, email, thumbnail_photo_url, location)
     VALUES 
     ('${req.body.name}', '${req.body.hashedpassword}', '${req.body.city}', '${req.body.email}', '${req.body.thumbnail_photo_url}', '(-194.0, 53.0)')`).then((result) => {
      console.log('New owner was successfully added');
    })
    .catch((err) => {
      console.log(err.message);
    });
  })  


  return router;
};

// CRUD

// CREATE = POST /owners/   create an account
// READ = GET /owners          get all the owners
// UPDATE = PUT /owners/:id   update owners info
// DELETE = POST /owners/:id   delete user