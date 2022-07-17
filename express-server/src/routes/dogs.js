const router = require("express").Router();

module.exports = (db) => {
  ////////////////////////////////////////////////////////////////////

  // get all dogs
  router.get("/dogs", (req, res) => {
    db.query(`SELECT * FROM dogs`)
      .then((result) => res.send(result.rows))
      .catch((err) => console.error(err));
  });

  ////////////////////////////////////////////////////////////////////

  //info about specific dog
  router.get("/dogs/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT dogs.name as dogs_name, breed, gender, age, size, reactive, good_with_reactive_dogs, size_compatibility,gender_compatibility, breed_incompatibility, description, photo_url as dogs_photo, owners.id as owners_id, owners.name as owners_name, owners.city as city, owners.thumbnail_photo_url as owners_photo FROM dogs JOIN owners ON dogs.owner_id = owners.id WHERE dogs.owner_id = ${id}`
    )
      .then((result) => {
        // console.log('info about the dog of specific owner: ',result.rows)
        res.send(result.rows[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Create new dog
  router.post(`/dogs`, (req, res) => {
    console.log('req.body', req.body);
    db.query(
      `
    INSERT INTO dogs 
    (name, breed, gender, age, size, reactive, good_with_reactive_dogs, size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id)
     VALUES 
     ('${req.body.name}', '${req.body.breed}', '${req.body.gender}', '${
        req.body.age
      }', '${req.body.size}', '${req.body.reactive}', '${
        req.body.good_with_reactive_dogs
      }', '${JSON.stringify(req.body.size_compatibility)}', '${JSON.stringify(
        req.body.gender_compatibility
      )}', '${JSON.stringify(req.body.breed_incompatibility)}', '${
        req.body.description
      }', '${req.body.photo_url}', '${req.body.owner_id}')`
    )
      .then((result) => {
        console.log("New dog was successfully added");
        res.send(result.rows);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return router;
};