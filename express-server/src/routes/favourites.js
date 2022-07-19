const router = require("express").Router();

module.exports = db => {
  ////////////////////////////////////////////////////////////////////

  // get all favourites
  router.get("/favourites", (req, res) => {
    db.query("SELECT * FROM favourites")
      .then(result => res.send(result.rows))
      .catch(err => console.error(err));
  });

  ////////////////////////////////////////////////////////////////////

  // specific favourite dog
  router.get("/favourites/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT dogs.name as name, dogs.breed as breed, dogs.gender as gender, dogs.age as age, dogs.size as size, dogs.reactive as reactive, dogs.good_with_reactive_dogs as good_with_reactive_dogs, dogs.size_compatibility as size_compatibility, dogs.gender_compatibility as gender_compatibility, dogs.breed_incompatibility as breed_incompatibility, dogs.description as description, dogs.photo_url as photo_url, owners.id as owners_id, owners.name as owners_name, owners.city as city, owners.thumbnail_photo_url as owners_photo FROM dogs JOIN owners ON dogs.owner_id = owners.id JOIN favourites ON dogs.id = favourites.dog_id WHERE favourites.owner_id = ${id}`
    )
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Add to favourites
  router.post("/favourites", (req, res) => {
    const sql = `INSERT INTO favourites (owner_id, dog_id) SELECT ${req.body.owner_id}, ${req.body.dog_id} WHERE NOT EXISTS (SELECT owner_id, dog_id FROM favourites WHERE owner_id = ${req.body.owner_id} AND dog_id = ${req.body.dog_id});`;

    db.query(sql)
      .then(result => {
        console.log("Dog has been added to favourites");
        res.send(result.rows);
      })
      .catch(err => {
        console.error(err);
      });
  });

  ////////////////////////////////////////////////////////////////////

  // Delete from favourites
  router.delete("/favourites/:id/:dog_id", (req, res) => {
    // console.log("req.body", req.params);
    const owner_id = req.params.id;
    const dog_id = req.params.dog_id;
    // console.log("owner_id", owner_id);
    // console.log("dog_id", dog_id);

    const sql = `DELETE FROM favourites WHERE owner_id = ${owner_id} AND dog_id = ${dog_id}`;

    db.query(sql)
      .then(result => {
        console.log("Dog has been removed from favourites");
        res.send(result.rows);
      })
      .catch(err => {
        console.error(err);
      });
  });

  return router;
};
